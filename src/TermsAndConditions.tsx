import React from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

type TermsSection = {
  title: string;
  content: React.ReactNode;
};

const TERMS_SECTIONS: TermsSection[] = [
  {
    title: "1. INTRODUCTION",
    content: (
      <>
        <p>Welcome to Loadrivo ("Platform", "we", "our", "us").</p>

        <p className="mt-3">
          Loadrivo is an online platform that allows users to:
        </p>

        <ul className="mt-2 list-disc pl-6 space-y-1">
          <li>Discover independent transport drivers in Nigeria</li>
          <li>View ratings and reviews of logistics service providers</li>
          <li>Submit reviews based on personal experiences</li>
          <li>
            Enable independent drivers to list and promote their services
            through paid subscriptions and commission payment
          </li>
        </ul>

        <p className="mt-3">
          By accessing or using this Platform, you agree to be bound by these
          Terms and Conditions ("Terms"). If you do not agree, please do not use
          the Platform.
        </p>
      </>
    ),
  },
  {
    title: "2. USER CATEGORIES",
    content: (
      <>
        <p>The Platform serves three (2) categories of users:</p>

        <ol className="mt-2 list-decimal pl-6 space-y-1">
          <li>
            Customers – Individuals searching for logistics services and
            submitting reviews
          </li>
          <li>
            Independent Logistics Drivers – Individual transporters offering
            logistics services
          </li>
        </ol>

        <p className="mt-3">Each user category is subject to these Terms.</p>
      </>
    ),
  },
  {
    title: "3. ELIGIBILITY",
    content: (
      <>
        <p>To use this Platform, you must:</p>

        <ul className="mt-2 list-disc pl-6 space-y-1">
          <li>Be at least 18 years old</li>
          <li>Provide accurate and truthful information during onboarding</li>
          <li>Have the legal capacity to enter into a binding agreement</li>
        </ul>

        <p className="mt-3">
          We reserve the right to suspend or terminate accounts that provide
          false or misleading information.
        </p>
      </>
    ),
  },
  {
    title: "4. ACCOUNT REGISTRATION",
    content: (
      <>
        <p className="font-semibold">4.1 Customers</p>
        <p className="mt-2">Customers are required to provide:</p>

        <ul className="mt-2 list-disc pl-6 space-y-1">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
        </ul>
      </>
    ),
  },
  {
    title: "4.2 Independent Logistics Drivers",
    content: (
      <>
        <p>Independent drivers are required to provide:</p>
        <ul className="mt-2 list-disc pl-6 space-y-1">
          <li>Profile picture</li>
          <li>Full name</li>
          <li>National Identification Number (NIN)</li>
          <li>Plate number</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Password</li>
          <li>Areas of operation</li>
        </ul>
        <p className="mt-3">
          Users are responsible for maintaining the confidentiality of their
          login details.
        </p>
      </>
    ),
  },
  {
    title: "5. VERIFICATION & ACCURACY OF INFORMATION",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            You agree that all information submitted is accurate and up to date.
          </li>
          <li>
            We may verify submitted documents (including NIN and Number plate
            registrations).
          </li>
          <li>
            Verification does not guarantee service quality or endorsement.
          </li>
        </ul>
        <p className="mt-3">
          Loadrivo does not act as a logistics provider and is not responsible
          for service delivery.
        </p>
      </>
    ),
  },
  {
    title: "6. SUBSCRIPTIONS, COMMISSION & PAYMENTS",
    content: (
      <>
        <p className="font-semibold">6.1 Subscription Plans</p>
        <p className="mt-2">
          Independent drivers and transport companies must subscribe to a
          monthly, quarterly, or yearly plan or choose a commission billing
          payment to be discoverable on the Platform.
        </p>

        <p className="font-semibold mt-4">6.2 Payments</p>
        <ul className="mt-2 list-disc pl-6 space-y-1">
          <li>Subscription fees are non-refundable.</li>
          <li>Fees may change with prior notice.</li>
          <li>
            Failure to renew a subscription may result in reduced visibility or
            suspension.
          </li>
          <li>
            A commission fee will be charged for every pickup carried by driver
            if the driver chooses commission billing method.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "7. REVIEWS & RATINGS",
    content: (
      <>
        <p className="font-semibold">7.1 User Reviews</p>
        <p className="mt-2">
          Customers may submit reviews based on genuine experiences.
        </p>

        <p className="font-semibold mt-4">7.2 Prohibited Content</p>
        <p className="mt-2">Reviews must NOT:</p>
        <ul className="mt-2 list-disc pl-6 space-y-1">
          <li>Contain false, misleading, or defamatory information</li>
          <li>Include hate speech, threats, or abusive language</li>
          <li>Promote competitors unfairly</li>
          <li>Contain personal data without consent</li>
        </ul>
        <p className="mt-3">
          We reserve the right to edit, hide, or remove reviews that violate
          these Terms.
        </p>
      </>
    ),
  },
  {
    title: "8. PLATFORM ROLE & LIMITATION OF LIABILITY",
    content: (
      <>
        <p>Loadrivo:</p>
        <ul className="mt-2 list-disc pl-6 space-y-1">
          <li>Is a listing and review platform only</li>
          <li>Does NOT provide logistics services</li>
        </ul>

        <p className="mt-4">Loadrivo is NOT responsible for:</p>
        <ul className="mt-2 list-disc pl-6 space-y-1">
          <li>Delays, damages, losses, or disputes between users</li>
          <li>Quality of service rendered by drivers or companies</li>
          <li>
            Financial transactions between customers and service providers
          </li>
        </ul>

        <p className="mt-3">All engagements occur at users’ own risk.</p>
      </>
    ),
  },
  {
    title: "9. USER CONDUCT",
    content: (
      <>
        <p>You agree NOT to:</p>
        <ul className="mt-2 list-disc pl-6 space-y-1">
          <li>Use the Platform for fraudulent activities</li>
          <li>Impersonate another person or business</li>
          <li>Attempt to manipulate ratings or reviews</li>
          <li>Upload malicious software or spam</li>
        </ul>
        <p className="mt-3">
          Violation may lead to suspension or permanent ban.
        </p>
      </>
    ),
  },
  {
    title: "10. INTELLECTUAL PROPERTY",
    content: (
      <>
        <p>All Platform content including:</p>
        <ul className="mt-2 list-disc pl-6 space-y-1">
          <li>Logos</li>
          <li>Design</li>
          <li>Text</li>
          <li>Software</li>
        </ul>
        <p className="mt-3">
          Are the property of Loadrivo and may not be copied or reused without
          permission.
        </p>
      </>
    ),
  },
  {
    title: "11. ACCOUNT SUSPENSION & TERMINATION",
    content: (
      <>
        <p>We may suspend or terminate your account if you:</p>
        <ul className="mt-2 list-disc pl-6 space-y-1">
          <li>Violate these Terms</li>
          <li>Provide false information</li>
          <li>Abuse the Platform or other users</li>
        </ul>
        <p className="mt-3">Termination does not entitle users to refunds.</p>
      </>
    ),
  },
  {
    title: "12. PRIVACY",
    content: (
      <>
        <p>
          Use of the Platform is also governed by our Privacy Policy, which
          explains how personal data is collected, used, and protected.
        </p>
      </>
    ),
  },
  {
    title: "13. MODIFICATIONS TO TERMS",
    content: (
      <>
        <p>We reserve the right to update these Terms at any time.</p>
        <p className="mt-2">
          Continued use of the Platform constitutes acceptance of updated Terms.
        </p>
      </>
    ),
  },
  {
    title: "14. GOVERNING LAW",
    content: (
      <>
        <p>
          These Terms are governed by the laws of the Federal Republic of
          Nigeria.
        </p>
      </>
    ),
  },
  {
    title: "15. CONTACT INFORMATION",
    content: (
      <>
        <p>For questions or complaints, contact:</p>
        <p className="mt-2 font-semibold">Logistic Finder</p>
        <p>Email: support@loadrivo.com</p>
      </>
    ),
  },
  {
    title: "16. ACCEPTANCE",
    content: (
      <>
        <p>
          By clicking “I agree to the Terms and Conditions”, you confirm that
          you have read, understood, and agreed to these Terms.
        </p>
      </>
    ),
  },
];

export default function TermsAndConditions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <header className="relative bg-[#69B5F6] text-white">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <h1 className="text-center font-extrabold tracking-wide">
            TERMS AND CONDITIONS
          </h1>
        </div>

        <button
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Close"
          className="absolute right-4 top-4 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 transition flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-center font-extrabold text-[#0F172A]">
          TERMS AND CONDITIONS
        </h2>
        <p className="text-center text-xs text-gray-500 mt-2">
          Effective Date: 1/28/2026
        </p>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-gray-700">
          {TERMS_SECTIONS.map((section) => (
            <section key={section.title}>
              <h3 className="font-extrabold text-[#0F172A]">{section.title}</h3>
              <div className="mt-3">{section.content}</div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
