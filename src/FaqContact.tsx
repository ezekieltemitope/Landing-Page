// import { useMemo, useState } from "react";
// import {
//   HelpCircle,
//   Phone,
//   Mail,
//   Plus,
//   Minus,
//   Instagram,
//   Twitter,
//   Facebook,
//   Linkedin,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import Navbar from "./components/Navbar";

// type FAQItem = {
//   question: string;
//   answer: string;
// };

// type FAQGroup = {
//   title: string;
//   items: FAQItem[];
// };

// function AccordionRow({
//   question,
//   answer,
//   isOpen,
//   onToggle,
// }: {
//   question: string;
//   answer: string;
//   isOpen: boolean;
//   onToggle: () => void;
// }) {
//   return (
//     <div className="border border-gray-200 bg-white">
//       <button
//         type="button"
//         onClick={onToggle}
//         className="w-full flex items-center justify-between gap-3 px-3 py-2.5 text-left"
//       >
//         <span className="text-[11px] md:text-xs text-[#0F172A]">
//           {question}
//         </span>

//         <span className="shrink-0 text-gray-500">
//           {isOpen ? (
//             <Minus className="w-4 h-4" />
//           ) : (
//             <Plus className="w-4 h-4" />
//           )}
//         </span>
//       </button>

//       {isOpen && (
//         <div className="px-3 pb-3 text-[11px] md:text-xs text-gray-600 leading-relaxed">
//           {answer}
//         </div>
//       )}
//     </div>
//   );
// }

// export default function FaqContact() {
//   const faqGroups: FAQGroup[] = useMemo(
//     () => [
//       {
//         title: "Frequently Asked Questions (FAQ)",
//         items: [
//           {
//             question: "What is Nigeria Logistics Finder?",
//             answer:
//               "Logistics Finder is an online platform that helps customers find, compare, and review logistics service providers across Nigeria. It connects customers with independent drivers and transport companies in a transparent and trusted way.",
//           },
//           {
//             question: "Who can use this platform?",
//             answer:
//               "Customers and independent logistics drivers can use the platform.",
//           },
//         ],
//       },
//       {
//         title: "Customer Questions",
//         items: [
//           {
//             question: "Does Logistics Finder provide logistics services?",
//             answer:
//               "No. Loadrivo is a listing and review platform and does not directly provide logistics services.",
//           },
//           {
//             question: "How do I register as a customer?",
//             answer:
//               "You can create an account by providing your name, email, and phone number during onboarding.",
//           },
//           {
//             question: "Can I book a logistics service on the platform?",
//             answer:
//               "You can connect with drivers on the platform and arrange delivery services based on availability and pricing.",
//           },
//           {
//             question: "Can I leave a review?",
//             answer:
//               "Yes. Customers can submit reviews based on genuine experiences.",
//           },
//           {
//             question: "Can I edit or delete my review?",
//             answer:
//               "Depending on platform policy, you may be able to update or remove your review. If not, contact support.",
//           },
//           {
//             question: "Are reviews verified?",
//             answer:
//               "We may moderate content, but verification does not guarantee service quality or endorsement.",
//           },
//         ],
//       },
//       {
//         title: "Independent Driver Questions",
//         items: [
//           {
//             question: "How do I register as an independent driver?",
//             answer:
//               "Drivers register by providing required details such as NIN, plate number, contact details, and areas of operation.",
//           },
//           {
//             question: "Do I need to pay to appear on the platform?",
//             answer:
//               "Drivers may subscribe to a plan or choose commission billing to be discoverable on the platform.",
//           },
//           {
//             question: "What happens if my subscription expires?",
//             answer:
//               "Your visibility may reduce and your account may be suspended until renewal.",
//           },
//           {
//             question: "Can I change my operating locations?",
//             answer:
//               "Yes. You can update your areas of operation from your driver profile settings.",
//           },
//           {
//             question: "Can I respond to reviews?",
//             answer:
//               "Where supported, drivers can respond to reviews to clarify issues or thank customers.",
//           },
//         ],
//       },
//       {
//         title: "Subscription & Payment Questions",
//         items: [
//           {
//             question: "What subscription plans are available?",
//             answer:
//               "Monthly, quarterly, and yearly plans may be available. Exact pricing can be found in your account.",
//           },
//         ],
//       },

