import Image from "next/image";

const Paying = () => {
  return (
    <div className="mt-8 w-full px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 space-y-12 bg-zinc-200 bg-opacity-5 text-zinc-700">
      <div className="mt-8 leading-snug">
        <h1 className="text-4xl font-semibold text-zinc-700 mb-2 mt-4">
          Načini plaćanja
        </h1>
        <hr className="w-1/4 h-1 bg-zinc-200" />
        <h1 className="text-3xl font-semibold text-zinc-600 mb-2 mt-4">
          Internet kupovina
        </h1>
        <ul className="list-decimal ml-10 ">
          <li className="text-xl font-semibold mt-4">Plaćanje pouzećem</li>
          <p className="ml-2 mb-2 text-justify">
            Robu plaćate prilikom isporuke. U zavisnosti od isporučioca,
            platićete kuriru ili našem vozaču. Plaćanje je moguće samo
            gotovinom. Plaćanje nije moguće u stranoj valuti.
          </p>
          <li className="text-xl font-semibold mt-4">Plaćanje preko računa</li>
          <p className="ml-2 mb-2 text-justify">
            Robu plaćate direktnom uplatom na naš račun. Po primanju
            narudžbenice, na Vašu e-mail adresu stići će predračun sa
            informacijama o načinu plaćanja. Plaćate standardnom uplatnicom u
            bilo kojoj banci ili pošti u Srbiji ili putem Interneta u slučaju
            kada koristite E-banking aplikaciju, tj. kada imate Internet pristup
            svom tekućem računu. Robu šaljemo posle potvrde o Vašoj uplati.
          </p>
          <li className="text-xl font-semibold mt-4">
            Plaćanje putem „IPS skeniraj“ opcije za instant plaćanje pomoću
            pametnog telefona
          </li>
          <p className="ml-2 mb-2 text-justify">
            Svoju online porudžbinu možete platiti instant plaćanjem, metodom
            IPS skeniraj. Kada izaberete IPS skeniraj bićete preusmereni na
            stranicu na kojoj će Vam biti prikazan jednokratan IPS QR kod.
            Aplikacijom mobilnog bankarstva koju imate instaliranu na svom
            mobilnom uređaju skeniraćete/preuzećete podatke iz generisanog IPS
            QR koda i plaćanje obavljate jednostavno, u sigurnom okruženju Vaše
            banke. Informacija o ishodu plaćanja biće Vam prikazana odmah po
            završetku obrade na našem sajtu ali će Vam biti dostavljena i putem
            imejla.
          </p>
          <p className="ml-2 mb-2 text-justify">
            Ako internet prodavnicu posećujete preko mobilnog telefona, plaćanje
            putem IPS skeniraj možete izvršiti i tako što ćete nakon odabira IPS
            skeniraj, izabrati banku čijom aplikacijom želite da izvršite
            plaćanje i kliknuti na dugme za plaćanje. Na taj način ćete otvoriti
            aplikaciju mobilnog bankarstva banke koju ste izabrali i u njoj
            potvrditi izvršavanje plaćanja, kao što biste to uradili i po
            skeniranju IPS QR koda.
          </p>
          <li className="text-xl font-semibold mt-4">
            Plaćanje platnim karticama prilikom online kupovine
          </li>
          <p className="ml-2 mb-2 text-justify">
            Svoju online porudžbinu možete platiti koristeći DINA CARD, VISA,
            MASTER CARD, MAESTRO i AMEX platnu karticu
          </p>
          <li className="text-xl font-semibold mt-4">Web kredit</li>
          <p className="ml-2 mb-2 text-justify">
            Ako se odlučite za Web kredit, imate mogućnost da svoju porudžbinu
            platite na rate, online, bez papira i bez odlaska u banku. Lako i
            brzo do Web kredita u samo nekoliko klikova. Odaberite broj rata,
            rasteretite svoje mesečne obaveze i olakšajte kupovinu. Sve što vam
            je potrebno su: dobra internet konekcija, važeća lična karta ili
            pasoš, broj telefona u domaćoj mreži, uređaj sa kamerom za kratak
            video razgovor sa agentom banke. Za kredite preko 80.000 dinara
            potreban je i mesečni izvod iz banke.
          </p>
        </ul>
        <Image
          className="mx-auto mt-4"
          src="/kredit01.jpg"
          alt="Kredit01"
          width={1024}
          height={256}
        />
      </div>

      <div className="mt-8 leading-snug">
        <h1 className="text-3xl font-semibold text-zinc-600 mb-2 mt-4">
          Kupovina u radnji
        </h1>
        <ul className="list-decimal ml-10">
          <li className="text-xl font-semibold mt-4">Gotovinsko plaćanje</li>
          <p className="ml-2 mb-2 text-justify">Plaćanje gotovim novcem</p>
          <li className="text-xl font-semibold mt-4">
            Debitne i kreditne platne kartice banaka
          </li>
          <p className="ml-2 text-justify">
            Plaćanje debitnim i kreditnim karticama svih banaka
          </p>
          <p className="ml-2  text-justify">
            Plaćanje Banka Intesa kreditnim karticama do 12 rata bez kamate
          </p>
          <p className="ml-2  text-justify">
            Plaćanje debitnim i kreditnim karticama svih banaka
          </p>
          <p className="ml-2  text-justify">
            Plaćenje putem DINA POST CARD debitnom karticom na rate (od 1 - 6
            mesečnih rata)
          </p>
          <li className="text-xl font-semibold mt-4">Krediti banaka</li>
          <p className="ml-2 mb-2 text-justify">
            Plaćajte kreditima OTP banke sa 0% kamate.
          </p>
          <Image
            className="mx-auto mt-4"
            src="/kredit02.jpg"
            alt="Kredit02"
            width={1024}
            height={256}
          />
          <p className="ml-2 mb-2 text-justify mt-4">
            Kupujte bez kamate u radnji IT Hub centra uz podrsku Raiffeisen
            banke!
          </p>
          <Image
            className="mx-auto mt-4"
            src="/kredit03.png"
            alt="Kredit03"
            width={1024}
            height={256}
          />
          <p className="ml-2 mb-2 text-justify mt-4">
            Kupujte bez kamate u IT Hub radnji uz podrsku Addiko banke!
          </p>
          <Image
            className="mx-auto mt-4"
            src="/kredit04.png"
            alt="Kredit04"
            width={1024}
            height={256}
          />
          <li className="text-xl font-semibold mt-8">
            Plaćanje preko računa - virmansko plaćanje
          </li>
          <p className="ml-2 mb-2 text-justify">
            Vrši se na osnovu izdate profakture direktnom uplatom na račun
            IT Hub centra. Direktna uplata se vrši uplatnicom u banci ili
            pošti ili internet plaćanjem, u slučaju kada kupac koristi E-banking
            aplikaciju, tj. kada ima internet pristup svom tekućem računu. Nakon
            dostavljenog dokaza o uplati izdaje se račun i roba
          </p>
          <li className="text-xl font-semibold mt-4">Čekovi građana</li>
          <p className="ml-2 mb-2 text-justify">
            Odloženo plaćanje čekovima građana do 12 mesečnih rata bez kamate, s
            tim da prva rata kreće odmah
          </p>
        </ul>
        <p className="ml-2 mb-2 text-lama font-semibold text-center mt-8">
          Sve dodatne informacije možete dobiti u našim prodavnicama
        </p>
      </div>
    </div>
  );
};

export default Paying;
