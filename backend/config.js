import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 8001,
  connectionstring: process.env.CONNECTION_STRING,
  jwtSecret: process.env.JWT_SECRET,
  emailService: process.env.EMAIL_SERVICE,
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
  emailHost: process.env.HOST,
  emailPort: process.env.GMAIL_PORT,
};
