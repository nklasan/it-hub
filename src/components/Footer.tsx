import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-auto py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gradient-to-br from-zinc-900 via-zinc-700 to-stone-500 text-zinc-200 text-sm mt-4">
      {/* gornji deo */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* leva strana */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <Image
              src="/all_cat.png"
              alt="IT Hub logo"
              width={100}
              height={100}
              className="filter brightness-0 invert"
            />
          </Link>
          <p>Pouzdanost i kvalitet</p>
          <span className="flex flex-row items-center gap-1 font-semibold text-sm">
            <FaEnvelope />
            prodaja@ithub.rs
          </span>
          <span className="flex flex-row items-center gap-1 font-semibold text-sm">
            <FaPhone />
            032/422-319
          </span>
          <div className="flex gap-6">
            <Link
              href="/"
              className="hover:text-lama hover:transition-transform duration-200"
            >
              <FaFacebookF size={22} />
            </Link>
            <Link
              href="/"
              className="hover:text-lama hover:transition-transform duration-200"
            >
              <FaInstagram size={22} />
            </Link>
            <Link
              href="/"
              className="hover:text-lama hover:transition-transform duration-200"
            >
              <FaYoutube size={22} />
            </Link>
            <Link
              href="/"
              className="hover:text-lama hover:transition-transform duration-200"
            >
              <FaTiktok size={22} />
            </Link>
          </div>
        </div>
        {/* sredina */}
        <div className="w-1/2 hidden lg:flex justify-between">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg hover:border-b-2 border-lama hover:text-lama cursor-pointer m-auto">
              Kompanija
            </h1>
            <div className="flex flex-col gap-6 ">
              <Link
                href="/onama"
                className="hover:border-b-2 hover:border-lama hover:text-lama cursor-pointer m-auto hover:translate-transition duration-200"
              >
                O nama
              </Link>
              <Link
                href="/zaposlenje"
                className="hover:border-b-2 hover:border-lama hover:text-lama cursor-pointer m-auto hover:translate-transition duration-200"
              >
                Konkurs
              </Link>
              <Link
                href="/"
                className="hover:border-b-2 hover:border-lama hover:text-lama cursor-pointer m-auto hover:translate-transition duration-200"
              >
                Filijale
              </Link>
              <Link
                href="/"
                className="hover:border-b-2 hover:border-lama hover:text-lama cursor-pointer m-auto hover:translate-transition duration-200"
              >
                Blog
              </Link>
              <Link
                href="/kontakt"
                className="hover:border-b-2 hover:border-lama hover:text-lama cursor-pointer m-auto hover:translate-transition duration-200"
              >
                Kontakt
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg hover:border-b-2 border-lama hover:text-lama cursor-pointer m-auto">
              Radnja
            </h1>
            <div className="flex flex-col gap-6">
              <Link
                href="/"
                className="hover:border-b-2 hover:border-lama hover:text-lama cursor-pointer m-auto hover:translate-transition duration-200"
              >
                Noviteti
              </Link>
              <Link
                href="/"
                className="hover:border-b-2 hover:border-lama hover:text-lama cursor-pointer m-auto hover:translate-transition duration-200"
              >
                Dodaci
              </Link>
              <Link
                href="/list?cat=racunari"
                className="hover:border-b-2 hover:border-lama hover:text-lama cursor-pointer m-auto hover:translate-transition duration-200"
              >
                Računari
              </Link>
              <Link
                href="/list?cat=laptopovi"
                className="hover:border-b-2 hover:border-lama hover:text-lama cursor-pointer m-auto hover:translate-transition duration-200"
              >
                Laptopovi
              </Link>
              <Link
                href="/list?cat=mobilni-telefoni"
                className="hover:border-b-2 hover:border-lama hover:text-lama cursor-pointer m-auto hover:translate-transition duration-200"
              >
                Mobilni
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg hover:border-b-2 border-lama hover:text-lama m-auto cursor-pointer">
              Pomoć
            </h1>
            <div className="flex flex-col gap-6">
              <Link
                href="/"
                className="hover:border-b-2 hover:border-lama hover:text-lama cursor-pointer m-auto hover:translate-transition duration-200"
              >
                Korisnička podrška
              </Link>
              <Link
                href="/login"
                className="hover:border-b-2 hover:border-lama hover:text-lama cursor-pointer m-auto hover:translate-transition duration-200"
              >
                Profil
              </Link>
              <Link
                href="/"
                className="hover:border-b-2 hover:border-lama hover:text-lama cursor-pointer m-auto hover:translate-transition duration-200"
              >
                Pokloni
              </Link>
              <Link
                href="/"
                className="hover:border-b-2 hover:border-lama hover:text-lama cursor-pointer m-auto hover:translate-transition duration-200"
              >
                Promocije
              </Link>
              <Link
                href="/"
                className="hover:border-b-2 hover:border-lama hover:text-lama cursor-pointer m-auto hover:translate-transition duration-200"
              >
                Članstvo
              </Link>
            </div>
          </div>
        </div>
        {/* desna strana */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-semibold text-xl">Ne propustite!</h1>
          <p>
            Budite u toku sa novitetima, specijalnim ponudama i mnogim drugim
            iznenađenjima
          </p>
          <div className="flex h-10">
            <input
              type="text"
              placeholder="Unesite e-mail adresu"
              className="p-4 w-3/4 outline-none hover:ring-1 hover:ring-zinc-100 focus:placeholder-transparent text-zinc-800"
            />
            <button className="w-2/4 bg-lama text-zinc-100 hover:bg-pink-400 transition-all ease-in-out hover:bg-opacity-85 hover:shadow-lg hover:scale-105">
              Pridružite se
            </button>
          </div>

          <span className="font-semibold">Podržana plaćanja</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* donji deo */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 IT Hub</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-zinc-300 mr-4">Jezik</span>
            <span className="font-medium">Srpski</span>
          </div>
          <div className="">
            <span className="text-zinc-300 mr-4">Valuta</span>
            <span className="font-medium">srpski dinar (RSD)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
