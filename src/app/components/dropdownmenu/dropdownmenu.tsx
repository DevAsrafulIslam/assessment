"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";

export function DropdownMenubar() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="container w-20 mx-0 md:hidden grid"
          variant="outline"
        >
          <FaBarsStaggered />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/">HOME</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/about">ABOUT</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/course">COURSES</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/shop">SHOP</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/events">EVENTS</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/contact">CONTACT</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
