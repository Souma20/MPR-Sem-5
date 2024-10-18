//"use client"
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import CategoryList from "@/components/CategoryList";
import Chatbot from "@/components/Chatbot";
import { WixClientContext } from "@/context/wixContext";
import { Suspense, useContext, useEffect } from "react";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";

const HomePage = async () => {
  //const wixClient =useWixClient()

  //useEffect(()=>{


//  const getProducts = async()=>{
//  const res = await wixClient.products.queryProducts().find();

//    console.log(res)
// };
// getProducts();
// },[wixClient]);

// const wixClient = await wixClientServer()

// const res = await wixClient.products.queryProducts().find();

// console.log(res);

  return (
    <div>
      {/* Slider Section */}
      <section aria-label="Featured Slider">
        <Slider />
      </section>

      {/* Featured Products Section */}
      <section aria-label="Featured Products" className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-3xl font-semibold mb-8">Featured Products</h1>
        <Suspense fallback={"loading"}>
        <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
        limit={4}
        />
        </Suspense>
      </section>

      {/* Categories Section */}
      <section aria-label="Categories" className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-3xl font-semibold mb-8">Categories</h1>
        <Suspense fallback={"loading"}>
        <CategoryList />
        </Suspense>
      </section>

      {/* New Products Section */}
      <section aria-label="New Products" className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-3xl font-semibold mb-8">New Products</h1>
        <ProductList />
      </section>

      {/* Chatbot Section */}
      <section aria-label="Chatbot" className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-3xl font-semibold mb-8">Chat with Us</h1>
        <Chatbot />  {/* Add the Chatbot component here */}
      </section>
    </div>
  );
};

export default HomePage;
