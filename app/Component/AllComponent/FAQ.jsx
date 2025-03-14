// components/FAQSection.js

import { useTranslations } from 'next-intl';
import { use, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


const FAQSection = () => {
  const t=useTranslations("flight")
  const faqs = [
    { question: t("questions1"), answer: t("ans1") },
    { question: t("questions2"), answer: t("ans2")  },
    { question:t("questions3") , answer: t("ans3")  },
    { question: t("questions4") , answer: t("ans4")  },
    { question:t("questions5") , answer: t("ans5")  },
    // Add more FAQs as needed
  ];
  
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="block lg:flex gap-12 items-center px-5 lg:px-20">
    <div className="flex-1 max-w-full lg:max-w-6xl py-10">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b py-3 border-gray-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full py-2 text-left flex items-center justify-between focus:outline-none focus:ring-0 rounded-t-lg"
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {openIndex === index ? (
                <FaChevronUp className="h-3 w-3 text-gray-500" />
              ) : (
                <FaChevronDown className="h-3 w-3 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className=" py-2 bg-white ">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
      <img src="/images/faq.webp" alt="" className= "flex-1 w-full lg:w-1/2 h-auto" />
    </div>
  );
};

export default FAQSection;
