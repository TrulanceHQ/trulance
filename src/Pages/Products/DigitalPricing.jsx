import { PricingCard } from "./Cards";


export default function DigitalPricingBoard() {
  const basicPriceDetails = [
    {

      title: "EMAIL MARKETING",
      price: "150,000.00",
      point1: "Technology Consulting",
      point2: "Website Maintenance",
      point3: "Technical Support",
      point4: "Data Backup",
      point5: "Reporting",
      point6: "Training & Workshops"
    }
  ];

  const standardPriceDetails = [
    {

      title: "SOCIAL MARKETING",
      price: "250,000.00",
      point1: "Technology Consulting",
      point2: "Website Maintenance",
      point3: "Technical Support",
      point4: "Data Backup",
      point5: "Rporting",
      point6: "Training and Workshops"
    },
  ]

  const premiumPriceDetails = [
    {

      title: "ADVERTISEMENT",
      price: "400,000.00",
      point1: "Technology Consulting",
      point2: "Website Maintenance",
      point3: "Technical Support",
      point4: "Data Backup",
      point5: "Rporting",
      point6: "Training and Workshops"
    }
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-4 mx-2">
      {basicPriceDetails.map((d, index) => {
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
                    <li>{d.point4}</li>
                    <li>{d.point5}</li>
                    <li>{d.point6}</li>
                  </ul>
                </div>
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
              </div>
            </PricingCard>
          </div>
        );
      })}
    </div>
  );
}
