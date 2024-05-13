import { useState } from "react";

import logoSneaker from "@/assets/images/logo.svg";
import avatarImage from "@/assets/images/image-avatar.png";
import cartImage from "@/assets/images/image-product-1-thumbnail.jpg";

import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import NavLinkHeader from "@/components/header/NavLinkHeader";
import DeleteIcon from "@/components/icons/DeleteIcon";

export default function MainHeader() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setIsOpenMenu(true);
    };
    const handleCloseMenu = () => {
        setIsOpenMenu(false);
    };

    return (
        <>
            <header className="container relative mx-auto flex items-center gap-8 p-4 md:p-0">
                <button className="md:hidden" onClick={handleOpenMenu}>
                    <MenuIcon />
                </button>
                <img
                    src={logoSneaker}
                    alt="Logo Sneakers"
                    className="mr-auto md:mr-0"
                />
                <nav
                    className={`font-bold md:static md:mr-auto md:flex md:flex-row md:p-0 ${isOpenMenu ? "absolute left-0 top-0 z-10 flex h-full  w-4/5 flex-col gap-4 gap-y-4 bg-white  p-8" : "hidden md:h-auto md:gap-4"}`}
                >
                    <button
                        className="mb-12 md:hidden"
                        onClick={handleCloseMenu}
                    >
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
                    <section className="absolute left-0 top-[125%] z-10 w-full">
                        <div className="mx-4 rounded-md bg-white">
                            <h4 className="px-4 py-6 text-lg font-bold">
                                Cart
                            </h4>
                            <hr />
                            <div className="grid grid-cols-[1fr_4fr_1fr] items-center gap-4 px-4 py-6">
                                <img
                                    className=" rounded-md"
                                    src={cartImage}
                                    alt=""
                                />
                                <div>
                                    <h6>Autumn Limited Edition Sneakers</h6>
                                    <p>
                                        <span>$125.00 x 3</span>
                                        <span className="font-bold">
                                            $375.00
                                        </span>
                                    </p>
                                </div>
                                <button className=" ml-auto">
                                    <DeleteIcon className=" hover:fill-orange-primary" />
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </header>
            <span className="container mx-auto hidden h-[1px] w-full bg-gray-500 md:block"></span>
        </>
    );
}
