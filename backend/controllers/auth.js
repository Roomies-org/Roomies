import Joi from "joi";
import { apiResponseCode } from "../helper.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config.js";
import nodemailer from "nodemailer";

const registration = async (req, res) => {
  const registerSchema = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    password: Joi.string().min(8).required(),
  });

  try {
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        responseCode: apiResponseCode.BAD_REQUEST,
        responseMessage: error.details[0].message,
        data: null,
      });
    }

    const { fullName, email, username, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        responseCode: apiResponseCode.BAD_REQUEST,
        responseMessage: `User with email ${email} already exists`,
        data: null,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    user = new User({
      fullName,
      email,
      username,
      password: hashPassword,
    });

    await user.save();

    res.status(201).json({
      responseCode: apiResponseCode.SUCCESSFUL,
      responseMessage: `User with email ${email} has been created successfully`,
      data: {
        fullName,
        email,
        username,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      responseCode: apiResponseCode.INTERNAL_SERVER_ERR,
      responseMessage: "Internal Server Error",
      data: null,
    });
  }
};

const login = async (req, res) => {
  const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  try {
    const { error } = loginSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        if(error) {
          return res.status(400).json({
            responseCode: apiResponseCode.BAD_REQUEST,
            responseMessage: error.details[0].message,
            data: null,
          });
        },
      });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        responseCode: apiResponseCode.BAD_REQUEST,
        responseMessage: `User with email ${email} does not exist`,
        data: null,
      });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      return res.status(400).json({
        responseCode: apiResponseCode.BAD_REQUEST,
        responseMessage: `Invalid password`,
        data: null,
      });
    }

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedOtp = await bcrypt.hash(otpCode, 10);

    user.otp = {
      code: hashedOtp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    };

    await user.save();

    const transporter = nodemailer.createTransport({
      service: config.emailService,
      host: config.emailHost,
      port: config.emailPort,
      secure: true,
      auth: {
        user: config.emailUser,
        pass: config.emailPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: config.emailUser,
      to: user.email,
      subject: "ROOMIES OTP VERIFICATION",
      text: `Hi ${user.username} Your OTP code is ${otpCode}. It will expire in 5 minutes`,
    });

    res.status(200).json({
      responseCode: apiResponseCode.PENDING_VERIFICATION,
      responseMessage:
        "OTP has been sent to your email, Please verify your account",
      data: null,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      responseCode: apiResponseCode.INTERNAL_SERVER_ERR,
      responseMessage: "Internal Server Error",
      data: null,
    });
  }
};

const verifyOtp = async (req, res) => {
  const verifyOtpSchema = Joi.object({
    email: Joi.string().email().required(),
    otp: Joi.string().required(),
  });

  try {
    const { error } = verifyOtpSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        responseCode: apiResponseCode.BAD_REQUEST,
        responseMessage: error.details[0].message,
        data: null,
      });
    }

    const { email, otp } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        responseCode: apiResponseCode.BAD_REQUEST,
        responseMessage: `User with email ${email} does not exist`,
        data: null,
      });
    }

    if (!user.otp || user.otp.expiresAt < new Date()) {
      return res.status(400).json({
        responseCode: apiResponseCode.BAD_REQUEST,
        responseMessage: `OTP has expired, Please request for a new one`,
        data: null,
      });
    }

    const isOtpValid = await bcrypt.compare(otp, user.otp.code);

    if (!isOtpValid) {
      return res.status(401).json({
        responseCode: apiResponseCode.BAD_REQUEST,
        responseMessage: `Invalid OTP`,
        data: null,
      });
    }

    if (!user.isVerfied) {
      user.isVerfied = true;
    }

    user.otp = null;

    await user.save();

    const tokenPayload = {
      id: user._id,
      email: user.email,
    };

    const token = jwt.sign(tokenPayload, config.jwtSecret, { expiresIn: "1h" });

    return res.status(200).json({
      responseCode: apiResponseCode.SUCCESSFUL,
      responseMessage: "OTP verfied successfully. You are now logged in",
      data: {
        fullName: user.fullName,
        email: user.email,
        username: user.username,
        isVerfied: user.isVerfied,
        token,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      responseCode: apiResponseCode.INTERNAL_SERVER_ERR,
      responseMessage: "Internal Server Error",
      data: null,
    });
  }
};

export { registration, login, verifyOtp };
