import { PricingCard } from "./Cards";
import { useState } from "react";

export default function WebPricingBoard() {
  const basicPriceDetails = [
    {

      title: "BASIC",
      title2: "",
      price: "200,000.00",
      point1: "3 pages",
      point2: "Basic design using a template or simple custom design (1 design revision)",
      point3: "Responsive design (mobile-friendly)",
      point4: "Frontend Website Development",
      point5: "Basic SEO practices like meta tags and alt texts for images",
      point6: "Social media integration",
      point7: "Google forms integration",
      point8: "Duration: 3 weeks",
      point9: "Domain (.com/1yr) - 28,000",
      point10: "Hosting - 50,000"
    }
  ];

  const standardPriceDetails = [
    {

      title: "STANDARD",
      price: "400,000.00",
      point1: "Up to 10 pages",
      point2: "Custom design with more detailed UI/UX considerations (1 design revision)",
      point3: "Responsive design (mobile-friendly)",
      point4: "Frontend website development",
      point5: "Basic SEO practices like meta tags and alt texts for images",
      point6: "Integrated basic APIs such as Google Maps for location services",
      point7: "Social media integration",
      point8: "Google forms integration",
      point9: "Duration: 6 weeks",
      point10: "Domain(.com/1yr) - 28,000",
      point11: "Hosting - 50,000"
    },
  ]

  const premiumPriceDetails = [
    {

      title: "PREMIUM",
      price: "6,000,000.00",
      point1: "Up to 50 pages",
      point2: "Full custom design (2 design revisions)",
      point3: "Development (Backend/Frontend)",
      point4: "Basic SEO practices (meta tags and alt texts for images)",
      point5: "Payment Integration",
      point6: "E-commerce functionalities or LMS functionalities",
      point7: "User authentication and account management",
      point8: "Performance optimization and security measures",
      point9: "Testing",
      point10: "Duration: 24 weeks",
      point11: "Domain(.com/1yr) - 28,000",
      point12: "Hosting - 120,000",
      point13: "Advancement SEO optimization starts at N650,000"
    }
  ]

  const [showBasicMore, setShowBasicMore] = useState(false);

  const ReadMore = () => {
    setShowBasicMore(!showBasicMore);
  };


  const [showStandardMore, setshowStandardMore] = useState(false);

  const ReadStandardMore = () => {
    setshowStandardMore(!showStandardMore);
  };

  const [showPremiumMore, setshowPremiumMore] = useState(false);

  const ReadPremiumMore = () => {
    setshowPremiumMore(!showPremiumMore);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:col-span-2 justify-items-center  gap-x-8 gap-y-4 mx-2">
      {basicPriceDetails.map((d, index) => {
        return (
          <div key={index}>
            <PricingCard cardTitle={d.title} cardTitle2={d.title2} price={d.price}>
              <div className="text-black py-4 px-10">
                <div>
                  <ul className="list-disc">
                    <li>{d.point1}</li>
                    <li>{d.point2}</li>
                    <li>{d.point3}</li>
                    <li>{d.point4}</li>
                  </ul>
                </div>
                <a
                  className={`underline py-2 italic text-blue700 cursor-pointer ${showBasicMore ? "hidden" : "block"}`}
                  onClick={ReadMore}
                >
                  {showBasicMore ? "Read less..." : "Read more..."}
                </a>
                <div className={`${showBasicMore ? "block" : "hidden"}`}>
                  <ul className="list-disc">
                    <li>{d.point5}</li>
                    <li>{d.point6}</li>
                    <li>{d.point7}</li>
                    <li className="font-bold">{d.point8}</li>
                    <li className="font-bold">{d.point9}</li>
                    <li className="font-bold">{d.point10}</li>
                  </ul>
                </div>
                <a
                  className={`underline py-2  italic text-blue700 cursor-pointer ${showBasicMore ? "block" : "hidden"}`}
                  onClick={ReadMore}
                >
                  {showBasicMore ? "Read less..." : "Read more..."}
                </a>
              </div>
            </PricingCard>
          </div>
        );
      })}

      {standardPriceDetails.map((d, index) => {
        return (
          <div key={index} >
            <PricingCard cardTitle={d.title} price={d.price}>
              <div className="text-black py-4 px-10">
                <div>
                  <ul className="list-disc">
                    <li>{d.point1}</li>
                    <li>{d.point2}</li>
                    <li>{d.point3}</li>
                    <li>{d.point4}</li>
                  </ul>
                </div>
                <a
                  className={`underline py-2  italic text-blue700 cursor-pointer ${showStandardMore ? "hidden" : "block"}`}
                  onClick={ReadStandardMore}
                >
                  {showStandardMore ? "Read less..." : "Read more..."}
                </a>
                <div className={`${showStandardMore ? "block" : "hidden"}`}>
                  <ul className="list-disc">
                    <li>{d.point5}</li>
                    <li>{d.point6}</li>
                    <li>{d.point7}</li>
                    <li>{d.point8}</li>
                    <li className="font-bold">{d.point9}</li>
                    <li className="font-bold">{d.point10}</li>
                    <li className="font-bold">{d.point11}</li>
                  </ul>
                </div>
                <a
                  className={`underline py-2  italic text-blue700 cursor-pointer ${showStandardMore ? "block" : "hidden"}`}
                  onClick={ReadStandardMore}
                >
                  {showStandardMore ? "Read less..." : "Read more..."}
                </a>
              </div>
            </PricingCard>
          </div>
        );
      })}


      {premiumPriceDetails.map((d, index) => {
        return (
          <div key={index}>
            <PricingCard cardTitle={d.title} price={d.price}>
              <div className="text-black py-4 px-10">
                <div>
                  <ul className="list-disc">
                    <li>{d.point1}</li>
                    <li>{d.point2}</li>
                    <li>{d.point3}</li>
                    <li>{d.point4}</li>
                  </ul>
                </div>
                <a
                  className={`underline py-2  italic text-blue700 cursor-pointer ${showPremiumMore ? "hidden" : "block"}`}
                  onClick={ReadPremiumMore}
                >
                  {showPremiumMore ? "Read less..." : "Read more..."}
                </a>
                <div className={`${showPremiumMore ? "block" : "hidden"}`}>
                  <ul className="list-disc">
                    <li>{d.point5}</li>
                    <li>{d.point6}</li>
                    <li>{d.point7}</li>
                    <li>{d.point8}</li>
                    <li>{d.point9}</li>
                    <li className="font-bold">{d.point10}</li>
                    <li className="font-bold">{d.point11}</li>
                    <li className="font-bold">{d.point12}</li>
                    <li className="font-bold">{d.point13}</li>
                  </ul>
                </div>
                <a
                  className={`underline py-2  italic text-blue700 cursor-pointer ${showPremiumMore ? "block" : "hidden"}`}
                  onClick={ReadPremiumMore}
                >
                  {showPremiumMore ? "Read less..." : "Read more..."}
                </a>
              </div>
            </PricingCard>
          </div>
        );
      })}
    </div>
  );
}
