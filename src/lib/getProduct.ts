"use server";

import { wixClientServer } from "@/lib/wixClientServer";

export async function getProduct(slug: string) {
  const wixClient = await wixClientServer();
  const products = await wixClient.products.queryProducts().eq("slug", slug).find();

  if (!products.items[0]) {
    return null;
  }

  return products.items[0];
}
