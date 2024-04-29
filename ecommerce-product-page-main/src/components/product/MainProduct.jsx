import DetailsProducts from "@/components/product/DetailsProduct";
import SlideProduct from "@/components/product/SlideProduct";

export default function MainProduct() {
  return (
    <>
      <main className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <SlideProduct />
        <DetailsProducts />
      </main>
    </>
  );
}
