import { useTranslations } from "next-intl";
import Link from "next/link";
import CompoBlog from "../../blog/CompoBlog"
// components/BlogSection.js
const page = () => {
  const t=useTranslations("FreshTravel")
  return (
    <>
      <section className="container mx-auto bg-gray-100 py-10 ">
        <div className="w-full ">
          <div className="text-center mb-0 lg:mb-6">
            <h2 className="text-2xl font-bold text-black _hdrtxt py-0 lg:py-5">
             {t("travelblogs")}
            </h2>
          </div>
          <CompoBlog />


          <div className="text-center mt-16">
            <Link
              href="/blog"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              View All
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default page;
