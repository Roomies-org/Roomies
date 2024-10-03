
# **Roomies - A Student Housing & Roommate Matching App**

Roomies is a decentralized student housing platform that helps students find roommates based on personality compatibility, manage rent and shared expenses, and earn cryptocurrency through a task marketplace. The app is designed to foster collaboration between roommates while ensuring transparency and security through blockchain technology.

## **Features**

- **Personality-Based Roommate Matching**: Match users based on compatibility from a multi-step questionnaire.
- **Task Marketplace**: Users can assign or accept household tasks and earn cryptocurrency as rewards.
- **Rent & Expense Management**: Track rent payments and settle shared expenses using cryptocurrency.
- **User Profiles & Verification**: Build trusted profiles, verify identity, and communicate with potential roommates through secure messaging.

## **Tech Stack**

### **Frontend**: 
- **React.js**: Frontend JavaScript library used for building the user interface.
- **React Router**: Navigation and routing.
- **Axios**: For making API requests to the backend.
- **Web3.js or Ethers.js**: Connect the React frontend with the Ethereum blockchain.

### **Backend**:
- **Node.js**: JavaScript runtime environment to build the backend logic.
- **Express.js**: Node.js framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user data, tasks, and profiles.
- **Mongoose**: ODM library for MongoDB, providing a structured way to interact with the database.
- **JSON Web Token (JWT)**: For user authentication and session management.

### **Blockchain**:
- **Solidity**: Smart contract programming language used to create and manage tasks, rent payments, and expense sharing.
- **Ethereum Blockchain**: Decentralized blockchain for executing smart contracts.
- **Metamask**: Crypto wallet and gateway to interact with the blockchain from the browser.

### **Tools**:
- **Hardhat**: Ethereum development environment for compiling, testing, and deploying smart contracts.
- **IPFS (InterPlanetary File System)**: Decentralized storage solution for user data, profiles, and other app assets.

---

---

## **Smart Contract Overview**

### **RoomiesApp Smart Contract (Solidity)**

- **Task Marketplace**: Users can post tasks with rewards in cryptocurrency. Other users can accept and complete tasks to earn crypto.
- **Rent Management**: Users can pay rent using cryptocurrency and track payment status.
- **Expense Sharing**: Roommates can share expenses and settle them in crypto.
- **User Profile**: Decentralized user profiles where users can verify their identity on the blockchain.

### Smart Contract Files:
- `RoomiesApp.sol`: Contains all core logic for tasks, rent payments, and expense tracking.

---

## **Installation & Setup**

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/download/) (v14+)
- [MongoDB](https://www.mongodb.com/try/download/community) (For backend database)
- [Hardhat](https://hardhat.org/getting-started/#installation) for smart contract development.
- [Ganache](https://www.trufflesuite.com/ganache) for local blockchain development.
- [Metamask](https://metamask.io/) browser extension.

### Backend Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/roomies-backend.git
   cd roomies/server
   ```

2. **Install Backend Dependencies:**

   ```bash
   npm install
   ```

3. **Create Environment Variables:**

   In the root of the `server` directory, create a `.env` file:

   ```bash
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   ```

4. **Start the Backend:**

   ```bash
   npm run dev
   ```

   The backend API will be running on `http://localhost:5000`.

### Frontend Setup

1. **Navigate to the Client Directory:**

   ```bash
   cd ../client
   ```

2. **Install Frontend Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Frontend:**

   ```bash
   npm start
   ```

   The React frontend will be running on `http://localhost:3000`.


3. **Connect Frontend to Blockchain:**

   Ensure that your frontend (React) connects to the blockchain using `Web3.js` or `Ethers.js` and Metamask.


---

## **Technologies & Tools**

- **React.js**: For creating the frontend of the Roomies app.
- **Node.js & Express**: Backend server to handle API requests and business logic.
- **MongoDB & Mongoose**: Database and schema management for storing user data, tasks, and expenses.
- **Solidity & Ethereum**: Smart contracts deployed on the Ethereum blockchain for decentralized task, rent, and expense management.
- **Hardhat**: For smart contract deployment and testing.
- **Web3.js or Ethers.js**: For integrating blockchain interactions in the frontend.
- **Metamask**: Wallet for handling crypto transactions.

---

## **Future Enhancements**

- Integrate with popular wallet providers like **Coinbase Wallet** for easier user onboarding.
- Add notifications for rent deadlines, task completions, and roommate interactions.
- Implement personality matching algorithms using machine learning.

---

## **License**

This project is licensed under the MIT License.

---
