"use client";

import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 lg:p-10">
        <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">
          Terms and Conditions
        </h1>
        <p className="text-gray-600 mb-8 text-center leading-relaxed">
          Please read the following terms and conditions carefully before using our website, <span className="italic">myastro.org.in</span>.
          By accessing or using our services, you agree to be bound by these terms.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">1. Introduction and Acceptance</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using <span className="italic">myastro.org.in</span>, you acknowledge and agree to abide by these terms and conditions.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">2. User Eligibility</h2>
            <p className="text-gray-600 leading-relaxed">
              Users must be of legal age to access this website and ensure the information they provide is accurate and complete.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">3. Site Content</h2>
            <p className="text-gray-600 leading-relaxed">
              The content provided on <span className="italic">myastro.org.in</span> is for informational and entertainment purposes only. It should not substitute professional advice.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">4. User Conduct</h2>
            <p className="text-gray-600 leading-relaxed">
              Users are expected to behave respectfully, refrain from harmful content, and comply with intellectual property and legal requirements.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">5. Privacy Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              Information collected through cookies and other analytics tools is governed by our Privacy Policy. We prioritize the confidentiality of your data.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">6. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              All materials, including text, images, and logos, are the intellectual property of <span className="italic">myastro.org.in</span> and protected under applicable laws.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">7. Disclaimer of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              We are not liable for any damages or losses resulting from reliance on the content available on <span className="italic">myastro.org.in</span>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">8. Third-Party Links</h2>
            <p className="text-gray-600 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the accuracy or reliability of external content.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">9. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to terminate user access if there is a violation of these terms or engagement in unlawful activities.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">10. Modifications to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              These terms may be modified at any time. Continued use of our website indicates acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">11. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These terms are governed by the laws of the applicable jurisdiction. Any disputes will be resolved under these laws.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
