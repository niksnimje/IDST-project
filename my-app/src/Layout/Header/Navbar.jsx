"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import contactIcon from "../../../public/assets/contact-icon.png"

// Navigation links data
const navLinks = [
  { name: "Ethos", href: "/" },
  { name: "Gallery", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#D0C6BA] shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Desktop: Left side - MENU with icon, Mobile: Left side - IDST Logo */}
            <div className="flex items-center space-x-2">
              {isMobile ? (
                // Mobile: Show logo on left
                <Link href="/" className="text-2xl font-bold text-gray-800 font-manrope">
                  IDST
                </Link>
              ) : (
                // Desktop: Show MENU with custom icon on left
                <button
                  onClick={toggleMenu}
                  className="flex items-center space-x-2 text-black hover:text-[#371313] transition-colors"
                  aria-label="Open menu"
                >
                  {/* Custom Menu Icon - Replace with your image */}
                  <div className="relative w-5 h-5">
                    {/* You can use Image component here */}
                    {/* <Image 
                      src="/menu-icon.png" 
                      alt="Menu" 
                      width={20} 
                      height={20}
                      className="object-contain"
                    /> */}
                    {/* Temporary icon (replace with your image) */}
                    <svg 
                      className="w-5 h-5" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </div>
                  <span className="font-medium">MENU</span>
                </button>
              )}
            </div>

            {/* Desktop: Center - IDST Logo, Mobile: Hidden */}
            {!isMobile && (
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
                  IDST
                </Link>
              </div>
            )}

            {/* Desktop: Right side - CONNECT with icon, Mobile: Right side - Menu Icon */}
            <div className="flex items-center space-x-2">
              {isMobile ? (
                // Mobile: Show menu icon on right
                <button
                  onClick={toggleMenu}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  aria-label="Open menu"
                >
                  <FiMenu className="text-2xl" />
                </button>
              ) : (
                // Desktop: Show CONNECT with custom icon on right
                <Link 
                  href="/contact"
                  className="flex items-center space-x-2 text-black hover:text-[#371313] transition-colors"
                >
                  <div className="relative w-5 h-5 bg-red-500">
                    <Image 
                      src={contactIcon}
                      alt="Connect" 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-medium">CONNECT</span>
                  {/* Custom Connect Icon - Replace with your image */}
                  
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for background dimming */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      />

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 z-50 h-full w-64 bg-[#371313] shadow-xl transition-all duration-300 ease-in-out ${
          isMobile
            ? isMenuOpen
              ? "right-0" // Mobile: Slide in from right
              : "-right-64" // Mobile: Hide to right
            : isMenuOpen
            ? "left-0" // Desktop: Slide in from left
            : "-left-64" // Desktop: Hide to left
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={closeMenu}
            className="p-1 text-gray-300 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <FiX className="text-2xl" />
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <div className="py-4">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center px-6 py-3 text-white hover:bg-[#4a1a1a] transition-colors duration-200"
                  onClick={closeMenu}
                >
                  <span className="font-medium">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Spacer to prevent content from hiding under navbar */}
      <div className="h-16"></div>
    </>
  );
}