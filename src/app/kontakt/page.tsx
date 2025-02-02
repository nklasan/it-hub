import { BsEnvelopeAtFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 space-y-8 bg-zinc-200 bg-opacity-5 mt-8">
      <form className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-zinc-700">
          Pišite nam
          <hr className="w-1/4 h-1 bg-zinc-200" />
        </h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-zinc-700 mb-2">
            Ime i prezime:
            <span className="text-lama ml-1">*</span>
          </label>
          <input
            type="text"
            id="ime"
            name="ime"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-300 placeholder:text-sm"
            placeholder="Unesite vaše ime i prezime"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-zinc-700 mb-2">
            Email:
            <span className="text-lama ml-1">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-300 placeholder:text-sm"
            required
            placeholder="Unesite vaš email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="poruka" className="block text-zinc-700 mb-2">
            Poruka:
            <span className="text-lama ml-1">*</span>
          </label>
          <textarea
            id="poruka"
            name="poruka"
            rows={5}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-300 placeholder:text-sm"
            required
            placeholder="Unesite vašu poruku"
          ></textarea>
        </div>

        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="flex flex-row items-center gap-2 bg-lama px-6 py-2 hover:bg-pink-400 hover:transition-transform duration-300 text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed"
          >
            <BsEnvelopeAtFill />
            Pošalji poruku
          </button>
          <p className="text-sm text-zinc-700">
            Polja obeležena sa <span className="text-lama">(*)</span> su obavezna!
          </p>
        </div>
      </form>
    </div>
  );
};

export default Contact;
