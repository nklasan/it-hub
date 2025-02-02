"use client";
import { useRouter } from "next/navigation";
import { RiSearch2Line } from "react-icons/ri";

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form
      className="h-12 flex justify-between gap-4 bg-zinc-400 ring-1 ring-zinc-200 ring-opacity-50  hover:ring-2 hover:ring-zinc-300  bg-opacity-5 rounded-lg p-1 bg-transparent transition-all duration-300 ease-in-out"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Pretražite proizvode..."
        className="flex-1 bg-transparent border-transparent text-sm px-2 py-4 transition-all outline-none duration-300 ease-in-out  focus:placeholder-transparent"
      />
      <button className="group cursor-pointer p-2 rounded-none transition-all duration-300 ease-in-out">
        <RiSearch2Line className="hover:text-zinc-600" size={18} />
      </button>
    </form>
  );
};

export default SearchBar;
