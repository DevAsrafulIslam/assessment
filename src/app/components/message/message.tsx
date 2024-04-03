import React from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export const Message = () => {
  return (
    <div>
      <h2 className="text-2xl text-center uppercase font-semibold">
        Send Us Your MessAge
      </h2>
      <div className="grid space-y-4 justify-center mt-8">
        <Input
          className="opacity-50 border-none bg-[#e9e9ee] rounded-full px-4 w-[546px] font-medium"
          type="text"
          placeholder="Subject"
        ></Input>
        <textarea
          className="w-[546px] h-[144px] bg-[#e9e9ee] outline-none rounded-3xl pt-[14px] px-4 "
          placeholder="Message"
        ></textarea>
        <div className="flex items-center space-x-2">
          <Checkbox className="rounded opacity-50" id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            are you confirm to send messages.
          </label>
        </div>
        <Button
          className="bg-[#27235a] mx-auto w-2/6 text-xl text-white hover:text-black rounded-full px-10 py-7 border-b-2 hover:border-[#ffb607] hover:border-b-2 "
          type="submit"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
