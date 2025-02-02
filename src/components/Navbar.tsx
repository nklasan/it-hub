import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
import { MdOutlineComputer } from "react-icons/md";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
  return (
    <div className="relative h-20 w-full px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
      {/*Mobilni prikaz*/}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link className="group" href="/">
          <Image src="/logo.png" alt="IT Hub logo" width={84} height={84} />
        </Link>
        <Menu />
      </div>
      {/*Vece rezolucije*/}
      <div className="hidden md:flex items-center justify-between gap-6 h-full">
        {/*Leva*/}
        <div className="w-1/4 xl:w-1/2 flex text-sm items-center justify-start gap-8 h-full">
          <Link href="/list?cat=all-products" className="flex flex-row items-center gap-1 darkButton">
            <MdOutlineComputer />
            Svi proizvodi
          </Link>
        </div>
        <div className="w-full justify-center">
          <SearchBar />
        </div>
        {/*Desna*/}
        <div className="w-full xl:w-1/2 flex items-center justify-end gap-8">
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
