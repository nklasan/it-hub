"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Importujemo usePathname
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Links = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const pathname = usePathname(); // Koristimo usePathname za dobijanje trenutnog URL-a

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className="h-10 w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-zinc-300 bg-opacity-15 text-zinc-800">
      <div className="hidden md:flex items-center justify-between h-full">
        {/* Glavni linkovi */}
        <div className="flex flex-row justify-start items-center gap-8 text-sm">
          {[
            { href: "/", label: "Početna" },
            { href: "/onama", label: "O nama" },
            { href: "/pravno", label: "Pravna lica" },
            { href: "/zaposlenje", label: "Karijera i zaposlenje" },
            { href: "/kontakt", label: "Kontakt" },
            { href: "/pravila", label: "Pravila privatnosti" },
            { href: "/isporuka", label: "Isporuka proizvoda" },
            { href: "/placanje", label: "Načini plaćanja" },
          ].map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`hover:border-b-2 hover:border-b-lama hover:text-lama hover:transition-transform duration-200 hover:font-semibold ${
                activeIndex !== null && activeIndex !== index
                  ? "opacity-50"
                  : "opacity-100"
              } ${
                pathname === link.href // Provera da li je korisnik na tom linku
                  ? "border-b-2 border-b-lama font-semibold"
                  : ""
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Ikonice društvenih mreža */}
        <div className="flex flex-row justify-end items-center gap-4">
          {[FaFacebookF, FaInstagram, FaYoutube, FaTiktok].map(
            (Icon, index) => (
              <Link
                key={index}
                href="/"
                className={`hover:text-lama hover:transition-transform duration-200 ${
                  activeIndex !== null && activeIndex !== index + 8
                    ? "opacity-50"
                    : "opacity-100"
                }`}
                onMouseEnter={() => handleMouseEnter(index + 8)}
                onMouseLeave={handleMouseLeave}
              >
                <Icon size={22} />
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Links;
