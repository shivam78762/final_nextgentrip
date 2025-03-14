"use client";
import { useTranslations } from "next-intl";
import React from "react";



const Book = () => {
  const t=useTranslations("Bookwithus")
  const features = [
    {
      title: t("title1"),
      description:
        t("des1"),
      icon: "✈️", 
      count: "1"
    },
    {
      title: t("title2"),
      description:
      t("des2"),
      icon: "💰", 
      count: "2"
    },
    {
      title:t("title3"),
      description:
      t("des3"),
      icon: "🔥", 
      count: "3"
    },
    {
      title: t("title4"),
      description:
      t("des4"),
      icon: "📞", 
      count: "4"
    },
  ];
  return (
    <>
      <div className="py-5 lg:py-12 bg-white mt-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-lg md:text-xl lg:text-3xl font-bold text-gray-900 flex justify-center items-center gap-2 mb-10">
         {t("bookwith")}
           
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 border border-blue-200 text-center card-hero"
              ><span>{feature.count}</span>
                <div className="text-4xl mt-7 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section>
        <div className="mt-5 px-5 md:px-10 lg:px-40 text-center bg-gray-100">
          <div className="relative text-lg md:text-xl lg:text-3xl font-bold text-gray-900 flex justify-center items-center gap-2 mb-10 pt-[50px]">
            {t("packages")}
          </div>
          <p className="pb-2 text-justify leading-8">
          {t("packageans")}
          </p>
        </div>
      </section>
    </>
  );
};

export default Book;
