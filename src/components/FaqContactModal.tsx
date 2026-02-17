import { useEffect, useMemo, useState } from "react";
import {
  X,
  HelpCircle,
  Phone,
  Mail,
  Plus,
  Minus,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";

type FaqContactModalProps = {
  open: boolean;
  onClose: () => void;
};

type FAQItem = {
  question: string;
  answer: string;
};

type FAQGroup = {
  title: string;
  items: FAQItem[];
};

function AccordionRow({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-200 bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 px-3 py-2.5 text-left"
      >
        <span className="text-[11px] md:text-xs text-[#0F172A]">
          {question}
        </span>
        <span className="shrink-0 text-gray-500">
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </span>
      </button>

      {isOpen && (
        <div className="px-3 pb-3 text-[11px] md:text-xs text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FaqContactModal({
  open,
  onClose,
}: FaqContactModalProps) {
  // lock scroll + ESC close
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const faqGroups: FAQGroup[] = useMemo(
    () => [
      {
        title: "Frequently Asked Questions (FAQ)",
        items: [
          {
            question: "What is Nigeria Logistics Finder?",
            answer:
              "Loadrivo is a platform that helps users discover logistics drivers, compare options, and connect for deliveries.",
          },
          {
            question: "Who can use this platform?",
            answer:
              "Customers and independent logistics drivers can use the platform.",
          },
        ],
      },
      {
        title: "Customer Questions",
        items: [
          {
            question: "Does Logistics Finder provide logistics services?",
            answer:
              "No. Loadrivo is a listing and review platform and does not directly provide logistics services.",
          },
          {
            question: "How do I register as a customer?",
            answer:
              "You can create an account by providing your name, email, and phone number during onboarding.",
          },
          {
            question: "Can I book a logistics service on the platform?",
            answer:
              "You can connect with verified drivers and arrange delivery services directly with them.",
          },
          {
            question: "Can I leave a review?",
            answer:
              "Yes. Customers can submit reviews based on genuine experiences.",
          },
          {
            question: "Can I edit or delete my review?",
            answer:
              "Depending on platform policy, you may be able to update or remove your review. If not, contact support.",
          },
          {
            question: "Are reviews verified?",
            answer:
              "We may moderate content, but verification does not guarantee service quality or endorsement.",
          },
        ],
      },
      {
        title: "Independent Driver Questions",
        items: [
          {
            question: "How do I register as an independent driver?",
            answer:
              "Drivers can register by providing required details such as profile picture, NIN, plate number, contact details, and areas of operation.",
          },
          {
            question: "Do I need to pay to appear on the platform?",
            answer:
              "Drivers may need to subscribe to a plan or choose commission billing to be discoverable on the platform.",
          },
          {
            question: "What happens if my subscription expires?",
            answer:
              "Your visibility may reduce and your account may be suspended until renewal.",
          },
          {
            question: "Can I change my operating locations?",
            answer:
              "Yes. You can update your areas of operation from your profile settings.",
          },
          {
            question: "Can I respond to reviews?",
            answer:
              "Where supported, drivers can respond to reviews to clarify issues or thank customers.",
          },
        ],
      },
      {
        title: "Subscription & Payment Questions",
        items: [
          {
            question: "What subscription plans are available?",
            answer:
              "Monthly, quarterly, and yearly plans may be available. Exact pricing can be found inside the app or on your account page.",
          },
        ],
      },
      {
        title: "Reviews & Trust",
        items: [
          {
            question: "Can fake reviews be removed?",
            answer:
              "Yes. Reviews that violate policy (fake, abusive, misleading) may be removed after moderation.",
          },
          {
            question: "Can a provider report a review?",
            answer:
              "Yes. Providers can report reviews they believe are inaccurate or violate policy.",
          },
          {
            question: "Does verification mean guaranteed service quality?",
            answer:
              "No. Verification does not guarantee service quality or endorsement.",
          },
        ],
      },
      {
        title: "Admin & Platform",
        items: [
          {
            question: "Who manages the platform?",
            answer:
              "Loadrivo administrators manage the platform and policy enforcement.",
          },
          {
            question: "Can my account be suspended?",
            answer:
              "Yes. Accounts may be suspended for violations, false information, or abuse of the platform.",
          },
        ],
      },
      {
        title: "Technical & Support",
        items: [
          {
            question: "I forgot my password. What should I do?",
            answer:
              "Use the “Forgot Password” option on the login screen to reset your password.",
          },
          {
            question: "How do I contact support?",
            answer:
              "Use the contact details in this modal or email the support team for help.",
          },
          {
            question: "Is my data safe?",
            answer:
              "We take privacy seriously and handle personal data according to our privacy policy.",
          },
        ],
      },
    ],
    [],
  );

  const [openKey, setOpenKey] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close FAQ modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />

      {/* Modal */}
      <div className="absolute inset-0 flex items-start justify-center p-4 sm:p-6">
        <div className="w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl">
          {/* Header */}
          <header className="relative bg-[#06263A] text-white">
            <div className="px-6 py-5">
              <h1 className="text-center font-extrabold tracking-wide">
                FAQ | CONTACT
              </h1>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 transition flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </header>

          {/* Body (scrollable) */}
          <div className="max-h-[75vh] overflow-y-auto bg-white">
            <div className="px-6 py-10">
              <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
                {/* Left: FAQ */}
                <div className="bg-white border border-gray-200 rounded-md p-6 md:p-7">
                  <h2 className="text-xs font-semibold text-[#0F172A] mb-5">
                    Frequently Asked Questions (FAQ)
                  </h2>

                  <div className="space-y-7">
                    {faqGroups.map((group) => (
                      <div key={group.title}>
                        {group.title !== "Frequently Asked Questions (FAQ)" && (
                          <h3 className="text-[11px] font-semibold text-[#0F172A] mb-2">
                            {group.title}
                          </h3>
                        )}

                        <div className="space-y-2">
                          {group.items.map((item) => {
                            const key = `${group.title}__${item.question}`;
                            const isOpen = openKey === key;

                            return (
                              <AccordionRow
                                key={key}
                                question={item.question}
                                answer={item.answer}
                                isOpen={isOpen}
                                onToggle={() => setOpenKey(isOpen ? null : key)}
                              />
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Contact */}
                <aside className="bg-white border border-gray-200 rounded-md p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-[#EAF3FF] flex items-center justify-center">
                      <HelpCircle className="w-6 h-6 text-[#2F80ED]" />
                    </div>

                    <h3 className="mt-4 font-extrabold text-[#0F172A] text-sm">
                      Can’t find an answer?
                    </h3>
                    <p className="mt-2 text-xs text-gray-600">
                      Contact our support team for help
                    </p>
                  </div>

                  <div className="mt-6 space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">+23480098778</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">Logistic@gmail.com</span>
                    </div>
                  </div>
                </aside>
              </div>
            </div>

            {/* Footer (inside modal, like screenshot bottom) */}
            <footer className="bg-[#01172C] text-white py-10 px-6">
              <div className="max-w-7xl mx-auto text-center space-y-5">
                <div className="flex justify-center gap-4 text-[11px] text-white/90">
                  <span className="hover:opacity-80 cursor-pointer">
                    Contact
                  </span>
                  <span className="opacity-60">|</span>
                  <span className="hover:opacity-80 cursor-pointer">FAQ</span>
                  <span className="opacity-60">|</span>
                  <span className="hover:opacity-80 cursor-pointer">
                    Terms and Conditions
                  </span>
                  <span className="opacity-60">|</span>
                </div>

                <div className="flex justify-center gap-5 text-white/90">
                  <Instagram className="w-4 h-4 hover:opacity-80 cursor-pointer" />
                  <Twitter className="w-4 h-4 hover:opacity-80 cursor-pointer" />
                  <Facebook className="w-4 h-4 hover:opacity-80 cursor-pointer" />
                  <Linkedin className="w-4 h-4 hover:opacity-80 cursor-pointer" />
                </div>

                <p className="text-[10px] text-white/70">
                  © 2022 Loadrivo. All right reserved
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
