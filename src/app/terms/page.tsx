// pages/terms.tsx

import Footer from "@/components/Sections/Footer";
import { Header } from "@/components/Sections/Header";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen text-gray-900 mt-20">
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          Terms & Conditions
        </h1>
        <div className="space-y-6">
          <p>
            Welcome to BotMakers. These terms and conditions outline the rules
            and regulations for the use of our website, intended solely for
            introducing our company and its services. By accessing this website,
            we assume you accept these terms and conditions. Do not continue to
            use this website if you do not agree to all of the terms and
            conditions stated on this page.
          </p>

          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>
            The content on this website is provided for general informational
            purposes only. Our website serves as an introduction to our company,
            BotMakers, and the products and services we offer.
          </p>

          <h2 className="text-xl font-semibold">2. Use of Website</h2>
          <p>
            By accessing this website, you agree to use it only for lawful
            purposes and in a manner that does not infringe on the rights of,
            restrict, or inhibit anyone else’s use and enjoyment of the site.
          </p>

          <h2 className="text-xl font-semibold">
            3. Intellectual Property Rights
          </h2>
          <p>
            Unless otherwise stated, BotMakers owns the intellectual property
            rights for all material on this website. You may access this from
            BotMakers for your own personal use, subject to restrictions set in
            these terms and conditions.
          </p>
          <p>
            <strong>You must not:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Republish material from our website.</li>
            <li>Sell, rent, or sub-license material from our website.</li>
            <li>
              Reproduce, duplicate, or copy material from our website without
              permission.
            </li>
          </ul>

          <h2 className="text-xl font-semibold">4. Disclaimer</h2>
          <p>
            The information provided on this website is accurate to the best of
            our knowledge at the time of publication. However, BotMakers does
            not warrant or guarantee the accuracy, reliability, or completeness
            of the information presented. We reserve the right to modify or
            update the content at any time without prior notice.
          </p>

          <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
          <p>
            BotMakers will not be held liable for any loss or damage of any kind
            resulting from the use of this website or reliance on any
            information provided on it. Users of the website do so at their own
            risk.
          </p>

          <h2 className="text-xl font-semibold">6. Links to Other Websites</h2>
          <p>
            This website may contain links to third-party websites or services
            that are not owned or controlled by BotMakers. We have no control
            over the content, privacy policies, or practices of any third-party
            websites.
          </p>

          <h2 className="text-xl font-semibold">7. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of INDIA. Any disputes relating to these
            terms and conditions shall be subject to the jurisdiction of the
            courts of [Your Jurisdiction].
          </p>

          <h2 className="text-xl font-semibold">
            8. Changes to Terms and Conditions
          </h2>
          <p>
            We may update these terms and conditions from time to time, and the
            latest version will be posted on this page. Continued use of the
            website following any changes constitutes acceptance of the new
            terms.
          </p>

          <h2 className="text-xl font-semibold">9. Contact Information</h2>
          <p>
            If you have any questions about these terms and conditions, please
            contact us at:
          </p>
          <p>
            <strong>BotMakers</strong>
          </p>
          <p>
            <a href="mailto:contact@botmakerstech.in" className="text-blue-500">
              contact@botmakerstech.in
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
