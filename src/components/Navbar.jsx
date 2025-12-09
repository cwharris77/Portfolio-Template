import { useState } from "react";
import { Link } from "react-router-dom";
import { close, github, linkedin, logo, menu, x } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}
    >
      <div className='w-full flex justify-between items-center max-w-9xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo} // your logo comes here
            alt='logo'
            className='sm:w-[70px] sm:h-[60px] w-[45px] h-[45px] object-contain'
          />

          {/* if you have text you want besides your logo it comes here.
          Otherwise delete this if you don't need it. */}
          {/* <img
            src={logotext}
            alt="logo"
            className="sm:w-[90px] sm:h-[90px] w-[85px] h-[85px] -ml-[0.6rem] object-contain"
          /> */}
          {/* LinkedIn */}
          <div
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/cooper-harris77/",
                "_blank"
              )
            }
            className='bg-none sm:w-12 sm:h-12 w-10 h-10 rounded-full 
              flex justify-center items-center cursor-pointer
              sm:opacity-[0.9] opacity-[0.8]'
          >
            <img
              src={linkedin}
              alt='Linkedin Link'
              className='object-contain rounded-full'
            />
          </div>
          {/* Github */}
          <div
            onClick={() =>
              window.open("https://github.com/cwharris77", "_blank")
            }
            className='bg-night sm:w-12 sm:h-12 w-10 h-10 rounded-full 
              flex justify-center items-center cursor-pointer
              sm:opacity-[0.9] opacity-[0.8]'
          >
            <img
              src={github}
              alt='Github Link'
              className='object-contain rounded-full w-4/5 h-4/5'
            />
          </div>
          {/* Twitter */}
          <div
            onClick={() =>
              window.open("https://x.com/cooper_harris77", "_blank")
            }
            className='bg-black sm:w-12 sm:h-12 w-10 h-10 rounded-full 
              flex justify-center items-center cursor-pointer
              sm:opacity-[0.9] opacity-[0.8]'
          >
            <img
              src={x}
              alt='X formerly TwitterLink'
              className='object-contain rounded-full w-4/5 h-4/5'
            />
          </div>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-14 mt-2'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-french" : "text-eerieBlack"
              } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className='sm:hidden flex flex-1 w-screen justify-end items-center'>
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${
                  toggle ? "menu-open" : "menu-close"
                }`}
            >
              <div className='flex justify-end'>
                <img
                  src={close}
                  alt='close'
                  className='w-[22px] h-[22px] object-contain cursor-pointer'
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className='list-none flex flex-col gap-[10rem]
                items-start justify-end mt-[6rem]'
              >
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`text-sm ${
                      active === nav.title ? "text-french" : "text-eerieBlack"
                    } font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                    style={{
                      fontSize: "4em",
                      margin: "0",
                      padding: "0",
                      textAlign: "right",
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt='menu'
              className='w-[34px] h-[34px] object-contain cursor-pointer'
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
