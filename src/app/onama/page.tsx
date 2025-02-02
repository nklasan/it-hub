import { PiTargetBold } from "react-icons/pi";
import { FaRegEye, FaFeather, FaApple } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { IoDiamond, IoChatbubblesOutline } from "react-icons/io5";
import {
  SiSamsung,
  SiBosch,
  SiSony,
  SiXiaomi,
  SiHonor,
  SiDell,
  SiAcer,
  SiAsus,
  SiMsibusiness,
} from "react-icons/si";

const cards = [
  {
    id: 1,
    icon: (
      <PiTargetBold className="rounded-full bg-white text-zinc-700 text-6xl p-2 hover:text-lama hover:transition duration-200" />
    ),
    title: "Naša misija",
    desc: "Želimo da pružimo inovatina i kvalitetna rešenja koja unapređuju živote naših klijenata.",
  },
  {
    id: 2,
    icon: (
      <FaRegEye className="rounded-full bg-white text-zinc-700 text-6xl p-2 hover:text-lama hover:transition duration-200" />
    ),
    title: "Naša vizija",
    desc: "Težimo da postanemo lideri u industriji kroz konstantan razvoj i održivi rast.",
  },
  {
    id: 3,
    icon: (
      <FaFeather className="rounded-full bg-white text-zinc-700 text-6xl p-2 hover:text-lama hover:transition duration-200" />
    ),
    title: "Naša priča",
    desc: "Sve je počelo 2024. sa jasnom idejom - stvoriti vrhunski brend i uslugu.",
  },
  {
    id: 4,
    icon: (
      <MdComputer className="rounded-full bg-white text-zinc-700 text-6xl p-2 hover:text-lama hover:transition duration-200" />
    ),
    title: "Šta nudimo",
    desc: "Nudimo širok spektar proizvoda. Prilagođeni su potrebama modernog tržišta.",
  },
  {
    id: 5,
    icon: (
      <IoDiamond className="rounded-full bg-white text-zinc-700 text-6xl p-2 hover:text-lama hover:transition duration-200" />
    ),
    title: "Naše vrednosti",
    desc: "Težimo najvišem standardu. Gradimo dugoročne odnose sa klijentima. Konstantno smo u potrazi za novim idejama.",
  },
  {
    id: 6,
    icon: (
      <IoChatbubblesOutline className="rounded-full bg-white text-zinc-700 text-6xl p-2 hover:text-lama hover:transition duration-200" />
    ),
    title: "Konktaktirajte nas",
    desc: "prodaja@ithub.rs",
  },
];

const partners = [
  {
    id: 1,
    logo: (
      <FaApple className="text-zinc-700 text-7xl hover:text-lama hover:transition duration-200" />
    ),
  },
  {
    id: 2,
    logo: (
      <SiSamsung className="text-zinc-700 text-7xl hover:text-lama hover:transition duration-200" />
    ),
  },
  {
    id: 3,
    logo: (
      <SiBosch className="text-zinc-700 text-7xl hover:text-lama hover:transition duration-200" />
    ),
  },
  {
    id: 4,
    logo: (
      <SiSony className="text-zinc-700 text-7xl hover:text-lama hover:transition duration-200" />
    ),
  },
  {
    id: 5,
    logo: (
      <SiXiaomi className="text-zinc-700 text-7xl hover:text-lama hover:transition duration-200" />
    ),
  },
  {
    id: 6,
    logo: (
      <SiHonor className="text-zinc-700 text-7xl hover:text-lama hover:transition duration-200" />
    ),
  },
  {
    id: 7,
    logo: (
      <SiDell className="text-zinc-700 text-7xl hover:text-lama hover:transition duration-200" />
    ),
  },
  {
    id: 8,
    logo: (
      <SiAcer className="text-zinc-700 text-7xl hover:text-lama hover:transition duration-200" />
    ),
  },
  {
    id: 9,
    logo: (
      <SiAsus className="text-zinc-700 text-7xl hover:text-lama hover:transition duration-200" />
    ),
  },
  {
    id: 10,
    logo: (
      <SiMsibusiness className="text-zinc-700 text-7xl hover:text-lama hover:transition duration-200" />
    ),
  },
];

