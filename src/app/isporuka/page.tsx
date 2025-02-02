import { FaBoxOpen } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { LuTimerReset } from "react-icons/lu";
import { GiStorkDelivery } from "react-icons/gi";

const Shipping = () => {
  const shipping = [
    {
      id: 1,
      icon: (
        <FaBoxOpen className="rounded-full bg-white text-zinc-700 text-6xl p-2 hover:text-lama hover:transition duration-200" />
      ),
      title: "Pregled uređaja",
      desc: "Molimo Vas da prilikom isporuke, a pre nego što date elektronski potpis, pregledate uređaj",
    },
    {
      id: 2,
      icon: (
        <FaTruckFast className="rounded-full bg-white text-zinc-700 text-6xl p-2 hover:text-lama hover:transition duration-200" />
      ),
      title: "Isporuka proizvoda",
      desc: (
        <ul>
          <li className="mt-1">Isporuku robe vršimo kurirskom službom.</li>
          <li className="mt-1">
            Za sve porudžbine čija je vrednost 5.000 dinara i veća, isporuka
            robe putem kurirske službe je besplatna.
          </li>
        </ul>
      ),
    },
    {
      id: 3,
      icon: (
        <LuTimerReset className="rounded-full bg-white text-zinc-700 text-6xl p-2 hover:text-lama hover:transition duration-200" />
      ),
      title: "Vreme isporuke",
      desc: (
        <ul>
          <li className="mt-1">Robu isporučujemo radnim danima do 16h.</li>
        </ul>
      ),
    },
    {
      id: 4,
      icon: (
        <GiStorkDelivery className="rounded-full bg-white text-zinc-700 text-6xl p-2 hover:text-lama hover:transition duration-200" />
      ),
      title: "Dostava robe",
      desc: (
        <ul>
          <li className="mt-1">
            Kurirska služba isporučuje robu na adresu kupca, dok uređaje bele
            tehnike i televizore unosi i u stambeni prostor.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="mt-8 w-full px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 space-y-12 bg-zinc-200 bg-opacity-5 text-zinc-700">
      <div className="mt-8 leading-snug">
        <h1 className="text-4xl font-semibold text-zinc-700 mb-2 mt-4">
          Isporuka proizvoda
        </h1>
        <hr className="w-1/4 h-1 bg-zinc-200" />
        <p className="text-justify mt-4">
          Proizvodi kupljeni kod nas na Vašu adresu stižu brzo i sigurno. IT Hub
          garantuje isporuku za svaki proizvod za koji je prethodno potvrđen
          datum isporuke. Naša posvećena ekipa logistike radi naporno kako bi
          obezbedila da svaka pošiljka bude sigurna i da stigne u željenom roku.
          Unapredili smo naše procese isporuke kako bismo Vam pružili najbolje
          iskustvo. Efikasno pratimo put svakog proizvoda od našeg magacina do
          Vaših vrata. Sve pojedinosti o načinima isporuke pročitajte u nastavku
        </p>
      </div>

      <div className="block md:flex flex-row gap-2 mt-6">
        {shipping.map((ship) => (
          <div
            key={ship.id}
            className="flex flex-col w-full h-[256px] bg-zinc-200 bg-opacity-30 rounded-lg outline-none border-none justify-start items-center p-4 cursor-pointer group transition-all duration-300 ease-in-out hover:bg-zinc-500 hover:bg-opacity-15 hover:shadow-lg hover:scale-105"
          >
            <div className="mb-4">{ship.icon}</div>
            <div className="text-lama text-center text-lg font-bold uppercase border-b-2 border-lama">
              {ship.title}
            </div>
            <div className="px-2 py-2 leading-tight text-zinc-700 text-center text-sm">
              {ship.desc}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h1 className="text-2xl font-semibold text-zinc-700 mb-2 mt-4">
          Kada se pristupa usluzi dostave?
        </h1>
        <hr className="w-1/4 h-1 bg-zinc-200" />
        <ul className="list-disc ml-10 mt-4">
          <li className="">
            Unos uređaja u kuću ili stan u prvu prostoriju (ukoliko uređaj nije
            vangabaritni).
          </li>
          <li className="">Raspakivanje i provera fizičkog stanja uređaja.</li>
          <li className="">
            Unos uređaja u kuću ili stan moguće je izvršiti ukoliko postoje
            minimalni uslovi da se uređaji bezbedno unesu (dovoljna širina
            hodnika, stepeništa, ulaznih vrata i ostalih prolaza na putanji.
            Potrebno je da je stepenište obezbeđeno ogradom, a prilaz do objekta
            gde se isporučuje roba nesmetan).
          </li>
          <li className="">
            Vangabaritne uređaje isporučujemo samo do ulaza u zgradu ili
            dvorište.
          </li>
          <li className="">
            Ova usluga ne podrazumeva montažu uređaja na električne i vodovodne
            instalacije, kao ni samu deblokadu uređaja.
          </li>
          <li className="">
            U ovu uslugu ne spada iznošenje starih uređaja, kao i ambalaže sa
            raspakovanih uređaja iz stana, kuće ili dvorišta.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Shipping;
