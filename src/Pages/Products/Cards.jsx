/* eslint-disable react/prop-types */
import { TiArrowSortedUp } from "react-icons/ti";
import { PriceButton } from "../../components/Buttons";
import { CgQuote } from "react-icons/cg";


export default function HowWeWorkCards({ TitleText, p1, p2, p3 }) {
    return (
        <div>
            <div className="text-black text-center justify-center flex flex-col bg-blue950 w-[18rem] px-8 h-[20rem] ml-3 rounded-tl-[5rem] rounded-br-[5rem]">
                <h2 className="font-semibold text-xl text-white py-3">{TitleText}</h2>
                <div className="flex justify-center">
                    <TiArrowSortedUp className="text-buttonGreen w-10 h-10 " />
                </div>
                <p className="text-white font-normal text-md">{p1} <span className="text-buttonGreen">{p2}</span> {p3}</p>
            </div>
        </div>
    )
}

export function OurSolutionsCard({ imageLink, headerText, pText }) {
    return (
        <div className="bg-DarkBlue900 w-[18rem] h-[25rem] rounded-2xl p-4">
            <div className="overflow-hidden rounded-xl">
                <img src={imageLink} alt="A laptop" className="transition-transform duration-1000 ease-in-out transform hover:scale-125  hover:shadow-lg object-cover w-full h-full" />
            </div>

            <div className="py-6">
                <h3 className="text-blue900 font-medium text-xl">{headerText}</h3>
                <p className="text-white font-normal text-base">{pText}</p>
            </div>
        </div>
    )
}

export function PricingCard({ cardTitle, price, children }) {
    return (
        <div className="bg-white w-72 lg:w-80 min-h-[28rem] rounded-3xl shadow-lg">
            <div className="bg-blue700 rounded-t-3xl h-32 flex flex-col justify-between items-center text-xl space-y-0">
                <h3 className="font-semibold pt-12">{cardTitle}</h3>
                <TiArrowSortedUp className="text-white w-16 h-16 relative top-6" />
            </div>
            <div className="my-4 flex justify-center items-center">
                <PriceButton price={price} />
            </div>
            <div>{children}</div>
        </div>
    )
}

export function TestimonialCard({ testimony, imgUrl, name }) {
    return (
        <div className="text-black border rounded-lg w-64 h-56">
            <CgQuote className="w-10 h-10" />
            <p className="text-base font-medium pl-8 pr-2 text-[#6F7780] h-28">{testimony}</p>
            <div className="flex flex-row pl-8 py-3">
                <div>
                    <img src={imgUrl} alt="" className="w-10 h-10" />
                </div>
                <p className="text-DarkBlue text-sm font-medium p-3"> - {name}</p>
            </div>
        </div>
    )
}