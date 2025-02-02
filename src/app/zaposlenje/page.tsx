import Image from "next/image";
import { RiUserVoiceFill } from "react-icons/ri";
import { FaRegHandshake, FaWarehouse, FaUserTie } from "react-icons/fa";
import { TbForklift } from "react-icons/tb";

const jobs = [
  {
    id: 1,
    icon: (
      <RiUserVoiceFill className="rounded-full bg-white text-zinc-700 text-6xl p-2" />
    ),
    position: "Prodavac u objektu",
    desc: (
      <ul className="list-disc">
        <li className="mb-1">Pomaganje kupcima pri odabiru proizvoda.</li>
        <li className="mb-1">Rad na kasi, administrativni zadaci.</li>
        <li className="mb-1">
          Briga o prijemu, skladištenju, održavanju, razvrstavanju i izlaganju
          proizvoda.
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    icon: (
      <FaRegHandshake className="rounded-full bg-white text-zinc-700 text-6xl p-2" />
    ),
    position: "Asistent nabavke",
    desc: (
      <ul className="list-disc">
        <li className="mb-1">
          Ulistavanje novih proizvoda i praćenje tempa kojim se isti publikuju
          na web sajtu
        </li>
        <li className="mb-1">Nivelacije cena i podešavanje akcijskih cena</li>
        <li className="mb-1">
          Provera web cena - sugstije category menadžerima
        </li>
      </ul>
    ),
  },
  {
    id: 3,
    icon: (
      <FaWarehouse className="rounded-full bg-white text-zinc-700 text-6xl p-2" />
    ),
    position: "Magacioner",
    desc: (
      <ul className="list-disc">
        <li className="mb-1">
          Prijem robe u magacin, kontrolisanje kvaliteta i kvantiteta primljene
          robe
        </li>
        <li className="mb-1">
          Vođenje evidencije o prijemu robe, briga o postojećoj robi,
        </li>
        <li className="mb-1">Vršenje popisa robe</li>
      </ul>
    ),
  },
  {
    id: 4,
    icon: (
      <TbForklift className="rounded-full bg-white text-zinc-700 text-6xl p-2" />
    ),
    position: "Viljuškarista",
    desc: (
      <ul className="list-disc">
        <li className="mb-1">Upravljanje viljuškarom radi manipulacije robe</li>
        <li className="mb-1">Kontrola primljene/otpremljene robe</li>
        <li className="mb-1">Fizički prijem, istovar, utovar robe, robe</li>
      </ul>
    ),
  },
  {
    id: 5,
    icon: (
      <FaUserTie className="rounded-full bg-white text-zinc-700 text-6xl p-2" />
    ),
    position: "Terenski komercijalista",
    desc: (
      <ul className="list-disc">
        <li className="mb-1">
          Terenska poseta postojećih i akvizicija novih kupaca pravnih lica
        </li>
        <li className="mb-1">
          Kreiranje porudžbina i izrada predloga i ponuda za kupce
        </li>
        <li className="mb-1">
          Administrativni poslovi vezani za kreiranje ponuda i porudžbina
        </li>
      </ul>
    ),
  },
];

const Zaposlenje = () => {
  return (
    <div className="mt-8 w-full px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 space-y-12 bg-zinc-200 bg-opacity-5">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-zinc-700 mb-2 mt-4">
          Postanite deo naše porodice
        </h1>
        <hr className="w-1/4 h-1 bg-zinc-200 mx-auto" />
        <Image
          className="object-contain mt-4"
          src="/job.png"
          alt="Apliciranje za posao"
          width={2048}
          height={1024}
        />
        <p className="text-justify mt-8">
          Ukoliko tražite ili jednostavno želite da promenite posao, a pritom
          ste oduvek želeli da radite sa tehnikom - na pravom ste mestu. Upravo
          smo raspisali konkurse za slobodne pozicije, i to:
        </p>
      </div>

      <div className="text-center mt-4">
        <h1 className="text-2xl font-semibold text-zinc-700 mb-2 mt-4">
          Dostupne pozicije:
        </h1>
        <hr className="w-1/4 h-1 bg-zinc-200 mx-auto" />
      </div>

      <div className="block md:flex flex-row row-span-2 gap-2 mt-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex flex-col w-full h-[300px] bg-zinc-200 bg-opacity-30 rounded-lg outline-none border-none justify-start items-center p-4 cursor-pointer group transition-all duration-300 ease-in-out hover:bg-zinc-500 hover:bg-opacity-15 hover:shadow-lg hover:scale-105"
          >
            <div className="mb-4">{job.icon}</div>
            <div className="text-lama text-lg font-bold uppercase border-b-2 border-lama">
              {job.position}
            </div>
            <div className="px-2 py-2 leading-tight text-zinc-700 text-left text-sm ml-3">
              {job.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Zaposlenje;
