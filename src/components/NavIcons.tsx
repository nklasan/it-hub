"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CartModal from "./CartModal";
import { useWixClient } from "@/hooks/useWixClient";
import Cookies from "js-cookie";
import { useCartStore } from "@/hooks/useCartStore";
import { RiUserShared2Line } from "react-icons/ri";
import { IoBagHandle } from "react-icons/io5";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();
  const router = useRouter();

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    setIsLoading(false);
    setIsProfileOpen(false);
    router.push(logoutUrl);
  };

  const { cart, counter, getCart } = useCartStore();

  const totalPrice =
    cart.lineItems?.reduce((total, item) => {
      const price = item.price?.amount ?? 0;
      const quantity = item.quantity ?? 1;
      return total + Number(price) * Number(quantity);
    }, 0) || 0;

  const totalItems =
    cart.lineItems?.reduce((count, item) => count + (item.quantity || 0), 0) ||
    0;

  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);

  return (
    <div className="flex items-center gap-2">
      <button
        className="flex flex-row items-center elipseButton"
        onClick={handleProfile}
      >
        <RiUserShared2Line size={28} />
      </button>
      <div className="flex flex-col mr-1 text-sm leading-tight">
        <span className="textStyle font-medium">Prijava</span>
        <span className="textStyle font-medium">Registracija</span>
      </div>

      {isProfileOpen && (
        <div className="absolute p-4 rounded-md bg-white top-12 z-20 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="mt-2 cursor-pointer" onClick={handleLogout}>
            {isLoading ? "Odjavljivanje..." : "Odjavi se"}
          </div>
        </div>
      )}
      {/* Lista zelja
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      /> */}
      <button
        className="flex flex-row items-center gap-1 elipseButton"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <IoBagHandle size={28} />
      </button>
      <div className="flex flex-col gap-0 text-sm leading-tight">
        <span className="textStyle font-medium">
          {totalItems} {totalItems === 1 ? "proizvod" : "proizvoda"}{" "}
        </span>
        <span className="textStyle font-black">
          {" "}
          {new Intl.NumberFormat("sr-RS", {
            style: "currency",
            currency: "RSD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(totalPrice)}
        </span>
      </div>

      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
