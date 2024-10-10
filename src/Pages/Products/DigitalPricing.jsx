import { useState } from "react";
import { PricingCard } from "./Cards";


export default function DigitalPricingBoard() {
  const basicPriceDetails = [
    {

      title: "BASIC",
      title2: "(SOCIAL MEDIA MARKETING)",
      price: "500,000.00/month",
      point1: "Setting up social media account",
      point2: "Optimization of social media account",
      point3: "Setting up sponsored ads campaign (Facebook, IG and Google)",
      point4: "Organic Campaigns",
      point5: "Managing Landing Pages",
      point6: "Setting up content calendar",
      point7: "Assets creation"
    }
  ];

  const standardPriceDetails = [
    {
      title: "STANDARD",
      title2: "",
      price: "800,000.00/month",
      point1: "Setting up social media account",
      point2: "Optimization of social media account",
      point3: "Setting up sponsored ads campaign (Facebook, IG and Google)",
      point4: "Organic Campaigns",
      point5: "Managing Landing Pages",
      point6: "Setting up content calendar",
      point7: "Assets creation",
      point8: "Managing business pages and account",
      point9: "Current market research",
      point10: "Paid ads optimization"
    },
  ]

  const premiumPriceDetails = [
    {

      title: "ADVERTISEMENT",
      price: "500,000.00",
      point1: "Technology Consulting",
      point2: "Website Maintenance",
      point3: "Technical Support",
      point4: "Data Backup",
      point5: "Rporting",
      point6: "Training and Workshops"
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

  // const [showPremiumMore, setshowPremiumMore] = useState(false);

  // const ReadPremiumMore = () => {
  //   setshowPremiumMore(!showPremiumMore);
  // };


  return (


    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-4 mx-2 ">
      {basicPriceDetails.map((d, index) => {
        return (
          <div key={index} >
            <PricingCard cardTitle={d.title} cardTitle2={d.title2} price={d.price}>
              <div className="text-black py-4 px-10">
                <div>
                  <ul className="list-disc">
                    <li>{d.point1}</li>
                    <li>{d.point2}</li>
                    <li>{d.point3}</li>
                  </ul>
                </div>
                <a
                  className={`underline py-2  italic text-blue700 cursor-pointer ${showBasicMore ? "hidden" : "block"}`}
                  onClick={ReadMore}
                >
                  {showBasicMore ? "Read less..." : "Read more..."}
                </a>
                <div className={`${showBasicMore ? "block" : "hidden"}`}>
                  <ul className="list-disc">
                  <li>{d.point4}</li>
                    <li>{d.point5}</li>
                    <li>{d.point6}</li>
                    <li>{d.point7}</li>
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
          <div key={index}>
            <PricingCard cardTitle={d.title} price={d.price}>
              <div className="text-black py-4 px-10">
                <div>
                  <ul className="list-disc">
                    <li>{d.point1}</li>
                    <li>{d.point2}</li>
                    <li>{d.point3}</li>
                    
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
                  <li>{d.point4}</li>
                    <li>{d.point5}</li>
                    <li>{d.point6}</li>
                    <li>{d.point7}</li>
                    <li>{d.point8}</li>
                    <li>{d.point9}</li>
                    <li>{d.point10}</li>
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
                    <li>{d.point5}</li>
                    <li>{d.point6}</li>
                  </ul>
                </div>
                {/* <a
                  className={`underline py-2  italic text-blue700 cursor-pointer ${showPremiumMore ? "hidden" : "block"}`}
                  onClick={ReadPremiumMore}
                >
                  {showPremiumMore ? "Read less..." : "Read more..."}
                </a>
                <div className={`${showPremiumMore ? "block" : "hidden"}`}>
                  <ul className="list-disc">
                   
                  </ul>
                </div>
                <a
                  className={`underline py-2  italic text-blue700 cursor-pointer ${showPremiumMore ? "block" : "hidden"}`}
                  onClick={ReadPremiumMore}
                >
                  {showPremiumMore ? "Read less..." : "Read more..."}
                </a> */}
              </div>
            </PricingCard>
          </div>
        );
      })}
    </div>
  );
}
