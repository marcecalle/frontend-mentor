import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";
import CloseIcon from "@/components/icons/CloseIcon";

import { useEffect, useRef, useState } from "react";

export default function SlideProduct({
  // eslint-disable-next-line react/prop-types
  arrayImgs = [],
  // eslint-disable-next-line react/prop-types
  arrayImgsSmall = [],
  // eslint-disable-next-line react/prop-types
  isOpenModal = false,
  // eslint-disable-next-line react/prop-types
  handleCloseModal = null,
  // eslint-disable-next-line react/prop-types
  handleOpenModal = () => {},
  ...props
}) {
  const [imgIndex, setImgIndex] = useState(0);
  const btnSlider = useRef(null);

  useEffect(() => {
    isOpenModal && btnSlider.current.classList.remove("md:hidden");
  }, [isOpenModal]);

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
      <section {...props}>
        {isOpenModal && (
          <button
            onClick={handleCloseModal}
            className="md:col-span-4 md:ml-auto"
          >
            <CloseIcon />
          </button>
        )}
        <div className="relative col-span-4">
          <img
            src={arrayImgs[imgIndex]}
            alt="Image Product"
            className=" aspect-[16/16] w-full md:cursor-pointer md:rounded-lg"
            onClick={handleOpenModal}
          />
          <div
            ref={btnSlider}
            className=" absolute left-0 top-1/2 flex w-full -translate-y-1/2 justify-between px-4 md:hidden"
          >
            <button
              onClick={handleClickPrev}
              className="grid h-10 w-10 place-items-center rounded-full bg-white"
            >
              <PrevIcon />
            </button>
            <button
              onClick={handleClickNext}
              className="grid h-10 w-10 place-items-center rounded-full bg-white"
            >
              <NextIcon />
            </button>
          </div>
        </div>
        {arrayImgsSmall.map((smallImgs, i) => (
          // eslint-disable-next-line react/jsx-key
          <div
            onClick={() => {
              setImgIndex(i);
            }}
            key={i}
            className="relative overflow-hidden rounded-md md:cursor-pointer"
          >
            <img
              src={smallImgs}
              alt="Thumbnail Product 1"
              className="hidden md:block md:rounded-lg"
            />
            <span
              className={`absolute top-0 h-full w-full hover:bg-[rgba(255,255,255,0.5)] ${i === imgIndex && "bg-[rgba(255,255,255,0.5)]"}`}
            ></span>
          </div>
        ))}
      </section>
    </>
  );
}
