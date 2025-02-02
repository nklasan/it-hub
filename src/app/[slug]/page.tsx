import Add from "@/components/Add";
import ProductImages from "@/components/ProductImages";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import { FaStore } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const formatPrice = (price: number): string =>
    new Intl.NumberFormat("sr-RS", {
      style: "currency",
      currency: "RSD",
    }).format(price);

  const monthlyPay = (price: number): number => {
    if (price <= 0) {
      throw new Error("Cena mora biti veća od nule.");
    }
    const pay = price / 24;
    return pay;
  };

  const wixClient = await wixClientServer();

  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 mt-10 mb-12">
      {/* slike */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>
      {/* tekst */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-3xl text-zinc-700 uppercase font-medium">{product.name}</h1>
        <div className="flex flex-col px-4 py-4 h-auto bg-zinc-100 bg-opacity-50 ring-1 ring-zinc-100 ring-opacity-50">
          <span className="text-zinc-600 text-lg">
            Cena za online poručivanje
          </span>
          <span className="text-2xl text-lama font-bold">
            {formatPrice(product.price?.discountedPrice!)}
          </span>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-start">
            <span className="text-zinc-700">Rata putem WEB kredita</span>
            <span className="font-medium text-zinc-800 text-lg">
              24 x {formatPrice(monthlyPay(product.price?.discountedPrice!))}
            </span>
          </div>
          {
            product.stock?.inventoryStatus! === 'IN_STOCK' ? (          <div className="flex flex-col gap-2 justify-end">
              <span className="flex flex-row gap-1 items-center">
                <FaStore
                  size={38}
                  className="px-2 py-1 border-2 border-zinc-100 bg-green-700 rounded-md text-zinc-100"
                />
                <p className="text-zinc-700 font-medium"> Raspoloživo u radnji</p>
              </span>
              <span className="flex flex-row gap-1 items-center">
                <FaTruckFast
                  size={38}
                  className="px-2 py-1 border-2 border-zinc-100 bg-zinc-800 rounded-md text-zinc-100"
                />
                <p className="text-zinc-700 font-medium"> Dostupno za isporuku</p>
              </span>
            </div>) : (<div className="flex flex-col gap-2 justify-end">
              <span className="flex flex-row gap-1 items-center">
                <FaStore
                  size={38}
                  className="px-2 py-1 border-2 border-zinc-100 bg-lama rounded-md text-zinc-100"
                />
                <p className="text-zinc-700 font-medium"> Proizvod nije dostupan u radnji</p>
              </span>
              <span className="flex flex-row gap-1 items-center">
                <FaTruckFast
                  size={38}
                  className="px-2 py-1 border-2 border-zinc-100 bg-zinc-800 rounded-md text-zinc-100"
                />
                <p className="text-zinc-700 font-medium"> Dostupno za isporuku</p>
              </span>
            </div>)
            
          }


        </div>

        <div className="h-[2px] bg-gray-100" />
        <Add
          productId={product._id ?? ""}
          stockNumber={product.stock?.quantity || 0}
        />
        <div className="h-[2px] bg-gray-100" />
        {product.additionalInfoSections?.map((section: any) => (
          <div className="text-sm" key={section.title}>
            <h4 className="font-medium mb-4">{section.title}</h4>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SinglePage;
