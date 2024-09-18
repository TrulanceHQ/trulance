import ContactUsBtn from "../../components/Buttons";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div>
      <div className="bg-[url('public/images/productPage/contact1.png')] bg-cover bg-center h-48 flex flex-col justify-center items-center">
        <h3 className="text-xl font-medium py-4 text-center">
          Need help finding what you want?
        </h3>
        <a href="mailto:info@trulance.io">
          {" "}
          <ContactUsBtn label={"Contact Us For A Consultation"} />
        </a>
      </div>
      <h3 className="font-bold text-center text-3xl text-blue800 py-8">
        Contact Us
      </h3>

      <div className="lg:bg-[url('public/images/productPage/contact2.png')] bg-cover bg-center rounded-lg h-24 lg:mx-80 mb-10 flex flex-col lg:flex-row  justify-center items-center space-x-6">
        <div className="flex flex-row items-center space-x-3">
          <LuPhone className="text-black w-6 h-6" />
          <a href="tel:+2349132462410">
            <h3 className="text-xl font-medium py-4 text-black">
              {" "}
              +2349132462410
            </h3>
          </a>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <MdOutlineEmail className="text-black w-6 h-6" />
          <a href="mailto:info@trulance.io">
            <h3 className="text-xl font-medium py-4 text-black flex flex-row space-x-2">
              {" "}
              info@trulance.io
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
}
