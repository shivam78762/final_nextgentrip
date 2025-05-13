import { useTranslations } from "next-intl";
import React from "react";

const Subscribe = () => {
  const t=useTranslations("footer")
  return (
    <>
      <section className="container mx-auto mb-15 py-10 px-5 lg:px-20 animate__animated animate__fadeIn custom-color">
        <div className="block md:flex   items-center justify-center gap-10">
          <div className="w-full lg:w-1/3">
            <h2 className="text-[21px] lg:text-2xl  text-white font-bold mb-5">
              {t("subscribe")}
            </h2>

            <form className="mx-auto  my-5 lg:my-0  flex justify-center  rounded-full relative z-20 ">
              <input
                type="email"
                placeholder="Your email address"
                className="border-0  pl-5 w-full border-gray-300 p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand"
              />
              <button
                type="submit"
                className="primary-col text-white px-10 py-3 lg:py-5 rounded-r-md hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand"
              >
                Subscribe
              </button>
            </form>
          </div>

          <p className="mt-auto text-[21px] lg:text-2xl w-full lg:w-2/3 text-justify text-white font-semibold">
           {t("sub2")}
          
          </p>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
