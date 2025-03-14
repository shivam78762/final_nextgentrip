import { useTranslations } from "next-intl";
import Link from "next/link";

// components/BlogSection.js
const page = () => {
  const t=useTranslations("FreshTravel")
  return (
    <>
      <section className="bg-gray-100 py-10 ">
        <div className="w-full ">
          <div className="text-center mb-0 lg:mb-6">
            <h2 className="text-2xl font-bold text-black _hdrtxt py-0 lg:py-5">
             {t("travelblogs")}
            </h2>
          </div>
          <div className="event-box-main flex flex-wrap   items-center justify-center gap-3">
            <div className="event-box">
              <img src="/images/Routes/new1.webp" />
              <div>
                <h2>
                {t("travelblogdes1")}
                </h2>
                <Link href="/blogView/aboutblog">
                
                  <span>{t("travelblogtitle1")}</span>
                </Link>
              </div>
            </div>
            <div className="event-box">
              <img src="/images/Routes/new2.webp" />
              <div>
                <h2>
                {t("travelblogdes2")}
                </h2>
                <Link href="/blogView">   <span>{t("travelblogtitle2")}</span> </Link>
              </div>
            </div>
            <div className="event-box">
              <img src="/images/Routes/new3.webp" />
              <div>
                <h2>
                {t("travelblogdes3")}
                </h2>
                <Link href="/blogView/aboutblog">       <span>{t("travelblogtitle3")}</span> </Link>
              </div>
            </div>
            <div className="event-box">
              <img src="/images/Routes/new4.webp" />
              <div>
                <h2>
                  {" "}
                  {t("travelblogdes4")}
                </h2>
                <Link href="/blogView/aboutblog"> <span>{t("travelblogtitle4")}</span></Link> 
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blogView"
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
