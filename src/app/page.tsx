import CategoryList from "@/components/CategoryList";
import Loader from "@/components/Loader";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { Suspense } from "react";

export const dynamic = "force-dynamic";


const HomePage = async () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-32 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-lg uppercase text-zinc-700 text-center font-medium mb-8 bg-zinc-100 bg-opacity-15 border-b-2 ring-1 ring-zinc-100 border-zinc-100 rounded-md border-t-2">
          Posebno izdvajamo
        </h1>
        <Suspense fallback={<Loader />}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-32">
        <h1 className="text-lg uppercase text-zinc-700 text-center font-medium mb-8 bg-zinc-100 bg-opacity-15 border-b-2 ring-1 ring-zinc-100 border-zinc-100 rounded-md border-t-2">
          Kategorije
        </h1>
        <Suspense fallback={<Loader />}>
          <CategoryList />
        </Suspense>
      </div>
      <div className="mt-32 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-lg uppercase text-zinc-700 text-center font-medium mb-8 bg-zinc-100 bg-opacity-15 border-b-2 ring-1 ring-zinc-100 border-zinc-100 rounded-md border-t-2">
          Novi proizvodi
        </h1>
        <ProductList
          categoryId={process.env.NEW_PRODUCTS_CATEGORY_ID!}
          limit={4}
        />
      </div>
      <div className="mt-32 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-lg uppercase text-zinc-700 text-center font-medium mb-8 bg-zinc-100 bg-opacity-15 border-b-2 ring-1 ring-zinc-100 border-zinc-100 rounded-md border-t-2">
          Najprodavaniji
        </h1>
        <ProductList
          categoryId={process.env.POPULAR_PRODUCTS_CATEGORY_ID!}
          limit={4}
        />
      </div>
    </div>
  );
};

export default HomePage;
