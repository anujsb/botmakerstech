import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const Contact2 = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-start">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Have a question or want to work together? We'd love to hear from you!
        </p>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> */}
      <div className="flex flex-col items-center justify-center">
        <div className="my-4">
          <Link href="https://aiforms.21bubbles.com/aiform/117">
            <Button>Contact Us</Button>
          </Link>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg text-gray-900 mb-4 font-semibold">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center ">
                <Phone className="h-4 w-4 text-gray-400 mr-2" />
                <a
                  href="tel:+917666451946"
                  className="hover:text-blue-600 hover:underline"
                >
                  +91 766 645 1946
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <a
                  href="mailto:contact@botmakerstech.in"
                  className="hover:text-blue-600 hover:underline"
                >
                  contact@botmakerstech.in
                </a>
              </div>
              <div className="flex items-center space-x-2 text-start">
                <BsWhatsapp className="h-4 w-4 text-gray-400 " />
                <a
                  href="https://api.whatsapp.com/send/?phone=917666451946&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 hover:underline"
                >
                  +91 766 645 1946
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-1" />
                <address className="not-italic">
                  Botmakers Pvt. Ltd. Second floor, Manik Padma smruti, near
                  Niramay,
                  <br /> Ganraj chowk, Lalit Estate, Baner, Pune,
                  Maharashtra 411045
                </address>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Our Location
            </h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54673.05871694681!2d73.77337841849369!3d18.548948794942167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf3520496b5f%3A0xee34e55c54da61d2!2sBotMakers!5e0!3m2!1sen!2sus!4v1733826165124!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact2;
