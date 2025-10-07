import React from "react";
import { Link } from "react-router-dom";
import { XCircle } from "lucide-react";

const DetailNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center py-20">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 max-w-lg w-full text-center">
        <XCircle className="mx-auto w-16 h-16 text-red-500" aria-hidden="true" />
        <h1 className="mt-4 text-5xl font-extrabold text-gray-800">Event Not Found</h1>
        <p className="mt-2 text-lg text-gray-600">
          Sorry — the event you’re looking for doesn’t exist or may have been removed.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          You can browse other available events or return to the homepage.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            to="/events"
            className="px-5 py-2 bg-indigo-700 text-white rounded-lg font-medium hover:bg-indigo-800 hover:shadow-md transition"
          >
            Browse Events
          </Link>

          <Link
            to="/"
            className="px-5 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailNotFound;
