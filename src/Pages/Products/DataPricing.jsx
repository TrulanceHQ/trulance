import { PricingCard } from "./Cards";

export default function DataPricingBoard() {
  const basicPriceDetails = [
    {
      title: "LITE",
      title2: "(DATA VISUALIZATION)",
      price: "100,000.00",
      point1:
        "A dashboard with maximum of 6 graphs and a detailed report in word document",
      point2: "Number of Revisions - 1",
      point3: "Number of Variations - 1",
    },
  ];

  const standardPriceDetails = [
    {
      title: "STANDARD",
      title2: "(STATISTICAL ANALYSIS)",
      price: "150,000.00",
      point1: "Conducting statistical analysis through various methods",
    },
  ];

  const premiumPriceDetails = [
    {
      title: "PRO",
      title2: "(DATA VISUALIZATION)",
      price: "200,000.00",
      point1:
        "A multi-page dashboard with a minimum of 6 graphs per page plus a detailed report overview on a dedicated presentation slide",
      point2: "Number of Revisions - 2",
      point3: "Number of Variations - 2",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-4 mx-2">
      {basicPriceDetails.map((d, index) => {
        return (
          <div key={index}>
            <PricingCard
              cardTitle={d.title}
              cardTitle2={d.title2}
              price={d.price}
            >
              <div className="text-black py-4 px-10">
                <div>
                  <ul className="list-disc">
                    <li>{d.point1}</li>
                    <li>{d.point2}</li>
                    <li>{d.point3}</li>
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
            <PricingCard
              cardTitle={d.title}
              cardTitle2={d.title2}
              price={d.price}
            >
              <div className="text-black py-4 px-10">
                <div>
                  <ul className="list-disc">
                    <li>{d.point1}</li>
                    <li>
                      <p className="text-blue-600">
                        Descriptive statistics, regression analysis{" "}
                        <span className="text-black">and </span>hypothesis
                        testing{" "}
                        <span className="text-black">
                          with software tools including Excel, SPSS, R and
                          Python
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="text-black py-4 px-10">
                <div>
                  <ul className="list-disc">
                    <li>{d.point1}</li>
                    <li>{d.point2}</li>
                    <li>{d.point3}</li>
                  </ul>
                </div>
              </div> */}
            </PricingCard>
          </div>
        );
      })}

      {premiumPriceDetails.map((d, index) => {
        return (
          <div key={index}>
            <PricingCard
              cardTitle={d.title}
              cardTitle2={d.title2}
              price={d.price}
            >
              <div className="text-black py-4 px-10">
                <div>
                  <ul className="list-disc">
                    <li>{d.point1}</li>
                    <li>{d.point2}</li>
                    <li>{d.point3}</li>
                  </ul>
                </div>
              </div>
              {/* <div className="text-black py-4 px-10">
                <div>
                  <ul className="list-disc">
                    <li>{d.point1}</li>
                    <li>
                      <p className="text-blue-600">
                        Descriptive statistics, regression analysis{" "}
                        <span className="text-black">and </span>hypothesis
                        testing{" "}
                        <span className="text-black">
                          with software tools including Excel, SPSS, R and
                          Python
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div> */}
            </PricingCard>
          </div>
        );
      })}
    </div>
  );
}
