import Image from "next/image";
import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <section className="bg-gray-50 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="flex justify-center">
              <span className="flex px-4 py-2 font-semibold rounded-full bg-[#3b82f6] text-white items-center justify-center">
                <img className="mr-2.5" src="/images/earth.svg" alt="NextGenTrip" />
                AGREEMENT
              </span>
            </div>
            <h2 className="mt-4 mb-4 text-4xl font-bold">Privacy Policy</h2>
            <p className="text-xl font-medium text-neutral-1000 fadeInUp" style={{ visibility: "visible" }}>
              Last update: Mar 17, 2024
            </p>
          </div>
          
          <div className="flex justify-center my-5">
            <img className="mr-2.5" src="/images/banner-privacy.webp" alt="NextGenTrip" />
          </div>
          
          <div className="mx-auto mt-10 text-justify max-w-6xl">
            <div className="box-detail-info">
              <p>
                NextGenTrip values your privacy and is committed to protecting your personal information. 
                This Privacy Policy applies to all users who interact with our services through our website, 
                mobile app, or offline channels (collectively referred to as "Sales Channels"). By accessing 
                our services, you agree to the terms of this policy. If you disagree, please refrain from using 
                our Sales Channels.
              </p>
              
              <h3 className="mt-6 text-2xl font-semibold">Information Collection</h3>
              <p>
                We collect personal details including name, contact information, 
                payment details, and travel history when you use our services. This may include passport details, PAN 
                information, and vaccination status when required for booking purposes. Names, addresses, phone numbers, 
                and age details are shared with related service providers, including airlines, hotels, or bus services 
                to facilitate reservations.
              </p>
              
              <h3 className="mt-6 text-2xl font-semibold">Usage of Information</h3>
              <p>
                Your information is used to facilitate your bookings, enhance our services, process payments, 
                and comply with legal obligations. We use mobile numbers and emails to send promotional offers, 
                including discounts and lucky draws. If you prefer not to receive these offers, you can opt-out anytime.
              </p>
              
              <h3 className="mt-6 text-2xl font-semibold">Membership & Registration</h3>
              <p>
                When you register as a member, we collect details such as your name, address, email, and password. 
                This enables:
                <ul className="list-disc pl-5 mt-2">
                  <li>User recognition</li>
                  <li>Travel reservations</li>
                  <li>Customer service assistance</li>
                  <li>Confirmation of new member registration</li>
                  <li>Improvement of our services</li>
                </ul>
              </p>
              
              <h3 className="mt-6 text-2xl font-semibold">Surveys</h3>
              <p>
                We value customer feedback and conduct surveys to enhance our services. Participation is optional, 
                and responses remain anonymous unless otherwise stated.
              </p>
              
              <h3 className="mt-6 text-2xl font-semibold">Cookies & Tracking</h3>
              <p>
                We use cookies to personalize user experiences and advertisements. These cookies store information 
                to allow seamless logins and provide relevant offers. Users can control cookie settings via their browser.
              </p>
              
              <h3 className="mt-6 text-2xl font-semibold">Automatic Logging</h3>
              <p>
                Our systems log session data such as IP addresses, operating systems, and browsing activities to 
                enhance user experience and identify potential issues.
              </p>
              
              <h3 className="mt-6 text-2xl font-semibold">User-Generated Content</h3>
              <p>
                Users can post reviews, ratings, and questions about our services. These contributions may be visible 
                to other users across various platforms.
              </p>
              
              <h3 className="mt-6 text-2xl font-semibold">Data Sharing & Disclosure</h3>
              <p>
                We share your information only with service providers (e.g., airlines, hotels) as needed to fulfill your bookings. 
                We do not sell or rent personal data but may share details with business partners for promotional purposes. 
                Additionally, we may share non-identifiable aggregate data for research and analysis.
              </p>
              
              <h3 className="mt-6 text-2xl font-semibold">Security & Data Protection</h3>
              <p>
                NextGenTrip ensures that your data is safeguarded with the latest security measures. We do not store sensitive 
                financial details like credit card information.
              </p>
              
              <h6 className="mt-6 text-lg font-semibold">Thank you for choosing NextGenTrip!</h6>
              <p>
                By using our services, you acknowledge and consent to our Privacy Policy and its terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
