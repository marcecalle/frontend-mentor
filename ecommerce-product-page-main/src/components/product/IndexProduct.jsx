import DetailsProducts from "@/components/product/details/DetailsProduct";
import GalleryProduct from "@/components/product/gallery/GalleryProduct";

import imgProd1 from "@/assets/images/image-product-1.jpg";
import imgProd2 from "@/assets/images/image-product-2.jpg";
import imgProd3 from "@/assets/images/image-product-3.jpg";
import imgProd4 from "@/assets/images/image-product-4.jpg";

import imgSmallProd1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgSmallProd2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgSmallProd3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgSmallProd4 from "@/assets/images/image-product-4-thumbnail.jpg";

const arrayImgs = [imgProd1, imgProd2, imgProd3, imgProd4];

const arrayImgsSmall = [
  imgSmallProd1,
  imgSmallProd2,
  imgSmallProd3,
  imgSmallProd4,
];

export default function MainProduct() {
  return (
    <>
      <main className="grid grid-cols-1 items-center gap-8 md:container md:mx-auto md:min-h-[calc(100vh-88px-1px)] md:grid-cols-2">
        <GalleryProduct arrayImgs={arrayImgs} arrayImgsSmall={arrayImgsSmall} />
        <DetailsProducts />
      </main>
    </>
  );
}
