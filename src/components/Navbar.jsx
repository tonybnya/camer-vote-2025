import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Code Électoral", href: "/docs/Code_Electoral.pdf" },
    { label: "Candidats", href: "#" },
    { label: "Infos Hub", href: "#" },
    { label: "Mon Bureau de Vote", href: "#" },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden bg-white shadow-sm">
        <div className="flex items-center justify-between p-4">
          <div className="bg-blue-600 text-white px-4 py-2 rounded font-semibold">
            <a href="/">
              <img
                src="/img/vote.svg"
                alt="logo"
                className="h-8 w-8 cursor-pointer hover:scale-105"
              />
            </a>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t bg-white">
            <nav className="flex flex-col space-y-1 p-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 py-2"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/">
              <img
                src="/img/vote.svg"
                alt="logo"
                className="h-12 w-12 cursor-pointer hover:scale-105"
              />
            </a>
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
