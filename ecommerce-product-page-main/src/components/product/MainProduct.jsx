import DetailsProducts from "@/components/product/DetailsProduct";
import SlideProduct from "@/components/product/SlideProduct";

export default function MainProduct() {
   return (
      <>
         <main className="grid md:grid-cols-2 gap-8 grid-cols-1">
            <SlideProduct />
            <DetailsProducts />
         </main>
      </>
   );
}
