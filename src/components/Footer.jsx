import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 bg-DarkBlue md:justify-items-center py-8 px-8 md:px-0">
      {/* Section 1  */}
      <div className="flex flex-col font-medium">
        <div>
          <img src="/images/Logo.png" alt="Trulance logo" />
        </div>
        <p className="py-6">Copyright 2024</p>
        <a href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7" target="_blank">
          {" "}
          <div className="text-base space-y-1">
            <p>8thGear Hub</p>
            <p>41, CMD Rd, Magodo</p>
            <p>Secretariat, Lagos</p>
          </div>
        </a>
      </div>
      {/* Section 2  */}
      <div className="flex flex-col lg:justify-center space-y-6 font-medium text-base">
        <Link to="/about">About us</Link>
        <Link to="/products">Our Services</Link>
      </div>
      {/* Section 3  */}
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row items-center space-x-3">
          <LuPhone className=" w-6 h-6" />
          <a href="tel:+2349132462410">
            <h3 className="text-base font-medium">+2349132462410</h3>
          </a>
        </div>
        <div>
          <a href="#">Terms and conditions</a>
        </div>
        <div>
          <a href="#">Privacy</a>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <MdOutlineEmail className=" w-6 h-6" />
          <a href="mailto:info@trulance.io">
            {" "}
            <h3 className="text-base font-medium flex flex-row space-x-2">
              {" "}
              info@trulance.io
            </h3>
          </a>
        </div>
      </div>
      {/* Section 4  */}
      <div className="space-y-4 flex flex-col lg:justify-center">
        <div>
          <p>Follow us on</p>
        </div>

        <div className="flex flex-row space-x-3">
          {" "}
          <a href="https://www.instagram.com/trulancehq/" target="_blank">
            {" "}
            <img
              src="/images/productPage/ig.png"
              alt="instagram"
              className="w-7 h-7"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/trulancehq/"
            target="_blank"
          >
            <img
              src="/images/productPage/linkedIn.png"
              alt="linkedIn"
              className="w-7 h-7"
            />
          </a>
          <a href="https://x.com/TruLanceHQ" target="_blank">
            <img src="/images/productPage/x.png" alt="X" className="w-7 h-7" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
