"use client";

import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaBriefcase , FaClock } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [contactIsVisible, setContactIsVisible] = useState(true);

  return (
    // Glavni deo
    <div className="hidden h-8 md:flex flex-col px-4 py-1 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-zinc-900 text-gray-100 text-sm">
      {/*Mobilni prikaz*/}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link className="group" href="/">
          <Image src="/logo.svg" alt="IT Hub logo" width={24} height={24} />
        </Link>
      </div>

      {/*Desktop prikaz*/}
      <div className="hidden md:flex items-center justify-between gap-6 h-full text-gray-100 text-sm">
        {/*Leva*/}
        <div
          className="relative w-full flex flex-row overflow-hidden text-sm justify-start"
          onMouseEnter={() => setContactIsVisible(true)}
          onMouseLeave={() => setContactIsVisible(false)}
        >
          <div
            className={`transition-transform duration-500 ${
              contactIsVisible ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <span className="whitespace-nowrap cursor-pointer text-sm">
              Prikaži kontakt
            </span>
          </div>

          <div
            className={`absolute top-0 ${
              contactIsVisible ? "left-0 translate-x-0" : "-translate-x-full"
            } flex items-center gap-3 overflow-hidden w-full transition-transform duration-500`}
            style={{
              transform: contactIsVisible
                ? "translateX(0)"
                : "translateX(-200%)",
            }}
          >
            <Link
              href="mailto:prodaja@ithub.rs"
              className="group flex flex-row items-center gap-1"
              passHref
            >
              <FaEnvelope />
              <span className="text-zinc-200 font-semibold">
                prodaja@ithub.rs
              </span>
            </Link>
          </div>
        </div>

        <div className="group w-full flex flex-row items-center gap-1 cursor-pointer">
            <FaBriefcase className="group-hover:text-zinc-300 "/>
            <p className="group-hover:text-zinc-300">
              Pravna lica: <span className="font-semibold">032/422-300</span>
            </p>
        </div>

        {/*Desna*/}
        <div className="group w-full flex flex-row justify-end items-center gap-1 cursor-pointer">
          <FaClock className="group-hover:text-zinc-300"/>
          <p className="group-hover:text-zinc-300">
            Radnim danima: <span className="font-bold">8-20h</span>, Subota:
            <span className="font-bold"> 9-15h</span>
          </p>
        </div>
      </div>
      {/* Kraj glavnog dela */}
    </div>
  );
};

export default Header;