const About = () => {
  return (
    <div className="mt-8 w-full px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 space-y-8 bg-zinc-200 bg-opacity-5">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-semibold text-zinc-700 mb-2 mt-4">O nama</h1>
        <hr className="w-1/4 h-1 bg-zinc-200 mx-auto" />
      </div>
      <div className="text-justify text-zinc-700">
        <p className="sm:text-[12px] md:text-[16px] leading-snug mt-8">
          IT Hub osnovan je 2024. godine, kao mala prodavnica audio i video
          opreme, Nastojimo da pružimo što kvalitetniju uslugu u oblasti
          trgovine audio i video uređajima, IT opremom kao i malim kućnim
          aparatima. Poslovanje firme se odvija na teritoriji grada Čačka, sa
          planom za postepenim širenjem. Akcenat poslovanja stavljen je na
          učvršćivanje pozicije širom Srbije. Stategija širenja obuhvata četiri
          grada i to: Beograd, Novi Sad, Kragujevac kao i Niš.
        </p>
        <p className="sm:text-[12px] md:text-[16px] leading-snug mt-4 font-medium">
          Ono što našu firmu razlikuje od drugih su izuzetno ljubazni i
          edukovani prodavci, kao i velika posvećenost postprodajnim
          aktivnostima prema kupcu. Taj pristup i način rada nas odvajaju u
          kvalitativnom smislu od konkurencije, što je ujedno i naša najveća
          komparativna prednost. Pored ovih aktivnosti i načina rada, nastojimo
          da ispunimo 3 najbitnije stavke:
        </p>
        <ul className="flex flex-col p-4 ml-4 list-disc text-justify">
          <li>Širok asortiman i izbor robe prilagođen zahtevu potrošača</li>
          <li>Najbolja cena i veliki izbor načina odloženog plaćanja</li>
          <li>Specijalizovan i dobro obučen prodavac</li>
        </ul>
        <p className="sm:text-[12px] md:text-[16px] leading-snug mt-4 font-medium">
          U cilju zauzimanja liderske pozicije na teritorijama na kojima
          poslujemo, naša kompanija je visoko orijentisana na kreiranja dodatnih
          kolektivnih vrednosti, poput:
        </p>
        <ul className="flex flex-col p-4 ml-4 list-disc text-justify">
          <li>
            kontinuirane obuke zaposlenih kroz razna predavanja, edukacije i
            seminare,
          </li>
          <li>
            team building druženja na kojima se učvršćuju kolektivne veze,
          </li>
          <li>
            tradicionalna proslava Nove godine, sa posebnom organizacijom dodele
            paketića za najmlađe članove IT Hub porodice.
          </li>
        </ul>
      </div>

      <div className="block md:flex flex-row gap-2 mt-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col w-full h-[256px] bg-zinc-200 bg-opacity-30 rounded-lg outline-none border-none justify-start items-center p-4 cursor-pointer group transition-all duration-300 ease-in-out hover:bg-zinc-500 hover:bg-opacity-15 hover:shadow-lg hover:scale-105"
          >
            <div className="mb-4">{card.icon}</div>
            <div className="text-lama text-lg font-bold uppercase border-b-2 border-lama">
              {card.title}
            </div>
            <div className="px-2 py-2 leading-tight text-zinc-700 text-center text-sm">
              {card.desc}
            </div>
          </div>
        ))}
      </div>

      <div className="text-justify">
        <p className="mb-2 mt-1">
          Naša organizacija se ponosi saradnjom sa pouzdanim i renomiranim
          partnerima koji igraju ključnu ulogu u unapređenju naših usluga i
          dostizanju visokih standarda poslovanja. Zahvaljujući njihovoj
          podršci, uspevamo da pružimo inovativna rešenja koja zadovoljavaju
          potrebe savremenog tržišta.
        </p>
        <ul className="list-decimal mt-4 px-6 py-2">
          <li className="font-medium underline">Strateški partneri:</li>
          <p className="mb-2 mt-1">
            Naši strateški partneri pomažu u razvoju i implementaciji dugoročnih
            poslovnih strategija. Kroz zajednički rad, stičemo nove uvide i
            obezbeđujemo stabilan rast u industriji.
          </p>
          <li className="font-medium underline">Tehnološki partneri:</li>
          <p className="mb-2 mt-1">
            Saradnja sa tehnološkim liderima omogućava nam pristup
            najsavremenijim alatima, tehnologijama i platformama. Ova
            partnerstva nas čine konkurentnim na tržištu i osiguravaju visoku
            efikasnost i kvalitet proizvoda.
          </p>
          <li className="font-medium underline">Dobavljači:</li>
          <p className="mb-2 mt-1">
            Pouzdani dobavljači su ključni deo našeg poslovanja. Oni nam
            omogućavaju konstantnu dostupnost visokokvalitetnih resursa, što nam
            pomaže da ispunimo očekivanja naših klijenata.
          </p>
          <li className="font-medium underline">Lokalni partneri:</li>
          <p className="mb-2 mt-1">
            Verujemo u značaj saradnje sa lokalnim zajednicama i kompanijama.
            Ova partnerstva doprinose razvoju lokalne ekonomije i jačanju
            međusobnog poverenja.
          </p>
          <li className="font-medium underline">
            Edukativni i istraživački partneri:
          </li>
          <p className="mb-2 mt-1">
            Kroz saradnju sa obrazovnim institucijama i istraživačkim centrima,
            radimo na inovacijama i razvoju novih ideja koje oblikuju budućnost
            naše industrije. Svi naši partneri dele iste vrednosti kao i mi –
            posvećenost kvalitetu, inovacijama i odgovornosti prema klijentima i
            zajednici. Ponosni smo na uspeh koji zajedno ostvarujemo i radujemo
            se budućim izazovima i prilikama za dalji razvoj.
          </p>
        </ul>
      </div>

      <h1 className="text-4xl font-semibold text-zinc-700 text-center mb-2">Naši partneri:</h1>
      <hr className="w-1/4 h-1 bg-zinc-200 mx-auto" />
      <div className="block md:grid grid-cols-5 grid-rows-2 gap-4">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="flex flex-col w-full h-[100px] bg-zinc-300 bg-opacity-30 rounded-lg outline-none border-none justify-start items-center p-4 cursor-pointer group transition-all duration-300 ease-in-out hover:bg-zinc-500 hover:bg-opacity-15 hover:shadow-lg hover:scale-105"
          >
            <div className="mb-4">{partner.logo}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
