import React, { useState, useEffect } from "react";
import NavbarRight from "./NavbarRight";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const navLinks = [
    {
      name: "Products",
      href: "/",
      subLinks: [
        { name: "Nansen 2", href: "/nansen" },
        { name: "Solana on Nansen", href: "/solana-nansen" },
        { name: "Portfolio Tracker", href: "/portfolio-tracker" },
        { name: "Stake", href: "/stake" },
        { name: "Api", href: "/api" },
        { name: "Alpha", href: "/alpha" },
      ],
    },
    {
      name: "Solutions",
      href: "/",
      subLinks: [
        { name: "Crypto Investors", href: "/crypto-investors" },
        { name: "Venture capital", href: "/venture-capital" },
        { name: "Blockchain and L2s", href: "/blockchain" },
        { name: "Exchanges and Marketplace", href: "/exchanges" },
        { name: "Crypto and Depi Protocols", href: "/crypto" },
        { name: "Infrastructure and Services Providers", href: "/infrastructure" },
      ],
    },
    {
      name: "Learn",
      href: "/",
      subLinks: [
        { name: "Blog", href: "/blog" },
        { name: "Guides", href: "/guides" },
        { name: "Help center", href: "/help" },
      ],
    },
    {
      name: "Company",
      href: "/",
      subLinks: [
        { name: "Pricing", href: "/pricing" },
        { name: "Press", href: "/press" },
        { name: "Afilliates", href: "/afilliates" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <nav
      className={`text-white transition-all duration-300 ${
        isScrolled ? "fixed top-0 left-0 w-full bg-[#061019] shadow-lg z-[999]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-500 hover:text-indigo-400 transition duration-300">
          <a href="/" className="text-white">
            Bestcryptotraders
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-grow justify-center space-x-8 items-center">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a
                href={link.href}
                className="text-white hover:text-emerald-400 focus:text-emerald-400 transition duration-300 px-4 py-2 inline-flex items-center"
                aria-label={`Navigate to ${link.name}`}
              >
                {link.name}
                {link.subLinks && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </a>
              {link.subLinks && (
                <ul className="absolute left-0 top-full mt-2 text-white w-48 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-[#061019] z-50">
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.name}>
                      <a
                        href={subLink.href}
                        className="block px-4 py-2 hover:bg-emerald-600 transition duration-300"
                      >
                        {subLink.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* NavbarRight */}
        <div className="ml-auto hidden lg:block">
          <NavbarRight />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-64 bg-[#061019] text-white h-full shadow-lg transition-transform duration-300 lg:hidden z-[999]`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMobileMenu}
            className="text-white"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-4">
          {navLinks.map((link, index) => (
            <li key={link.name}>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSubMenu(index)}
              >
                <a href={link.href} className="block px-4 py-2 hover:text-emerald-400 transition duration-300">
                  {link.name}
                </a>
                {link.subLinks && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 transition-transform ${
                      openSubMenu === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
              {link.subLinks && openSubMenu === index && (
                <ul className="ml-4 mt-2 space-y-2">
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.name}>
                      <a
                        href={subLink.href}
                        className="block px-4 py-2 hover:text-emerald-400 transition duration-300"
                      >
                        {subLink.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
