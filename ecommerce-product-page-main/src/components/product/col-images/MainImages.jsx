import SlideProduct from "@/components/product/col-images/SlideProduct";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function MainImages({ arrayImgs, arrayImgsSmall }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => window.innerWidth > 767 && setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);
  return (
    <>
      <SlideProduct
        arrayImgs={arrayImgs}
        arrayImgsSmall={arrayImgsSmall}
        className="grid md:grid-cols-4 md:gap-6"
        handleOpenModal={handleOpenModal}
      />
      {isOpenModal && (
        <SlideProduct
          arrayImgs={arrayImgs}
          arrayImgsSmall={arrayImgsSmall}
          isOpenModal={isOpenModal}
          handleCloseModal={handleCloseModal}
          className="hidden md:absolute md:left-1/2 md:top-1/2 md:grid md:max-w-md md:-translate-x-1/2 md:-translate-y-1/2 md:grid-cols-4 md:gap-6"
        />
      )}
    </>
  );
}
