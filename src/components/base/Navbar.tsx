import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/img/logo/nefa.svg";
import NavLink from "../NavLink";
import BaseButton from "./Button";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const navigate = useNavigate();

  function toggleSidebar() {
    setOpen(!open);
  }
  function goToHome(){
    navigate('/', { replace: true })
  }
  function goTocontact(){
    navigate('/contact', { replace: true })
  }
  function handledClick(){
    // window.location.href = "https://pos.lukis.blog/";
    window.open("https://pos.lukis.blog/", "_blank");
  }

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="navbar" className={`z-10 w-full text-neutral-800 bg-inherit fixed ${scrollPosition > 0 && 'bg-white shadow-sm'} ${open ? 'bg-white': 'bg-inherit'}`}>
    {/* <nav id="navbar" className={`z-10 w-full text-neutral-800 bg-white`}> */}
      <div className="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
        <div className="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8">
          <div className="w-full flex flex-row items-center justify-between py-6">
            <div>
              {/* <Logo /> */}
              <div className="cursor-hover" onClick={goToHome}>
                <img src={require(`../../assets/img/logo/logo.png`)}
                    style={{width:'160px'}}
                    alt=""
                />
              </div>
            </div>
            <button
              className="rounded-lg lg:hidden focus:outline-none focus:shadow-outline"
              onClick={toggleSidebar}
            >
              {!open && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
              {open && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <ul
            className={`${
              open ? "flex" : "hidden lg:flex"
            } w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0`}
          >
            <NavLink name="Precios" url="/#pricingSection" />
            <NavLink name="Modulos" url="modules" />
            <NavLink name="Contato" url="contact" />
            <NavLink name="FAQ" url="#" />
            {/* <div className="flex items-center justify-normal">
              <NavLink name="Products" url="#" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 -ml-3 mt-1"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div> */}
          </ul>
        </div>
        <div className={`${open ? "flex" : "hidden lg:flex"} space-x-3`}>
          <BaseButton onClick={handledClick} style="px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]" >
            Iniciar Sesión
          </BaseButton>
          <BaseButton onClick={goTocontact} style="px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white">
            Probar Gratis
          </BaseButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
