"use client";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 lg:p-10">
        <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-700 mb-6">
          At <span className="font-semibold">myastro.org.in</span>, we value your
          privacy and are committed to protecting your personal information. This privacy policy outlines the types of
          information we collect, how we use it, and the measures we take to ensure its security.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-gray-700 mb-4">
            Information Collection
          </h2>
          <p className="text-gray-700">
            We may collect personal information from you when you visit our website{" "}
            <span className="font-semibold">myastro.org.in</span>, register for an account, make a purchase, or interact
            with our services. The types of information we collect may include your name, email address, birth date, and
            payment details.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-gray-700 mb-4">
            Use of Information
          </h2>
          <p className="text-gray-700">
            We use the collected information to provide you with personalized astrology readings, horoscopes, and other
            related services. This may include sending you newsletters, updates, or promotional offers. We may also use
            your information to improve our website, troubleshoot technical issues, and analyze user trends.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-gray-700 mb-4">
            Data Sharing
          </h2>
          <p className="text-gray-700">
            We do not sell, trade, or rent your personal information to third parties without your consent. However, we
            may share your information with trusted service providers who assist us in operating our website and
            providing our services. These providers are obligated to keep your information confidential and are
            prohibited from using it for any other purpose.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Cookies</h2>
          <p className="text-gray-700">
            We may use cookies and similar technologies to enhance your browsing experience and collect information
            about how you use our website. You can choose to disable cookies through your browser settings, but this may
            affect the functionality of certain features on our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Security</h2>
          <p className="text-gray-700">
            We take reasonable measures to protect your personal information from unauthorized access, alteration, or
            disclosure. This includes using encryption technology, secure servers, and regular monitoring of our
            systems.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Third-Party Links</h2>
          <p className="text-gray-700">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or
            content of these websites. We encourage you to review the privacy policies of any third-party websites you
            visit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Children’s Privacy</h2>
          <p className="text-gray-700">
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
            information from children. If you believe that we have inadvertently collected information from a child,
            please contact us to have it removed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Changes to Privacy Policy</h2>
          <p className="text-gray-700">
            We reserve the right to update or modify this privacy policy at any time. Any changes will be posted on our
            website, and your continued use of our services after such changes indicates your acceptance of the updated
            policy.
          </p>
        </section>

        <p className="text-gray-700">
          By using our website <span className="font-semibold">myastro.org.in</span>, and services, you consent to the
          collection, use, and disclosure of your personal information as described in this privacy policy. If you have
          any questions or concerns about our privacy practices, please contact us at{" "}
          <a href="mailto:info@myastro.org.in" className="text-purple-600 underline">
            info@myastro.org.in
          </a>
          .
        </p>
      </div>
    </div>
  );
}
