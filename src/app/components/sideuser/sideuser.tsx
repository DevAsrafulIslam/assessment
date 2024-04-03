import Link from "next/link";
import React from "react";

export const SideUser = () => {
  return (
    <div className="flex justify-between flex-col gap-1 w-3/12 text-start rounded-3xl px-5 py-7 shadow border  ">
      <div className="text-center mb-6">
        <h3 className="text-xl">Assessment Username</h3>
        <p className="my-4">Batch no : KC22041</p>
        <p>Roll no : OKC1122334</p>
      </div>
      <Link
        className="bg-[#e9e9ee] hover:bg-[#27235a] hover:text-white hover:hover:scale-105  hover:scale transition duration-75  px-4 py-4 rounded-md"
        href="/"
      >
        <div className="flex items-center  text-center ">
          <button> Karate Course</button>
        </div>
      </Link>
      <Link
        className="bg-[#e9e9ee] hover:bg-[#27235a] hover:text-white hover:hover:scale-105 duration-75 hover:scale transition  px-4 py-4 rounded-md"
        href="/"
      >
        <div className="flex items-center  text-center ">
          <button>Online Course</button>
        </div>
      </Link>
      <Link
        className="bg-[#e9e9ee] hover:bg-[#27235a] hover:text-white hover:hover:scale-105 duration-75 hover:scale transition  px-4 py-4 rounded-md"
        href="/"
      >
        <div className="flex items-center  text-start ">
          <button>Videos</button>
        </div>
      </Link>
      <Link
        className="bg-[#e9e9ee] hover:bg-[#27235a] hover:text-white hover:hover:scale-105 duration-75 hover:scale transition  px-4 py-4 rounded-md"
        href="/"
      >
        <div className="flex items-center  text-center ">
          <button>Equipment</button>
        </div>
      </Link>
      <Link
        className="bg-[#e9e9ee] hover:bg-[#27235a] hover:text-white hover:hover:scale-105 duration-75 hover:scale transition  px-4 py-4 rounded-md"
        href="/"
      >
        <div className="flex items-center  text-center ">
          <button>Component</button>
        </div>
      </Link>
      <div className="my-6"></div>
      <Link
        className="bg-[#e9e9ee] hover:bg-[#27235a] hover:text-white hover:hover:scale-105  hover:scale transition duration-75  px-4 py-4 rounded-md"
        href="/"
      >
        <div className="flex items-center  text-center ">
          <button> Your Favorite</button>
        </div>
      </Link>
      <Link
        className="bg-[#e9e9ee] hover:bg-[#27235a] hover:text-white hover:hover:scale-105 duration-75 hover:scale transition  px-4 py-4 rounded-md"
        href="/"
      >
        <div className="flex items-center  text-center ">
          <button>Notification</button>
        </div>
      </Link>
      <Link
        className="bg-[#e9e9ee] hover:bg-[#27235a] hover:text-white hover:hover:scale-105 duration-75 hover:scale transition  px-4 py-4 rounded-md"
        href="/"
      >
        <div className="flex items-center  text-start ">
          <button>My Profile</button>
        </div>
      </Link>
      <Link
        className="bg-[#e9e9ee] hover:bg-[#27235a] hover:text-white hover:hover:scale-105 duration-75 hover:scale transition  px-4 py-4 rounded-md"
        href="/"
      >
        <div className="flex items-center  text-center ">
          <button>Payment Method</button>
        </div>
      </Link>
      <Link
        className="bg-[#e9e9ee] hover:bg-[#27235a] hover:text-white hover:hover:scale-105 duration-75 hover:scale transition  px-4 py-4 rounded-md"
        href="/"
      >
        <div className="flex items-center  text-center ">
          <button>Setting</button>
        </div>
      </Link>
      <Link
        className="bg-[#e9e9ee] hover:bg-[#27235a] hover:text-white hover:hover:scale-105 duration-75 hover:scale transition  px-4 py-4 rounded-md"
        href="/"
      >
        <div className="flex items-center  text-center ">
          <button>Sign Out</button>
        </div>
      </Link>
    </div>
  );
};
