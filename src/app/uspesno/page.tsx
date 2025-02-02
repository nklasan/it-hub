"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";
import Loader from "@/components/Loader";

const SuccessPage = ({}) => {
  const [orderId, setOrderId] = useState("");
  const [opacity, setOpacity] = useState(1);
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });
  const router = useRouter();

  useEffect(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const savedOrderId = localStorage.getItem("orderId");
    if (savedOrderId) {
      setOrderId(savedOrderId);
    }
    const timeout = setTimeout(() => {
      setOpacity(0);
      setTimeout(() => {
        router.push("/");
      }, 1000); 
    }, 4000);

    return () => {
      clearTimeout(timeout);
      localStorage.removeItem("orderId");
    };
  }, [router]);

  return (
    <div className="flex flex-col gap-6 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 items-center justify-center h-[calc(100vh-180px)] transition-opacity duration-1000">
      <Confetti
        width={windowDimensions.width}
        height={windowDimensions.height}
        numberOfPieces={300}
      />
      <h1 className="text-2xl text-green-700 font-medium">
        Kupovina uspešno obavljena!
      </h1>
      {orderId && (
        <p className="py-4 text-xl text-gray-600">
          Vaš broj porudžbine je: <strong>{orderId}</strong>
        </p>
      )}
      <p className="py-4 text-lg text-gray-600">
        Detalji vezani uz porudžbinu biće Vam prosleđeni putem email-a.
        Uskoro ćete biti preusmereni na početnu stranicu.
      </p>
      <Loader />
    </div>
  );
};
export default SuccessPage;
