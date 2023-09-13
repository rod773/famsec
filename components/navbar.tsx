"use client";
import React, { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.svg";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const navigationMenu = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "How we work",
    link: "#",
  },
  {
    name: "Our mission",
    link: "#",
  },
  {
    name: "About",
    link: "#",
  },
  {
    name: "Contact",
    link: "#",
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 1023 && open) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <React.Fragment>
      <header className="py-8">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <Image src={logo} alt="Famsec" width={157} height={30} />
              </Link>
            </div>
            <div className="hidden lg:flex items-center gap-x-4">
              {navigationMenu.map((navigation) => (
                <Link href={navigation.link} key={navigation.name} passHref>
                  <span className="inline-block px-4 py-2 font-medium text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out">
                    {navigation.name}
                  </span>
                </Link>
              ))}
            </div>

            <div>
              <Link
                href="#"
                className="px-5 py-4 bg-primary hover:bg-[#134761] hover:shadow-lg relative top-0 hover:-top-1 text-white rounded-lg hidden lg:inline-block ring-offset-2 focus:ring-2 focus:ring-primary transition-all"
              >
                Get Started
              </Link>

              <button className="lg:hidden" onClick={() => setOpen(true)}>
                <HiBars3 className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        direction="right"
        lockBackgroundScroll
        style={{
          width: "380px",
        }}
      >
        <div className="p-5 border-b">
          <button
            onClick={() => setOpen(false)}
            className="text-xl cursor-pointer text-gray-700 px-5"
          >
            <AiOutlineClose />
          </button>
        </div>

        <div className="p-5 text-gray-700 px-10">
          <ul className="block mb-7">
            {navigationMenu.map((navigation) => (
              <li key={navigation.name}>
                <Link
                  href={navigation.link}
                  className="group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary"
                >
                  <span>{navigation.name}</span>
                  <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                    <BiChevronRight />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
