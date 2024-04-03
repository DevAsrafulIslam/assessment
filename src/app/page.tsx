import React from "react";
import { NavMenu } from "./components/navmenu/navmenu";
import { Header } from "./components/header";
import Link from "next/link";
import { FaHandHoldingHeart } from "react-icons/fa";
import { Settings } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#f6f6f6]">
      <div className="bg-[#27235a]">
        <Header />
      </div>
    </div>
  );
}
