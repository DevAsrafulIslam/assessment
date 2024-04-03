import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdShare } from "react-icons/io";

export const KarateCourse = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl col uppercase font-semibold">My Karate Course</h2>
      <div className="flex my-6 gap-6">
        <p className="border-b-2 pb-2 border-[#ffb607]">
          <button>Course Details</button>
        </p>
        <p>
          <button>Class Videos</button>
        </p>
      </div>
      <div className="flex justify-between gap-6">
        <div>
          {/* <div className="w-full relative aspect-video">
            <Image
              fill
              className="absolute object-cover"
              src="/src/image/home/Frame2.png"
              alt="Picture of the author"
            />
          </div> */}
          <Image
            src="/src/image/home/Frame2.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div>
          <div className="flex mb-4 justify-between ">
            <h4 className="font-semibold">SHITO-RYU KARATE</h4>
            <Link href="/">
              <IoMdShare />
            </Link>
          </div>
          <p>
            non, amet, nibh ullamcorper ex. laoreet amet, commodo fringilla leo.
            at, scelerisque tincidunt enim. facilisis amet, urna. odio odio non
            urna. nibh id eu nisi . Morbi odio nisl. nulla, vel dui. nisi sit
            orci quis efficitur. tincidunt quis nisl. sed Sed ex est. varius Nam
            quis eget lorem. id Donec libero, est. eget non . non, amet, nibh
            ullamcorper ex. laoreet amet, commodo fringilla leo. at, scelerisque
            tincidunt enim. facilisis amet, urna. odio odio non urna. nibh id eu
            nisi . Morbi odio nisl. nulla, vel dui. nisi sit orci quis
            efficitur. tincidunt quis nisl. sed Sed ex est. varius Nam quis eget
            lorem. id Donec libero, est. eget non .
          </p>
        </div>
      </div>
    </div>
  );
};
