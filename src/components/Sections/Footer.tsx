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

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/BotMakersoff",
      label: "Facebook",
    },
    {
      icon: Twitter,
      href: "https://x.com/anujsbhuyar",
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
      // href: "",
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

  const legalLinks = [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms and Conditions", href: "/terms" },
  ];

  return (
    <footer className="bg-orange-50 text-gray-800 text-start pt-10">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Social Links */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-black.webp"
                width={120}
                height={80}
                alt="Botmakers Logo"
                className="rounded-lg transition-transform hover:scale-105"
              />
            </Link>

            <p className="text-gray-600 max-w-xs">
              Innovating technology solutions to transform the future of
              robotics and education.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">
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
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">
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

          {/* Legal and Contact */}
          <div className=" grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-2">
                {legalLinks.map(({ label, href }) => (
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
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">
                Contact
              </h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center space-x-2 text-start text-sm">
                  <Phone className="h-4 w-4" />
                  <span>+91 766 645 1946</span>
                </div>
                <div className="flex items-center space-x-2 text-start text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>Baner, Pune, Maharashtra</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} Botmakers, Inc. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-gray-600">
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
