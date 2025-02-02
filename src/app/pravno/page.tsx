import Image from "next/image";
import {
  FaUserTie,
  FaTruckMoving,
  FaHandsHelping,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BiSolidWallet } from "react-icons/bi";

const cards = [
  {
    id: 1,
    icon: (
      <FaUserTie className="rounded-full bg-white text-zinc-700 text-6xl p-2" />
    ),
    name: "Lični komercijalista",
    desc: "Zahvaljujući ličnom komercijalisti na terenu, najnovije informacije i akcije su Vam odmah dostupne.",
  },
  {
    id: 2,
    icon: (
      <BiSolidWallet className="rounded-full  bg-white text-zinc-700 text-6xl p-2" />
    ),
    name: "Ušteda",
    desc: "Imajući u vidu potrebe Vašeg biznisa, biramo proizvode i kreiramo akcije uz koje provereno štedite.",
  },
  {
    id: 3,
    icon: (
      <FaTruckMoving className="rounded-full bg-white text-zinc-700 text-6xl p-2" />
    ),
    name: "Isporuka",
    desc: "Na Vama je samo da izaberete proizvode koji Vam odgovaraju a mi ćemo ih isporučiti. Besplatno.",
  },
  {
    id: 4,
    icon: (
      <AiFillSafetyCertificate className="rounded-full bg-white text-zinc-700 text-6xl p-2" />
    ),
    name: "Sigurnost",
    desc: "Opremite poslovni prostor uređajima koji će ispratiti Vaš biznis ili ih možete vratiti u roku od 14 dana.",
  },
  {
    id: 5,
    icon: (
      <FaHandsHelping className="rounded-full bg-white text-zinc-700 text-6xl p-2" />
    ),
    name: "Poverenje",
    desc: "Uspeh u poslu se postiže zajedničkim trudom i isključivo na obostrano zadovoljstvo.",
  },
];

const Legal = () => {
  return (
    <div className="mt-8 w-full px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-zinc-200 bg-opacity-5">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-semibold text-zinc-700 mb-2">
          Pravna lica
        </h1>
        <hr className="w-1/4 h-1 bg-zinc-200 mx-auto" />
        <Image
          className="object-contain mt-4"
          src="/pravna.jpg"
          alt="Pravna lica"
          width={2048}
          height={1024}
        />
      </div>

      <div className="block md:flex flex-row gap-2 mt-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col w-full h-[256px] bg-zinc-200 bg-opacity-30 rounded-md outline-none border-none text-center items-center justify-center cursor-pointer group transition-all duration-300 ease-in-out hover:bg-zinc-500 hover:bg-opacity-15 hover:shadow-lg hover:scale-105"
          >
            <div className="mb-4">{card.icon}</div>
            <div className="text-lama text-lg font-bold uppercase border-b-2 border-lama">
              {card.name}
            </div>
            <div className="px-2 py-2 leading-tight text-sm">{card.desc}</div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="hidden md:block">
          <h1 className="text-3xl font-semibold mb-2">
            Kontaktirajte nas za više informacija
          </h1>
          <hr className="w-1/4 h-1 bg-zinc-200 mx-auto" />
        </div>

        <div className="flex flex-row items-center justify-center gap-2 mt-4">
          <FaPhone className="text-lama" />
          <span className="font-semibold">032/422-300</span>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 mt-2">
          <FaEnvelope className="text-lama" />
          <span className="font-semibold">pravnalica@ithub.rs</span>
        </div>
      </div>
    </div>
  );
};

export default Legal;
