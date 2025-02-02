import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import { Suspense} from "react";
import Loader from "@/components/Loader";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  console.log("Search params:", searchParams); // Debug

  const wixClient = await wixClientServer();
  
  const cat = await wixClient.collections.getCollectionBySlug(
    
    searchParams.cat || "all-products"
  );
  console.log("Fetched category:", cat); // Debug

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      {/* kampanja */}
      <div className="hidden bg-pink-50 p-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-2xl uppercase font-bold leading-[48px] text-zinc-700">
            Ostvarite i do 50% popusta na odabrane proizvode!
          </h1>
          <button className="buttonStyle">
            Saznaj više
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      {/* filteri */}
      <Filter />
      {/* proizvodi */}
      <Suspense fallback={<Loader />}>
        <ProductList categoryId={cat.collection?._id || "00000000-000000-000000-000000000001"} searchParams={searchParams}/>
      </Suspense>
    </div>
  );
};

export default ListPage;
