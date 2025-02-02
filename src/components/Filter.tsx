"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    if (value === "") {
      params.delete(name);
    } else {
      params.set(name, value);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-12 mb-4 flex flex-col justify-between items-center">
      <div className="flex gap-6 flex-wrap">
        <input
          type="number"
          name="min"
          placeholder="najniža cena"
          className="text-xs rounded-lg pl-2 w-24 ring-1 ring-zinc-200"
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="max"
          placeholder="najviša cena"
          className="text-xs rounded-lg pl-2 w-24 ring-1 ring-zinc-200"
          onChange={handleFilterChange}
        />
        <div className="py-2 px-4 rounded-lg text-xs font-medium bg-white ring-1 ring-zinc-200">
          <label className="mr-2 text-zinc-700">
            Kategorija:
          </label>

          <select
            name="cat"
            className="border-none outline-none focus:ring-0 focus:border-transparent"
            value={searchParams.get("cat") || ""}
            onChange={handleFilterChange}
          >
            <option value="all-products">Sve kategorije</option>
            <option value="racunari">Desktop računari</option>
            <option value="laptopovi">Laptopovi</option>
            <option value="monitori">Monitori</option>
            <option value="mobilni-telefoni">Mobilni telefoni</option>
            <option value="tableti">Tableti</option>
            <option value="gaming-i-oprema">Gaming i oprema</option>
            <option value="televizori">Televizori</option>
            <option value="pametni-satovi">Pametni satovi</option>
          </select>
        </div>

        <div className="py-2 px-4 rounded-lg text-xs font-medium bg-white ring-1 ring-zinc-200">
          <label className="mr-2 text-zinc-700">
            Sortiraj prema
          </label>
          <select className="border-none outline-none focus:ring-0 focus:border-transparent"  name="sort" id="" onChange={handleFilterChange}>
            <option value="">Podrazumevano</option>
            <option value="rastuce-cene">Cena (najniža ka najvećoj)</option>
            <option value="opadajuce-cene">Cena (najviša ka najnižoj)</option>
            <option value="najnoviji">Najnoviji prvo</option>
            <option value="najstariji">Najstariji prvo</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
