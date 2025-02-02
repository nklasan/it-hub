"use client";

import Image from "next/image";
import { useCartStore } from "@/hooks/useCartStore";
import { media as wixMedia } from "@wix/sdk";
import { useWixClient } from "@/hooks/useWixClient";
import { currentCart } from "@wix/ecom";

const CartModal = () => {
  const wixClient = useWixClient();
  const { cart, isLoading, removeItem } = useCartStore();

  const handleCheckout = async () => {
    try {
      const orderId = Math.floor(Math.random() * 1000000);
      localStorage.setItem("orderId", orderId.toString());
      window.location.href = `${window.location.origin}/uspesno`;
    } catch (err) {
      console.error("Greška pri checkout-u:", err);
    }
  };

  const formatPriceRSD = (price: number) => {
    return new Intl.NumberFormat("sr-RS", {
      style: "currency",
      currency: "RSD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-14 right-0 flex flex-col gap-6 z-20">
      {!cart.lineItems ? (
        <div className="text-xl">Nemate arikala u korpi</div>
      ) : (
        <>
          <h2 className="text-xl">Vaša korpa</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            {cart.lineItems.map((item) => (
              <div className="flex gap-4" key={item._id}>
                {item.image && (
                  <Image
                    src={wixMedia.getScaledToFillImageUrl(
                      item.image,
                      72,
                      96,
                      {}
                    )}
                    alt=""
                    width={72}
                    height={96}
                    className="object-cover rounded-md"
                  />
                )}
                <div className="flex flex-col justify-between w-full">
                  {/* TOP */}
                  <div className="">
                    {/* TITLE */}
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">
                        {item.productName?.original}
                      </h3>
                      <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                        {item.quantity && item.quantity > 1 && (
                          <div className="text-xs font-semibold text-zinc-700">
                            {item.quantity} X
                          </div>
                        )}
                        {item.price?.amount &&
                          Math.round(Number(item.price?.amount)).toLocaleString(
                            "sr-RS"
                          )}{" "}
                        RSD
                      </div>
                    </div>
                    {/* DESC */}
                    <div className="text-sm text-zinc-700">
                      {item.availability?.status === "AVAILABLE" ? (
                        <span className="text-green-700 font-medium">
                          Na stanju
                        </span>
                      ) : (
                        <span className="text-red-500 font-medium">
                          U korpi je maksimalan broj ovog proizvoda!
                        </span>
                      )}
                    </div>
                  </div>
                  {/* BOTTOM */}
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-700">
                      Količina: {item.quantity}
                    </span>
                    <span
                      className="text-blue-500"
                      style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                      onClick={() => removeItem(wixClient, item._id!)}
                    >
                      Ukloni
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* BOTTOM */}
          <div className="">
            <div className="flex items-center justify-start gap-2 mt-2">
              <span className="">Ukupan iznos za naplatu:</span>
              <span className="font-semibold text-zinc-800">
                {Math.round(
                  cart.lineItems.reduce(
                    (total: number, item: any) =>
                      total + (item.price?.amount || 0) * (item.quantity || 1),
                    0
                  )
                ).toLocaleString("sr-RS")}{" "}
                RSD
              </span>
            </div>
            <div className="flex justify-center text-sm">
              <button
                className="buttonStyle2 mt-6"
                disabled={isLoading}
                onClick={handleCheckout}
              >
                Dovrši kupovinu
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
