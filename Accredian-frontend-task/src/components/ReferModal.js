import React from "react";
import { useForm } from "react-hook-form";

const ReferModal = ({ setIsOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Referral Data:", data);
    setIsOpen(false); // Modal close after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800">Refer a Friend</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          {/* Referrer Name */}
          <div>
            <label className="block text-gray-600">Your Name</label>
            <input
              type="text"
              {...register("referrerName", { required: true })}
              className="w-full p-2 border rounded-lg mt-1"
            />
            {errors.referrerName && <p className="text-red-500 text-sm">Name is required.</p>}
          </div>

          {/* Referee Email */}
          <div className="mt-3">
            <label className="block text-gray-600">Friend's Email</label>
            <input
              type="email"
              {...register("friendEmail", { required: true })}
              className="w-full p-2 border rounded-lg mt-1"
            />
            {errors.friendEmail && <p className="text-red-500 text-sm">Email is required.</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg">
            Send Invite
          </button>
        </form>

        {/* Close Button */}
        <button onClick={() => setIsOpen(false)} className="mt-3 text-red-500">
          Close
        </button>
      </div>
    </div>
  );
};

export default ReferModal;
