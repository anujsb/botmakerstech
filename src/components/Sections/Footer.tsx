import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { BsTwitterX, BsWhatsapp } from "react-icons/bs";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/BotMakersoff",
      label: "Facebook",
    },
    {
      icon: BsTwitterX,
      href: "https://x.com/BotMakersPvtLtd",
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/bot_makers_/profilecard/?igsh=MWc2Mm1mcm80cmx0dQ==",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/botmakers-pvt/",
      label: "LinkedIn",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@Botmakers-hy4zj",
      label: "Youtube",
    },
  ];

  const menuLinks = [
    { label: "Home", href: "/" },
    { label: "Robo Playzone", href: "/robo-playzone" },
    { label: "InnoTech Academy", href: "/innotech-academy" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-orange-50 text-gray-800 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand and Social Links */}
          <div className="flex flex-col items-center text-center">
            <Link href="/" className="mb-4">
              <Image
                src="/logo-black.webp"
                width={150}
                height={100}
                alt="Botmakers Logo"
                className="transition-transform hover:scale-105"
              />
            </Link>
            <p className="text-gray-600 mb-4 max-w-xs">
              Shaping Tomorrow's Innovators
            </p>

            <div className="flex space-x-6 mb-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>

            <nav className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <Link href="/terms" className="hover:text-blue-600">
                Terms of use
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/privacy" className="hover:text-blue-600">
                Privacy policy
              </Link>
            </nav>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-6 md:gap-10 justify-center text-center">
            <div>
              <h3 className="text-sm font-bold text-gray-800 uppercase mb-4">
                Menu
              </h3>
              <ul className="space-y-2">
                {menuLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-800 uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                {companyLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-sm font-bold text-gray-800 uppercase mb-4">
              Contact Us
            </h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="h-5 w-5 text-gray-400 mr-3" />
                <a
                  href="tel:+917666451946"
                  className="hover:text-blue-600 hover:underline"
                >
                  +91 766 645 1946
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <BsWhatsapp className="h-5 w-5 text-gray-400 mr-3" />
                <a
                  href="https://api.whatsapp.com/send/?phone=917666451946&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 hover:underline"
                >
                  +91 766 645 1946
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="h-5 w-5 text-gray-400 mr-3" />
                <a
                  href="mailto:contact@botmakerstech.in"
                  className="hover:text-blue-600 hover:underline"
                >
                  contact@botmakerstech.in
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                <a
                  href="https://maps.app.goo.gl/QMeWisHEjCWRPgRP8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 hover:underline"
                >
                  Baner, Pune, Maharashtra
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600 mb-2">
            &copy; {currentYear} Botmakers, Inc. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">
            Website by{" "}
            <Link
              href="https://www.21bubbles.com"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              21bubbles
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;