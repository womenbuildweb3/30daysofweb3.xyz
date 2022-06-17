import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    id: 1,
    question: "What is the time commitment for this curriculum?",
    answer:
      "This course is fully-online and asynchrnous. You may participate at any pace and time commitment, but it was designed to take no more than 45mins per day.",
  },
  {
    id: 4,
    question: "What will I learn in this curriculum?",
    answer:
      "You'll learn how to build a dapp, end-to-end. You'll write the smart contract, the front end, and everything in between. Check out the home page for a more detailed overview of the content.",
  },
  {
    id: 5,
    question: "Can I participate if I'm a beginner?",
    answer:
      "Yes! This course is less focused on programming specifics and fundamentals, and more focused on helping developers build a mental model and an architectural reference for building a dapp. We will give you the code for all of the sections, and although it will be helpful, it is not required to have deep programming expereince.",
  },
  {
    id: 2,
    question: "How can I get support if I get stuck?",
    answer: "Our team will be available to answer questions via Discord.",
  },
  {
    id: 3,
    question: "Will the workshops be recorded?",
    answer:
      "Yes. Workshops will be recorded and posted on our YouTube channel and linked on this website.",
  },
  {
    id: 6,
    question: "What comes next?",
    answer:
      "Women and nonbinary people who successfuly complete the curriculum and meet a standard of completion will be invited to join the DAO and participate in the second phase of this program. In this phase, builders can request money from our treasury to build *anything web3*.",
  },
  {
    id: 7,
    question: "Can I participate if I'm a man?",
    answer:
      "Yes! 30 Days of Web3 is a public good that is available to anyone, anytime. The content will be open-sourced, allowing any other groups to fork it and customize their curriculum.",
  },
  {
    id: 8,
    question: "Why do I have to give my wallet address?",
    answer:
      "We'll be awarding on-chain, proof of knowlegde tokens and will need your wallet address to send them to you.",
  },
  // More items...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FAQSection() {
  return (
    <div id="faqs" className="py-12 sm:py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          FAQs
        </h2>
        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.id} className="pt-6">
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <ChevronDownIcon
                          className={classNames(
                            open ? "-rotate-180" : "rotate-0",
                            "h-6 w-6 transform"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
}
