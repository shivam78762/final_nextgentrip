import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Agreement between the Clients & NextGenTrip</h2>
        <p>
          By accessing, using, browsing, or making a booking through NextGenTrip, users agree to the terms and conditions
          mentioned below, including any supplementary guidelines and future modifications.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Prices on the Website</h2>
        <p>
          The prices listed on NextGenTrip include accommodation charges, taxes (unless specified otherwise), and in special cases,
          some meals. It does not include personal expenses or additional charges like telephone calls, minibar services, etc.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Payment Modes & Policies</h2>
        <ul className="list-disc pl-5">
          <li>Credit/Debit Cards (Visa, MasterCard, Amex, Maestro, RuPay)</li>
          <li>Net Banking (All Major Banks Supported)</li>
          <li>Wallet (MobKwik, PhonePe, AmazonPay & Others)</li>
          <li>UPI (GooglePay, Paytm, etc.)</li>
          <li>EMI (HSBC, RBL, ICICI, and Other banks)</li>
          <li>PayPal</li>
          <li>ePayLater - Travel Now, Pay Later</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Rules of Service</h2>
        <p>
          Each product and service offered on NextGenTrip is governed by the rules and regulations of the respective service provider.
          Please check their rules before making a booking.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Visa Guidelines</h2>
        <p>
          Ensure you have the required visa for the respective country you are visiting or transiting through. NextGenTrip is not responsible for
          visa denials and does not provide refunds in such cases.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Transmitted Material</h2>
        <p>
          Internet communications cannot be entirely private or secure. Any message sent to this site can potentially be intercepted.
          Credit card transactions are encrypted for security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Copyright & Trademark</h2>
        <p>
          The content displayed on NextGenTrip is the property of the website. Unauthorized use of trademarks, products, or services
          is strictly prohibited and may lead to legal action.
        </p>
      </section>

      <div className="border-t pt-4 mt-6 text-gray-600 text-sm">
        <p>Last updated: February 2025</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
