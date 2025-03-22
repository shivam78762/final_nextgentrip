import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/AllComponent/Navbar";
import Footer from "./Component/Footer";
import Topbar from "./Component/Topbar";
import Providerfile from "./Component/Store/Providerfile";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import { development } from "./Component/common";
import { redirect } from "next/navigation";
import Maintenance from "./Component/AllComponent/Maintenance"

import LayoutCompo from "./LayoutCompo"


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Next Gen Trip",
  description: "Book online Trip",
};

export default async function RootLayout({ children }) {

  const locale = await getLocale();
 

  const messages = await getMessages();

  



  return (
    <html lang={locale} >

<head>
        {/* FontAwesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7F46NND7PG"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7F46NND7PG');
            `,
          }}
        />

        {/* Hotjar Tracking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:5345864,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
        

      
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P6DBCLHP');
            `,
          }}
        />

<script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '905109698255955');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>


     
      <body className={inter.className}>
      <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P6DBCLHP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>


        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=905109698255955&ev=PageView&noscript=1"
          />
        </noscript>

     
     {development !="production"&& <NextIntlClientProvider messages={messages}>
        <Providerfile>
       <LayoutCompo >{children}</LayoutCompo>
        </Providerfile>
      </NextIntlClientProvider>
}
      {
        development=="production" && <Maintenance />
      }
      </body>
      
    </html>
  );
}
