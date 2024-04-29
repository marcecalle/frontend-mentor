import logoSneaker from "@/assets/images/logo.svg";
import avatarImage from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { useState } from "react";
import NavLinkHeader from "@/components/header/NavLinkHeader";

export default function MainHeader() {
   const [navClass, setNavClass] = useState(
      "hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
   );

   const handleOpenMenu = () => {
      setNavClass(
         "absolute bg-white top-0 left-0 h-full gap-y-4 font-bold w-4/5 p-8 flex flex-col md:p-0 md:flex-row md:flex gap-4 md:mr-auto md:static"
      );
   };
   const handleCloseMenu = () => {
      setNavClass(
         "hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
      );
   };

   return (
      <>
         <header className="flex container items-center mx-auto gap-8 p-4 md:p-0">
            <button className="md:hidden" onClick={handleOpenMenu}>
               <MenuIcon />
            </button>
            <img
               src={logoSneaker}
               alt="Logo Sneakers"
               className="mr-auto md:mr-0"
            />
            <nav className={navClass}>
               <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
                  <CloseIcon />
               </button>
               <NavLinkHeader text="Collections" />
               <NavLinkHeader text="Men" />
               <NavLinkHeader text="Women" />
               <NavLinkHeader text="About" />
               <NavLinkHeader text="Contact" />
            </nav>
            <div className="flex gap-4">
               <button>
                  <CartIcon />
               </button>
               <img src={avatarImage} alt="Avatar" className="w-12" />
            </div>
         </header>
         <span className="hidden container mx-auto md:block h-[1px] w-full bg-gray-500"></span>
      </>
   );
}
