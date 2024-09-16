import Contact from "./Contact";
import HowWeWork from "./HowWeWork";
import OurSolutions from "./OurSolutions";
import Pricing from "./Pricing";
import ProductHero from "./ProductHero";
import Testimonial from "./Testimonial";

const Products = () => {
    return (
        <div className="flex flex-col space-y-8 bg-white">
            {/* Hero Section  */}
            <div>
                <ProductHero />
            </div>

            <div className="bg-white flex flex-col  items-center text-center text-black text-xl lg:text-lg px-10 py-6">
                <p>
                    At <span className="text-primaryBlue">Tru</span>
                    <span className="text-buttonGreen">lance</span> , we offer a comprehensive range of solutions
                    designed to digitally transform your business and meet your unique needs. Our expertise spans
                    various domains, ensuring that we provide tailored, high-quality results every time. Whether you’re
                    looking for innovative web design, compelling content, market research, or strategic digital
                    marketing, our services are crafted to help you achieve your goals efficiently and effectively.
                </p>
                <hr className="w-60 mt-4" />
            </div>

            {/* How We Work  */}
            <div className="">
                <HowWeWork />
            </div>

            {/* Our Solutions  */}
            <div className="">
                <OurSolutions />
            </div>

            {/* Our Pricing  */}
            <div className="">
                <Pricing />
            </div>

            {/* Client testimonial  */}
            <div>
                <Testimonial />
            </div>

            {/* Contact US  */}
            <Contact />
        </div>
    );
};

export default Products;
