import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";

const CategoryList = async () => {
  const wixClient = await wixClientServer();
  const cats = await wixClient.collections.queryCollections().find();

  // Filtriranje neželjenih kategorija
  const filteredCats = cats.items.filter(
    (item: any) =>
      item.name !== "All Products" &&
      item.name !== "Istaknuto" &&
      item.name !== "Novo" &&
      item.name !== "Najprodavaniji" &&
      item.slug !== "all-products" &&
      item.slug !== "istaknuto" &&
      item.slug !== "novo" &&
      item.slug !== "najprodavaniji"
  );

  return (
    <div className="px-4 overflow-x-auto scrollbar-hide scrollable-container">
      <div className="block md:flex gap-4 md:gap-8">
        {filteredCats.map((item: any) => (
          <Link
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 transition-all ease-in-out hover:shadow-lg hover:scale-105"
            href={`/list?cat=${item.slug}`}
            key={item._id}
          >
            <div className="relative bg-zinc-100 bg-opacity-30 w-full h-96">
              <Image
                className="object-cover"
                src={item.media?.mainMedia?.image?.url || "/cat.png"}
                alt=""
                fill
                sizes="20vw"
              />
            </div>
            <h1 className="mt-8 text-center text-xs uppercase font-medium text-zinc-700 tracking-wide mb-4 border-t-2 bg-zinc-100 bg-opacity-15 border-b-2 border-zinc-100 rounded-md">
              {item.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
