import React, { useState } from "react";
import ReferModal from "./ReferModal"; // Modal Component Import

const ReferPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Refer & Earn Rewards 🎉
        </h1>
        <p className="text-gray-600 mt-2">
          Invite your friends & earn rewards when they enroll!
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          Refer Now
        </button>
      </div>

      {/* Modal */}
      {isOpen && <ReferModal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default ReferPage;
