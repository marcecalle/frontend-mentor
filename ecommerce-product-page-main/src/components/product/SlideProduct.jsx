import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";
import imgProd1 from "@/assets/images/image-product-1.jpg";
import imgProd2 from "@/assets/images/image-product-2.jpg";
import imgProd3 from "@/assets/images/image-product-3.jpg";
import imgProd4 from "@/assets/images/image-product-4.jpg";

import imgSmallProd1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgSmallProd2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgSmallProd3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgSmallProd4 from "@/assets/images/image-product-4-thumbnail.jpg";
import { useState } from "react";

const arrayImgs = [imgProd1, imgProd2, imgProd3, imgProd4];

export default function SlideProduct() {
   const [imgIndex, setImgIndex] = useState(0);
   const handleClickNext = () => {
      imgIndex >= arrayImgs.length - 1
         ? setImgIndex(0)
         : setImgIndex(imgIndex + 1);
   };
   const handleClickPrev = () => {
      imgIndex <= 0
         ? setImgIndex(arrayImgs.length - 1)
         : setImgIndex(imgIndex - 1);
   };

   return (
      <>
         <section className="grid md:grid-cols-4 md:gap-6">
            <div className="col-span-4 relative">
               <img src={arrayImgs[imgIndex]} alt="Image Product 1" />
               <div className=" absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between px-4">
                  <button
                     onClick={handleClickPrev}
                     className="bg-white w-10 h-10 grid place-items-center rounded-full"
                  >
                     <PrevIcon />
                  </button>
                  <button
                     onClick={handleClickNext}
                     className="bg-white w-10 h-10 grid place-items-center rounded-full"
                  >
                     <NextIcon />
                  </button>
               </div>
            </div>
            <img
               src={imgSmallProd1}
               alt="Thumbnail Product 1"
               className="hidden md:block"
            />
            <img
               src={imgSmallProd2}
               alt="Thumbnail Product 2"
               className="hidden md:block"
            />
            <img
               src={imgSmallProd3}
               alt="Thumbnail Product 3"
               className="hidden md:block"
            />
            <img
               src={imgSmallProd4}
               alt="Thumbnail Product 4"
               className="hidden md:block"
            />
         </section>
      </>
   );
}
