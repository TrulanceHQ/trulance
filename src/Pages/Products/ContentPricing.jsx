import { PricingCard } from "./Cards";
import { useState } from "react";

export default function ContentPricingBoard() {
  const basicPriceDetails = [
    {
      title: "LITE",
      price: "15,000.00",
      subhead1: "Video Editing:",
      point1: "Simple cuts, transitions, and basic colour correction",
      point2: "Basic audio editing",
      point3: "Intro/Outro (graphic text, basic animation)",
      point4: "Up to 2 revisions",
      subhead2: "Graphic Design:",
      point5: "Basic social media post design",
      point6: "Simple graphic overlays for video",
      point7: "Basic flyer or thumbnail design",
      point8: "Up to 2 revisions",
      subhead3: "Pricing Structure:",
      point9:
        "Short videos (under 2 mins) + 1-2 graphic designs: ₦15,000 - ₦30,000",
      point10:
        "Medium videos (2-10 mins) + 3-4 graphic designs: ₦35,000 - ₦60,000",
      point11:
        "Long videos (10+ mins) + 5-6 graphic designs: ₦60,000 - ₦90,000",
    },
  ];

  const standardPriceDetails = [
    {
      title: "STANDARD",
      price: "40,000.00",
      subhead1: "Video Editing:",
      point1: "Advanced cuts, transitions, and colour grading",
      point2: "Sound design and noise reduction",
      point3: "Motion graphics and text overlays",
      point4: "Custom intro/outro animations",
      point5: "Up to 3 revisions",
      subhead2: "Graphic Design:",
      point6: "Custom social media posts or thumbnails",
      point7: "Branded video overlays (logos, lower thirds)",
      point8: "Flyer or poster design for promotion",
      point9: "Up to 3 revisions",
      subhead3: "Pricing Structure:",
      point10:
        "Short videos (under 2 mins) + 2-3 graphic designs: ₦40,000 - ₦60,000",
      point11:
        "Medium videos (2-10 mins) + 4-5 graphic designs: ₦70,000 - ₦100,000",
      point12:
        "Long videos (10+ mins) + 6-8 graphic designs: ₦100,000 - ₦150,000",
    },
  ];

  const premiumPriceDetails = [
    {
      title: "PRO",
      price: "80,000.00",
      subhead1: "Video Editing:",
      point1:
        "Full production editing (multi-camera, effects, cinematic colour grading)",
      point2: "Custom motion graphics, animation, and VFX",
      point3: "Advanced sound design and mixing",
      point4: "Up to 4 revisions",
      subhead2: "Graphic Design:",
      point5:
        "Complete brand identity for video (logos, intros, outros, animation)",
      point6:
        "High-end design for campaign visuals (billboards, banners, digital)Custom social media posts or thumbnails",
      point7: "Animated graphics and custom illustrations for video",
      point8: "Up to 4 revisions",
      subhead3: "Pricing Structure:",
      point9:
        "Short videos (under 2 mins) + 3-5 graphic designs: ₦80,000 - ₦120,000+",
      point10:
        "Medium videos (2-10 mins) + 6-8 graphic designs: ₦120,000 - ₦180,000+",
      point11:
        "Long videos (10+ mins) + 8-10 graphic designs: ₦180,000 - ₦300,000+",
    },
  ];

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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-4 mx-2">
      {basicPriceDetails.map((d, index) => {
        return (
          <div key={index}>
            <PricingCard cardTitle={d.title} price={d.price}>
              <div className="text-black py-4 px-10">
                <div>
                  <ul className="list-disc">
                    <li className="list-none">
                      <b>{d.subhead1}</b>
                    </li>
                    <li>{d.point1}</li>
                    <li>{d.point2}</li>
                    <li>{d.point3}</li>
                    <li>{d.point4}</li>
                    <li className="list-none mt-3">
                      <b>{d.subhead2}</b>
                    </li>
                    <li>{d.point5}</li>
                  </ul>
                </div>
                <a
                  className={`underline py-2 italic text-blue700 cursor-pointer ${
                    showBasicMore ? "hidden" : "block"
                  }`}
                  onClick={ReadMore}
                >
                  {showBasicMore ? "Read less..." : "Read more..."}
                </a>
                <div className={`${showBasicMore ? "block" : "hidden"}`}>
                  <ul>
                    {" "}
                    <li>{d.point6}</li>
                    <li>{d.point7}</li>
                    <li>{d.point8}</li>
                    <li className="list-none mt-3">
                      <b>{d.subhead3}</b>
                    </li>
                    <li>{d.point9}</li>
                    <li>{d.point10}</li>
                    <li>{d.point11}</li>
                  </ul>
                </div>
                <a
                  className={`underline py-2  italic text-blue700 cursor-pointer ${
                    showBasicMore ? "block" : "hidden"
                  }`}
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
                    <li className="list-none">
                      <b>{d.subhead1}</b>
                    </li>
                    <li>{d.point1}</li>
                    <li>{d.point2}</li>
                    <li>{d.point3}</li>
                    <li>{d.point4}</li>
                    <li className="list-none mt-3">
                      <b>{d.subhead2}</b>
                    </li>
                    <li>{d.point5}</li>
                  </ul>
                </div>
                <a
                  className={`underline py-2  italic text-blue700 cursor-pointer ${
                    showStandardMore ? "hidden" : "block"
                  }`}
                  onClick={ReadStandardMore}
                >
                  {showStandardMore ? "Read less..." : "Read more..."}
                </a>
                <div className={`${showStandardMore ? "block" : "hidden"}`}>
                  <ul className="list-disc">
                    <li>{d.point6}</li>
                    <li>{d.point7}</li>
                    <li>{d.point8}</li>
                    <li>{d.point9}</li>
                    <li className="list-none mt-3">
                      <b>{d.subhead3}</b>
                    </li>
                    <li>{d.point10}</li>
                    <li>{d.point11}</li>
                    <li>{d.point12}</li>
                    {/* <li className="font-bold">{d.point11}</li> */}
                  </ul>
                </div>
                <a
                  className={`underline py-2  italic text-blue700 cursor-pointer ${
                    showStandardMore ? "block" : "hidden"
                  }`}
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
                    <li className="list-none">
                      <b>{d.subhead1}</b>
                    </li>
                    <li>{d.point1}</li>
                    <li>{d.point2}</li>
                    <li>{d.point3}</li>
                    <li>{d.point4}</li>
                  </ul>
                </div>
                <a
                  className={`underline py-2  italic text-blue700 cursor-pointer ${
                    showPremiumMore ? "hidden" : "block"
                  }`}
                  onClick={ReadPremiumMore}
                >
                  {showPremiumMore ? "Read less..." : "Read more..."}
                </a>
                <div className={`${showPremiumMore ? "block" : "hidden"}`}>
                  <ul className="list-disc">
                    {" "}
                    <li className="list-none mt-3">
                      <b>{d.subhead2}</b>
                    </li>
                    <li>{d.point5}</li>
                    <li>{d.point6}</li>
                    <li>{d.point7}</li>
                    <li>{d.point8}</li>
                    <li className="list-none mt-3">
                      <b>{d.subhead3}</b>
                    </li>{" "}
                    <li>{d.point9}</li>
                    <li>{d.point10}</li>
                    <li>{d.point11}</li>
                  </ul>
                </div>
                <a
                  className={`underline py-2  italic text-blue700 cursor-pointer ${
                    showPremiumMore ? "block" : "hidden"
                  }`}
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
