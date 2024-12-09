// pages/privacy.tsx

import Footer from "@/components/Sections/Footer";
import { Header } from "@/components/Sections/Header";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen text-gray-900 mt-20">
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>
        <div className="space-y-6">
          <p>
            At BotMakers, we are committed to protecting your privacy. This
            Privacy Policy outlines how we collect, use, and protect any
            personal information that you provide when using our website. By
            accessing and using our website, you agree to the practices
            described in this policy.
          </p>

          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p>
            We may collect the following types of personal information when you
            visit our website:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Personal Identification Information:</strong> Name, email
              address, phone number, etc., which you provide voluntarily when
              contacting us or signing up for newsletters.
            </li>
            <li>
              <strong>Usage Data:</strong> Information related to your
              interactions with our website, such as IP address, browser type,
              pages visited, and other analytics.
            </li>
          </ul>

          <h2 className="text-xl font-semibold">
            2. How We Use the Information
          </h2>
          <p>
            We use the personal information collected for the following
            purposes:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Communication:</strong> To respond to your inquiries,
              provide customer support, and send updates or newsletters (if you
              have opted in).
            </li>
            <li>
              <strong>Improvement of Services:</strong> To analyze website
              traffic and usage, improve our website’s performance, and enhance
              user experience.
            </li>
            <li>
              <strong>Legal Compliance:</strong> To meet any legal or regulatory
              obligations.
            </li>
          </ul>

          <h2 className="text-xl font-semibold">3. Cookies</h2>
          <p>
            We use cookies to improve your experience on our website. Cookies
            are small files that are placed on your device’s hard drive that
            help us analyze web traffic or remember your preferences. You can
            choose to accept or decline cookies through your browser settings.
            Declining cookies may affect the functionality of the website.
          </p>

          <h2 className="text-xl font-semibold">4. Data Security</h2>
          <p>
            We are committed to ensuring that your personal information is
            secure. To prevent unauthorized access or disclosure, we have
            implemented suitable physical, electronic, and managerial procedures
            to safeguard the information we collect online.
          </p>

          <h2 className="text-xl font-semibold">5. Sharing Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information with trusted service
            providers who assist us in operating our website or conducting our
            business, but only when they agree to keep this information
            confidential.
          </p>
          <p>
            We may also disclose your personal information if required by law or
            in response to valid legal requests from governmental authorities.
          </p>

          <h2 className="text-xl font-semibold">6. Links to Other Websites</h2>
          <p>
            Our website may contain links to third-party websites. Once you
            leave our site, we have no control over the privacy practices or
            content of those external sites. We encourage you to review the
            privacy policies of any third-party websites before providing your
            personal information.
          </p>

          <h2 className="text-xl font-semibold">7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Access, update, or delete your personal information that we hold.
            </li>
            <li>Withdraw consent for any processing of your personal data.</li>
            <li>Opt-out of receiving marketing communications from us.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the
            information provided below.
          </p>

          <h2 className="text-xl font-semibold">
            8. Changes to this Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page, and the updated version will include the date
            of the latest revision. Your continued use of our website after any
            changes indicates your acceptance of the revised policy.
          </p>

          <h2 className="text-xl font-semibold">9. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            how your personal information is handled, please contact us at:
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

export default PrivacyPolicy;
