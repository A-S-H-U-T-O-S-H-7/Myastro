"use client";

import React from "react";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 lg:p-12">
        <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">
          Disclaimer
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            We know it’s tempting to skip these Terms of Service, but it’s
            important to establish what you can expect from us as you use our
            services, and what we expect from you. These Terms of Service
            reflect the way that our business works, the laws that apply to our
            company, and certain things that we’ve always believed to be true.
            As a result, these Terms of Service help define our relationship
            with you as you interact with our services.
          </p>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">
              What’s covered in these terms?
            </h2>
            <p>
              These terms include the following topic headings:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>
                <strong>What you can expect from us:</strong> Describes how we
                provide and develop our services.
              </li>
              <li>
                <strong>What we expect from you:</strong> Establishes certain
                rules for using our services.
              </li>
              <li>
                <strong>Content in our services:</strong> Describes the
                intellectual property rights to the content that you find in
                our services – whether that content belongs to us, you, or
                others.
              </li>
              <li>
                <strong>In case of problems or disagreements:</strong> Describes
                other legal rights that you have and what to expect in case
                someone violates these terms.
              </li>
            </ul>
          </div>

          <p>
            Understanding these terms is important because, by using our
            services, you’re agreeing to these terms. Besides these terms, we
            also publish a <strong>Privacy Policy</strong>. Although it’s not
            part of these terms, we encourage you to read it, to better
            understand how our Terms & Conditions work.
          </p>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">
              Information We Collect
            </h2>
            <p>
              We want you to understand the types of information we collect as
              you use our services. We collect information to provide better
              services to all our users. The information we collect, and how
              that information is used, depends on how you use our services.
              When you’re signed in, we also collect information that we store
              with your Account, which we treat as personal information. We
              also collect information about the interaction of your apps,
              browsers, and devices with our services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">
              Disclaimer for Predictions
            </h2>
            <p>
              The information and data contained on a MyAstro website is to be
              treated purely for your entertainment purposes only. Any
              prediction or other message that you receive is not a substitute
              for advice, programs, or treatment that you would normally
              receive from a licensed professional such as a lawyer, doctor,
              psychiatrist, or financial advisor.
            </p>
            <p>
              Accordingly, myastro.org.in provides no guarantees, implied
              warranties, or assurances of any kind, and will not be
              responsible for any interpretation made or use by the recipient
              of the information and data mentioned above.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">
              Legal Information
            </h2>
            <p>
              Moreover, myastro.org.in is not a registered firm. It is a product
              of ATD Retails and Digital Network Pvt. Ltd. All the transactions
              and gathered data is/will be accessed by MyAstro.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
