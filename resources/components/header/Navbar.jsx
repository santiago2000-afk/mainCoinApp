import React, { useState, useEffect } from 'react';
import NavbarRight from './NavbarRight';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: 'Products', href: '/' },
    {
      name: 'Solutions',
      href: '/solutions',
      subLinks: [
        { name: 'Web Solutions', href: '/web-solutions' },
        { name: 'App Solutions', href: '/app-solutions' },
      ],
    },
    { name: 'Learn', href: '/learn' },
    {
      name: 'Company',
      href: '/company',
      subLinks: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e) => {
    if (window.innerWidth <= 1024) {
      setIsMobileMenuOpen(false);
    }
    e.preventDefault();
  };

  return (
    <nav
      className={`text-white transition-all duration-300 ${
        isScrolled ? 'fixed top-0 left-0 w-full bg-[#061019] shadow-lg z-10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-2 py-4 flex items-center justify-between">
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
                onClick={handleLinkClick}
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </a>
              {link.subLinks && (
                <ul className="absolute left-0 mt-2 text-white w-48 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-[#061019]">
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.name}>
                      <a
                        href={subLink.href}
                        onClick={handleLinkClick}
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

        {/* NavbarRight (To the right) - Hidden on mobile */}
        <div className="ml-auto hidden lg:block">
          <NavbarRight />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            aria-controls="mobile-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Sliding Drawer) */}
      <div
        id="mobile-menu"
        className={`${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed top-0 right-0 w-64 bg-[#061019] text-white h-full shadow-lg transition-transform duration-300 ease-in-out lg:hidden`}
        role="menu"
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.name} className="relative">
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="text-white hover:text-emerald-400 focus:text-emerald-400 transition duration-300 px-4 py-2 block"
                aria-label={`Navigate to ${link.name}`}
              >
                {link.name}
                {link.subLinks && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 w-4 h-4 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </a>
              {link.subLinks && (
                <ul className="mt-2 text-white w-full bg-[#061019]">
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.name}>
                      <a
                        href={subLink.href}
                        onClick={handleLinkClick}
                        className="block px-4 py-2 hover:bg-emerald-600 transition duration-300"
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
