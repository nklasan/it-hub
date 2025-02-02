import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./Pagination";

const PRODUCT_PER_PAGE = 8;

function formatPriceRSD(price: number) {
  return new Intl.NumberFormat("sr-RS", {
    style: "currency",
    currency: "RSD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

function calculateDiscountPercentage(
  regularPrice: number,
  discountPrice: number
) {
  if (regularPrice <= 0 || discountPrice <= 0) {
    throw new Error("Cene moraju biti veće od nule.");
  }

  if (discountPrice > regularPrice) {
    throw new Error("Umanjena cena ne može biti veća od regularne cene.");
  }

  const discountPercentage =
    ((regularPrice - discountPrice) / regularPrice) * 100;
  return Math.round(discountPercentage * 100) / 100;
}

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  const wixClient = await wixClientServer();

  const productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .gt("priceData.price", Number(searchParams?.min) || 0)
    .lt("priceData.price", Number(searchParams?.max) || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page
        ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
        : 0
    );
  const res = await productQuery.find();

  const sortedProducts = res.items.sort(
    (a: products.Product, b: products.Product) => {
      const priceA = a.price?.price || 0;
      const priceB = b.price?.price || 0;
      const dateA = new Date(a._createdDate || 0);
      const dateB = new Date(b._createdDate || 0);

      if (searchParams?.sort === "rastuce-cene") {
        return priceA - priceB;
      } else if (searchParams?.sort === "opadajuce-cene") {
        return priceB - priceA;
      } else if (searchParams?.sort === "najstariji") {
        return dateA.getTime() - dateB.getTime();
      } else if (searchParams?.sort === "najnoviji") {
        return dateB.getTime() - dateA.getTime();
      }
      return 0;
    }
  );

  return (
    <div className="mt-12 flex gap-x-12 gap-y-16 justify-center flex-wrap">
      {res.items.map((product: products.Product) => {
        const regularPrice = product.price?.price || 0;
        const discountPrice = product.price?.discountedPrice || 0;
        const discountPercentage = calculateDiscountPercentage(
          regularPrice,
          discountPrice
        );

        return (
          <Link
            href={"/" + product.slug}
            className="w-full flex flex-col justify-end items-center px-4 py-4 gap-4 sm:w-[45%] lg:w-[22%] ring-1 ring-zinc-200 ring-opacity-50 rounded-md transition-all ease-in-out hover:shadow-lg hover:scale-105"
            key={product._id}
          >
            <div className="relative w-full h-80 bg-zinc-100 bg-opacity-30">
              <Image
                src={product.media?.mainMedia?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
              />
              {product.media?.items && (
                <Image
                  src={product.media?.items[1]?.image?.url || "/product.png"}
                  alt=""
                  fill
                  sizes="25vw"
                  className="absolute object-cover rounded-md"
                />
              )}
            </div>
            <div className="text-center p-1 text-xs uppercase leading-tight text-zinc-700 font-semibold mt-1 border-t-2 bg-zinc-100 bg-opacity-15 border-b-2 border-zinc-100 rounded-md">
              {product.name}
            </div>
            {regularPrice === discountPrice ? (
              <div className="flex flex-row items-start justify-between p-2 mt-2 gap-8">
                <div>
                  <span className="text-lama font-bold text-lg">
                    {formatPriceRSD(discountPrice)}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex flex-row items-start justify-between p-2 mt-2 gap-8">
                <div>
                  <div className="flex flex-row items-center text-zinc-600 font-medium gap-1">
                    <div className="line-through">
                      {formatPriceRSD(regularPrice)}
                    </div>
                    <span className="text-sm -mt-4 text-red-600 px-1 font-black mx-auto uppercase ring-1 ring-zinc-200 ring-opacity-50 rounded-md">
                      {discountPercentage}%
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-lama font-bold text-lg">
                    {formatPriceRSD(discountPrice)}
                  </span>
                </div>
              </div>
            )}

            {product.additionalInfoSections && (
              <div
                className="text-sm text-zinc-700"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    product.additionalInfoSections.find(
                      (section: any) => section.title === "shortDesc"
                    )?.description || ""
                  ),
                }}
              ></div>
            )}
            <button className="buttonStyle text-xs justify-end">
              Detaljnije
            </button>
          </Link>
        );
      })}
      {searchParams?.cat || searchParams?.name ? (
        <Pagination
          currentPage={res.currentPage || 0}
          hasPrev={res.hasPrev()}
          hasNext={res.hasNext()}
        />
      ) : null}
    </div>
  );
};

export default ProductList;
