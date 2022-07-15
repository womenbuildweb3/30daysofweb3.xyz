import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <a className="flex items-center sm:gap-4">
        <Image
          className="cursor-pointer"
          alt="30 Days of Web3 Logo"
          src="/images/logo.png"
          height="40px"
          width="40px"
        />
        <span className="hidden text-xl cursor-pointer sm:block font-poppins-bold">
          30 Days of Web3
        </span>
      </a>
    </Link>
  );
};

export default Logo;
