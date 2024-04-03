"use client";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

import Link from "next/link";

export function NavMenu() {
  return (
    <Menubar className="border-none justify-between bg-inherit text-white md:flex hidden">
      <DropdownMenu />
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/">HOME</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/about">ABOUT</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/course">COURSES</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/shop">SHOP</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/events">EVENTS</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/contact">CONTACT</Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
