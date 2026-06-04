"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import useravatar from "@/assets/user.png";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="p-4 flex items-center justify-between container mx-auto">
      <div></div>

      <ul className="flex gap-4">
        <li>
          <Link
            href="/"
            className={pathname === "/" ? "text-green-500 font-bold" : ""}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className={pathname === "/about" ? "text-green-500 font-bold" : ""}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            href="/career"
            className={pathname === "/career" ? "text-green-500 font-bold" : ""}
          >
            Career
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <Image src={useravatar} alt="User Avatar" width={40} height={40} />

        <button className="btn bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          <Link href="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;