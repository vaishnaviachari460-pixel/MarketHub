import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-green-50">

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-6xl mb-4"
      >
        ✅
      </motion.div>

      <h1 className="text-2xl font-bold mb-2">
        Payment Successful!
      </h1>

      <p className="text-gray-600 mb-6">
        Your order has been placed 🎉
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-green-500 text-white px-6 py-2 rounded"
      >
        Go Home
      </button>
    </div>
  );
}