import Filter from "@/components/Filter"
import ProductList from "@/components/ProductList"
import { wixClientServer } from "@/lib/wixClientServer"
import Image from "next/image"
import { Suspense } from "react"

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();

  let cat;
  try {
    // Use a default slug if searchParams is not provided or invalid
    const collectionSlug = searchParams.slug || "all-products";
    cat = await wixClient.collections.getCollectionBySlug(collectionSlug);
  } catch (error) {
    console.error("Error fetching collection:", error);
    return (
      <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <h1 className="text-red-500">Failed to load the collection. Please try again later.</h1>
      </div>
    );
  }

  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      {/* CAMPAIGN */}
      <div className="hidden bg-pink-50 p-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font semi-bold leading-[48px] text-gray-700">Grab up to 50% off on Selected Products</h1>
          <button className="rounded-3xl bg-lama text-white w-max py-3 px-5 text-sm">Buy Now</button>
        </div>
        <div className="relative w-1/3">
          <Image src="/vegetables.png" alt="Image" fill className="object-contain" />
        </div>
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUCTS */}
      <h1 className="mt-12 text-xl font-semibold">{cat?.collection?.name} For You!</h1>
      <Suspense fallback={"Loading..."}>
        <ProductList
          categoryId={cat?.collection?._id || "00000000-000000-000000-000000000001"}
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
};

export default ListPage;
