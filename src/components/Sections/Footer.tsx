import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-black.webp"
                width={100}
                height={70}
                alt="logo"
                className="rounded-lg"
              />
            </Link>
            {/* <p className="text-gray-400 text-base">
              Making the world a better place through constructing elegant
              hierarchies.
            </p> */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-white">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-white"
                    >
                      Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-white"
                    >
                      Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-white"
                    >
                      Commerce
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-white"
                    >
                      Insights
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-white"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-white"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-white"
                    >
                      Guides
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-white"
                    >
                      API Status
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-white"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-white"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-white"
                    >
                      Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-white"
                    >
                      Press
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-white"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-white"
                    >
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-700 xl:text-center">
            &copy; 2023 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
