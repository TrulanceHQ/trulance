import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 bg-DarkBlue md:justify-items-center py-8 px-8 md:px-0">
      {/* Section 1  */}
      <div className="flex flex-col font-medium">
        <div>
          <img src="images/Logo.png" alt="Trulance logo" />
        </div>
        <p className="py-6">Copyright 2024</p>
        <div className="text-base space-y-1">
          <p>8thGear Hub</p>
          <p>41, CMD Rd, Magodo</p>
          <p>Secretariat, Lagos</p>
        </div>
      </div>
      {/* Section 2  */}
      <div className="flex flex-col lg:justify-center space-y-6 font-medium text-base">
        <a href="/about">About us</a>
        <a href="/services">Our Services</a>
      </div>
      {/* Section 3  */}
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row items-center space-x-3">
          <LuPhone className=" w-6 h-6" />
          <h3 className="text-base font-medium "> 09213324589</h3>
        </div>
        <div>
          <a href="#">Terms and conditions</a>
        </div>
        <div>
          <a href="#">Privacy</a>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <MdOutlineEmail className=" w-6 h-6" />
          <h3 className="text-base font-medium flex flex-row space-x-2">  info@trulance.io</h3>
        </div>
      </div>
      {/* Section 4  */}
      <div className="space-y-4 flex flex-col lg:justify-center">
        <div>
          <p>Follow us on</p>
        </div>
        <div className="flex flex-row space-x-3">
          <img src="/images/productPage/ig.png" alt="instagram" />
          <img src="/images/productPage/linkedIn.png" alt="linkedIn" />
          <img src="/images/productPage/x.png" alt="X" />
          <img src="/images/productPage/facebook.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
