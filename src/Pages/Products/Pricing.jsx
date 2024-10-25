import { useState } from "react";
import { PricingButton } from "../../components/Buttons";
import ContentPricingBoard from "./ContentPricing";
import DataPricingBoard from "./DataPricing";
import DigitalPricingBoard from "./DigitalPricing";
import WebPricingBoard from "./WebPricingBoard";
import { Button } from "flowbite-react";

export default function Pricing() {
  const [currentComponent, setCurrentComponent] = useState("web");
  const [buttonStyle, setButtonStyle] = useState({
    web: "bg-blue900 text-white",
    data: "text-blue900 bg-white",
    content: "text-blue900 bg-white",
    digital: "text-blue900 bg-white",
  });

  const renderComponent = () => {
    switch (currentComponent) {
      case "web":
        return <WebPricingBoard />;
      case "data":
        return <DataPricingBoard />;
      case "content":
        return <ContentPricingBoard />;
      case "digital":
        return <DigitalPricingBoard />;
      default:
        return <WebPricingBoard />;
    }
  };

  const onButtonClick = (component) => {
    setCurrentComponent(component);
    setButtonStyle({
      web: "text-blue900 bg-white",
      data: "text-blue900 bg-white",
      content: "text-blue900 bg-white",
      digital: "text-blue900 bg-white",
      [component]: "bg-blue900 text-white",
    });
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-5">
        <h3 className="font-bold text-center text-3xl text-blue800">
          Our Pricing
        </h3>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 my-5">
          <PricingButton
            label={"Web Development"}
            onClick={() => onButtonClick("web")}
            className={buttonStyle.web}
          />
          <PricingButton
            label={"Data Analysis"}
            onClick={() => onButtonClick("data")}
            className={buttonStyle.data}
          />
          <PricingButton
            label={"Content Creation"}
            onClick={() => onButtonClick("content")}
            className={buttonStyle.content}
          />
          <PricingButton
            label={"Digital Marketing"}
            onClick={() => onButtonClick("digital")}
            className={buttonStyle.digital}
          />
        </div>
        <div className="md:mx-8">{renderComponent()}</div>
      </div>
      <div className="text-black text-base mx-10 md:mx-6 lg:mx-12 xl:mx-48 my-6">
        <a
          className="text-blue-800 bg-transparent font-bold text-sm"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdaeUFkq43_rwgoBEkUNDgdJTYJBFxVP4vi9V9t7Y0m4ntUpg/viewform?usp=sf_link"
          target="_blank"
        >
          <Button className="rounded-3xl w-44 bg-blue700 hover:bg-blue-800 hover:text-white mx-auto md:w-32">
            Submit Brief
          </Button>{" "}
        </a>
        <h3 className="font-bold ">NOTE:</h3>
        <li>
          For companies requiring custom web applications (large-scale
          applications), pricing varies widely depending on the specific
          requirements of the project. Please contact us to discuss your project
          and we will provide you with a custom quote based on your needs.
        </li>
        <li>
          Fees does not include Pictures, Graphics, Content, and Logo creation.
          You will provide the product image, pictures, content, graphics, logo,
          and icons for the each project.
        </li>
        <li>
          Visual representation of data insights using industry-leading tools
          (Power BI, Tableau, Matplotlib, Seaborn) to effectively communicate
          findings through interactive graphs, charts and diagrams.
        </li>
      </div>
    </div>
  );
}
