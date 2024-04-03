"use client";
import logo from "/public/assessment-logo 1.png"; // Importing the image

import Link from "next/link";
import React from "react";

import { NavMenu } from "../navmenu/navmenu";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Image } from "lucide-react";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="flex justify-between animate__animated animate__zoomIn navbar container">
      <DropdownMenu />
      <div className="flex flex-col w-full mt-2">
        <div className="flex justify-between items-center w-full">
          <div className="grid text-center bg-white px-6 py-2 border rounded-3xl">
            <a className="text-xl md:text-xl  font-bold uppercase">
              assessment
            </a>
            <div className="divide-x-2 border border-black"></div>
            <span className="">learn it, do it</span>
          </div>
          <div>
            <NavMenu />
          </div>
          <div className=" md:flex hidden items-center justify-between gap-6 text-white">
            <CiSearch className="text-3xl" />
            <FaUserCircle className="text-3xl" />
          </div>
        </div>
        <h1 className="md:grid hidden text-center text-3xl font-semibold py-4 uppercase text-[#ffb607]">
          Profile
        </h1>
      </div>
    </header>
  );
};