//       // ✅ New groups from your screenshot
//       {
//         title: "Reviews & Trust",
//         items: [
//           {
//             question: "Can fake reviews be removed?",
//             answer:
//               "Yes. Reviews that violate policy (fake, abusive, misleading) may be removed after moderation.",
//           },
//           {
//             question: "Can a provider report a review?",
//             answer:
//               "Yes. Providers can report reviews they believe are inaccurate or violate policy.",
//           },
//           {
//             question: "Does verification mean guaranteed service quality?",
//             answer:
//               "No. Verification does not guarantee service quality or endorsement.",
//           },
//         ],
//       },
//       {
//         title: "Admin & Platform",
//         items: [
//           {
//             question: "Who manages the platform?",
//             answer:
//               "Loadrivo administrators manage the platform, moderation, and policy enforcement.",
//           },
//           {
//             question: "Can my account be suspended?",
//             answer:
//               "Yes. Accounts may be suspended for violations, false information, or abuse of the platform.",
//           },
//         ],
//       },
//       {
//         title: "Technical & Support",
//         items: [
//           {
//             question: "I forgot my password. What should I do?",
//             answer:
//               "Use the “Forgot Password” option on the login screen to reset your password.",
//           },
//           {
//             question: "How do I contact support?",
//             answer:
//               "Use the contact details on this page or email the support team for help.",
//           },
//           {
//             question: "Is my data safe?",
//             answer:
//               "We take privacy seriously and handle personal data according to our privacy policy.",
//           },
//         ],
//       },
//     ],
//     [],
//   );

//   const [openKey, setOpenKey] = useState<string | null>(null);

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />

//       {/* Top Banner */}
//       <section className="bg-[#01172C] text-white pt-28 pb-14">
//         <div className="max-w-7xl mx-auto px-6">
//           <h1 className="text-center text-base md:text-lg font-extrabold tracking-wide">
//             FAQ | CONTACT
//           </h1>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="px-6 py-10">
//         <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_320px] gap-10 items-start">
//           {/* Left: FAQ Box */}
//           <div className="bg-white border border-gray-200 rounded-md p-6 md:p-7">
//             <h2 className="text-xs font-semibold text-[#0F172A] mb-5">
//               Frequently Asked Questions (FAQ)
//             </h2>

//             <div className="space-y-7">
//               {faqGroups.map((group) => (
//                 <div key={group.title}>
//                   {group.title !== "Frequently Asked Questions (FAQ)" && (
//                     <h3 className="text-[11px] font-semibold text-[#0F172A] mb-2">
//                       {group.title}
//                     </h3>
//                   )}

//                   <div className="space-y-2">
//                     {group.items.map((item) => {
//                       const key = `${group.title}__${item.question}`;
//                       const isOpen = openKey === key;

//                       return (
//                         <AccordionRow
//                           key={key}
//                           question={item.question}
//                           answer={item.answer}
//                           isOpen={isOpen}
//                           onToggle={() => setOpenKey(isOpen ? null : key)}
//                         />
//                       );
//                     })}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right: Contact Card */}
//           <aside className="bg-white border border-gray-200 rounded-md p-6">
//             <div className="flex flex-col items-center text-center">
//               <div className="w-12 h-12 rounded-full bg-[#EAF3FF] flex items-center justify-center">
//                 <HelpCircle className="w-6 h-6 text-[#2F80ED]" />
//               </div>

//               <h3 className="mt-4 font-extrabold text-[#0F172A] text-sm">
//                 Can’t find an answer?
//               </h3>
//               <p className="mt-2 text-xs text-gray-600">
//                 Contact our support team for help
//               </p>
//             </div>

//             <div className="mt-6 space-y-3 text-sm">
//               <div className="flex items-center gap-3 text-gray-700">
//                 <Phone className="w-4 h-4" />
//                 <span className="text-sm">+23480098778</span>
//               </div>
//               <div className="flex items-center gap-3 text-gray-700">
//                 <Mail className="w-4 h-4" />
//                 <span className="text-sm">Logistic@gmail.com</span>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </section>

//       {/* Footer (like your screenshot) */}
//       <footer className="bg-[#06263A] text-white py-10 px-6">
//         <div className="max-w-7xl mx-auto text-center space-y-5">
//           <div className="flex justify-center gap-4 text-[11px] text-white/90">
//             <Link to="/faq" className="hover:opacity-80">
//               Contact
//             </Link>
//             <span className="opacity-60">|</span>
//             <Link to="/faq" className="hover:opacity-80">
//               FAQ
//             </Link>
//             <span className="opacity-60">|</span>
//             <Link to="/terms" className="hover:opacity-80">
//               Terms and Conditions
//             </Link>
//             <span className="opacity-60">|</span>
//           </div>

//           <div className="flex justify-center gap-5 text-white/90">
//             <Instagram className="w-4 h-4 hover:opacity-80 cursor-pointer" />
//             <Twitter className="w-4 h-4 hover:opacity-80 cursor-pointer" />
//             <Facebook className="w-4 h-4 hover:opacity-80 cursor-pointer" />
//             <Linkedin className="w-4 h-4 hover:opacity-80 cursor-pointer" />
//           </div>

//           <p className="text-[10px] text-white/70">
//             © 2022 Loadrivo. All right reserved
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }
