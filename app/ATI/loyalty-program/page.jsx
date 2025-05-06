import React from 'react'
import Link from 'next/link';
const page = () => {
  const loyaltyProgramDetails = [
    {
      title: "Get Rewards for Each Booking",
      description:
        "With every trip, you are getting closer to terrific rewards with NextGen. With flight reservations, accommodation bookings, vacation packages, and exclusive experiences—everything earns you points. The more you travel, the more you will earn.",
    },
    {
      title: "Exclusive Member Benefits",
      description:
        "As a member of our loyalty program, you’ll unlock a range of premium benefits that elevate your travel experience. Enjoy priority customer support, special discounts, exclusive access to private tours and experiences, and even complimentary upgrades at select hotels.",
    },
    {
      title: "Targeted Promotions and Personalized Recommendations",
      description:
        "Your loyalty matters to us, and that's the reason we take that little extra step to make your experience with NextGen as personal and rewarding as possible. Once you become a loyalty member, offers and suggestions tailored to your preferences will be available, making each trip unique and more enjoyable.",
    },
    {
      title: "Redeem Your Points for Awesome Prizes",
      description:
        "Under our Loyalty Program, your points can be worth as much as your journey. Use them to purchase future travel, exclusive upgrades, access to VIP lounges, special experiences like private yacht rentals, or even gift cards for your favorite brands. The possibilities are boundless.",
    },
    {
      title: "VIP Customer Care",
      description:
        "You will be assigned a personal travel concierge to ensure your travel plans are easy, stress-free, and perfectly suited to your needs. Our team is available for special requests, last-minute changes, or any other arrangements you need, 24/7.",
    },
    {
      title: "Exclusives and Debits Offer",
      description:
        "As a member, you'll have access to special promotions, limited-time offers, and seasonal discounts available only to loyal members. From discounted rates on holiday packages to exclusive flight deals, members get early access to offers not available to the public.",
    },
  ];

  const howItWorksSteps = [
    {
      title: "Registration and End Earned",
      description:
        "Join our NextGen Loyalty Program, which is absolutely free and easy to join. Register on our website and start earning points at every trip. Be it flight bookings, hotel stays, or any package travel, the points will keep accumulating.",
    },
    {
      title: "Book Your Next Holiday",
      description:
        "Enjoy a variety of exceptional offers and promotions, exclusive to loyalty members, with your membership. Book your next adventure with us, and your points will grow.",
    },
    {
      title: "Collect and Track Points",
      description:
        "Points are converted once you book, and you can track them quite easily from your account on NextGen. So keep a closer eye on your balance—you’ll know when you’ve managed to accrue enough for another reward!",
    },
    {
      title: "Redeem and Enjoy Your Rewards",
      description:
        "Just earning miles will bring cash back for you. Award of additional nights in a stunning hotel, first-class upgrade, or VIP access to privileged events—everything comes true from your miles. The more you travel, the more you can!",
    },
  ];

  const loyaltyBenefits = [
    {
      title: "Unlocks an entire world of rewards with NextGen Loyalty",
      description:
        "Double points for unique experience. Be a loyalty member and get double points on specific activities and experiences - exclusive tours, dining experiences, adventure packages - so that every time you travel, your travel is always rewarded.",
    },
    {
      title: "Privilege lounge access",
      description:
        "With free, complimentary premium access to worldwide airport lounges, you can start your journey from anywhere in comfort.",
    },
    {
      title: "Free room upgrade",
      description:
        "Stay in style with a room upgrade at the finest hotels participating, from 5-star resorts to boutique hotels. Whatever the style of accommodation, enjoy a more enjoyable stay amidst this luxury and fantastic views.",
    },
    {
      title: "Early Inroads to Sales and Promotions",
      description:
        "It puts loyalty members at its top priority so they never miss any exclusive sales - either time-limited promotions or last-minute deals.",
    },
    {
      title: "Special Deals for Friends and Family",
      description:
        "Share the love - transfer your loyalty points to family or friends or bring them along for exclusive travel offers. Make each trip more enjoyable by sharing the experience.",
    },
  ];

  const membershipLevels = [
    {
      title: "Explorer Level",
      pointsPerDollar: "1 point for every dollar spent",
      benefits: [
        "Access to core advantages such as discounts, member-only offers, and infrequent promotions.",
        "A welcome gift during the first booking.",
      ],
    },
    {
      title: "Adventurer Level",
      pointsPerDollar: "1.5 points for every dollar spent",
      benefits: [
        "Priority customer support and special promotions.",
        "Free entry to airport lounge for one person accompanying each journey.",
        "Free space upgrade on specific reservations.",
      ],
    },
    {
      title: "Globetrotter Level",
      pointsPerDollar: "2 points for every dollar spent",
      benefits: [
        "Special tours and experiences have priority booking.",
        "Free lounge access for two.",
        "Bonus points for specific adventures, upgrades, and premium services.",
        "Exclusive deals and personalized travel concierge.",
      ],
    },
  ];

  const apkaTripInfo = {
    loyaltyProgramCTA: "Join the NextGen Loyalty Program today",
    introduction: "Are you ready to turn your passion for travel into fantastic rewards? Whether you're an avid traveler or just starting out, the Loyalty Program from NextGen offers you unbeatable value and unmatched benefits.",
    ctaButtons: [
      { text: "Start Earning, Start Exploring", link: "#" },
      { text: "Sign up now", link: "#" },
      { text: "Learn more about Rewards", link: "#" },
      { text: "Contact us", link: "#" }
    ],
    aboutTitle: "About NextGen",
    aboutText: "NextGen is one of the world's most trusted travel agencies, believing every trip should be memorable, smooth, and rewarding. Our Loyalty Program is our endeavour to make your travel experience as unique as possible with exclusive rewards and personalized services that help you find and explore the world and enjoy great benefits along the way.",
    companyDetails: {
      // address: "Sector 48",
      // city: "Chandigarh, India",
      telephone: "+(91) 9877579319",
  email: "info@nextgentrip.com"
    },
    socialLinks: [
      { platform: "Instagram", link: "https://www.instagram.com/nextgentrip/profilecard/?igsh=MTdyMjlyb293aTB0MA%3D%3D" },
      { platform: "Facebook", link: "https://www.facebook.com/share/1AA9dPezvA/?mibextid=wwXIfr" },
      { platform: "Twitter", link: "https://x.com/NextGenTrip?t=d4oQeyJHEQldf9lsP2EgnQ&s=08" },
      { platform: "youtube", link: "https://www.youtube.com/@NextGenTrip-g5t" }
    ]
  };
  
  return (
    <>
     <section className="bg-gradient-to-tr py-5 lg:py-10 from-[#1c265e] via-[#062c61] to-[#031932] relative bg-no-repeat bg-cover min-h-[70vh] space-y-5 lg:space-y-20 flex flex-col justify-center items-center px-5 text-white">
  <h5 className="text-2xl pt-5 md:text-3xl lg:text-4xl text-white text-center font-bold">
    Welcome to Exclusive{" "}
    <span className="text-green-600 lg:border-b-4 lg:border-green-800 border-dotted lg:pb-2">
      Loyalty{" "}
    </span>{" "}
    Program of NextGen.
  </h5>

  <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-5 md:px-16 lg:px-20 space-y-5 md:space-y-0">
    <div className="space-y-5 lg:w-[50%] text-center md:text-left">
      <h5 className="text-xl lg:text-3xl font-bold tracking-wide">
        Travel More Earn More <br /> and Enjoy Superior Rewards
      </h5>
      <p className="text-base lg:text-lg text-justify text-[#bbbbbb] ">
        In other words, loyalty should be repaid. Whether you're a frequent
        traveler or a beginner venturing into this amazing world, our Loyalty
        Program is here to make your travels better and more rewarding every
        step with NextGen. Book with us and unlock a world of privilege, with
        exclusive rewards and personalized services, making each journey even
        more memorable. Join the NextGen Loyalty Program today and start earning
        all those points, perks, and privileges that will make your travel dreams
        come true.
      </p>
    </div>

    <div className="md:w-[50%] hidden lg:block">
      <img
        src="/images/page2/Loyalty1.jpg"
        alt="Loyalty Program"
        className="rounded-lg w-full object-cover h-full"
      />
    </div>
  </div>
</section>

      <div className="space-y-8 lg:space-y-12 mt-10">
        <section className="px-5 md:px-16 lg:px-20  ">
          <div className="bg-[#F1F5F9] px-5 py-6 rounded-lg md:px-10 md:py-12 space-y-6">
            <h6 className="text-lg md:text-2xl font-semibold text-gray-700">
              Why Join the NextGen Loyalty Program?
            </h6>
            {loyaltyProgramDetails.map((benefit, index) => (
              <div key={index} className="space-y-4">
                <h5 className="text-lg md:text-xl font-semibold text-gray-800">
                  {benefit.title}
                </h5>
                <p className="text-base text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 md:px-16 lg:px-20  ">
          <div className="bg-[#F1F5F9] px-5 py-6 md:px-10 md:py-12 space-y-6 rounded-lg">
            <h6 className="text-lg md:text-2xl font-semibold text-gray-700">
              How It Works: Simple, Transparent, and Rewarding
            </h6>
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="space-y-4">
                <h5 className="text-lg md:text-xl font-semibold text-gray-800">
                  {step.title}
                </h5>
                <p className="text-base text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 md:px-16 lg:px-20  ">
          <div className="bg-[#F1F5F9] px-5 py-6 md:px-10 md:py-12 space-y-6 rounded-lg">
            <h6 className="text-lg md:text-2xl font-semibold text-gray-700">
              Exclusive Loyalty Program Benefits
            </h6>
            {loyaltyBenefits.map((benefit, index) => (
              <div key={index} className="space-y-4">
                <h5 className="text-lg md:text-xl font-semibold text-gray-800">
                  {benefit.title}
                </h5>
                <p className="text-base text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>


        <section className="px-5 md:px-16 lg:px-20 ">
  <div className="bg-[#F1F5F9] px-5 py-8 md:px-10 md:py-12 space-y-6 rounded-lg">
    <h6 className="text-lg md:text-2xl font-semibold text-gray-700">Levels of Membership: The More You Travel, the More You Benefit</h6>
    
    {membershipLevels.map((level, index) => (
      <div key={index} className="space-y-4">
        <h5 className="text-lg md:text-xl font-semibold text-gray-800">{level.title}</h5>
        <p className="text-base text-gray-600">{level.pointsPerDollar}</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          {level.benefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>


<section className="px-5 md:px-16 lg:px-20 py-10">
  <div className="bg-[#F1F5F9] px-5 py-6 md:px-10 md:py-12 space-y-8 rounded-lg">
    {/* Loyalty Program CTA */}
    <div className="space-y-4">
      <h6 className="text-lg md:text-2xl font-semibold">{apkaTripInfo.loyaltyProgramCTA}</h6>
      <p>{apkaTripInfo.introduction}</p>
      {/* <div className="md:space-x-4 space-y-5  ">
        {apkaTripInfo.ctaButtons.map((button, index) => (
          <Link key={index} href={button.link} className="inline-block w-full md:w-auto px-6 py-2 text-white bg-blue-600 rounded-md">{button.text}</Link>
        ))}
      </div> */}
    </div>

    {/* About NextGen */}
    <div className="space-y-4">
      <h6 className="text-lg md:text-2xl font-semibold">{apkaTripInfo.aboutTitle}</h6>
      <p>{apkaTripInfo.aboutText}</p>
    </div>

    {/* Company Details */}
    <div className="space-y-3">
      <p className="font-semibold">Contect:</p>
      <p>{apkaTripInfo.companyDetails.address}</p>
      <p>{apkaTripInfo.companyDetails.city}</p>
      <p>{apkaTripInfo.companyDetails.telephone}</p>
      <p>{apkaTripInfo.companyDetails.email}</p>
    </div>

    {/* Social Media Links */}
    <div className="space-x-4">
      {apkaTripInfo.socialLinks.map((social, index) => (
        <a key={index} href={social.link} className="text-blue-600 hover:underline">{social.platform}</a>
      ))}
    </div>
  </div>
</section>


      </div>
    </>
  );
}

export default page
