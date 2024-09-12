/* eslint-disable react/prop-types */
export default function ContactUsBtn({label}) {
    return (
        <div>
            <button className="border-2 border-buttonGreen rounded-lg text-buttonGreen px-3 py-1 md:hover:text-white font-medium md:hover:bg-buttonGreen">
                {label}
            </button>
        </div>
    );
}

export function PricingButton({label, onClick, className}) {
    return (
        <button
            className={`border border-blue900 ${className} hover:bg-blue700 rounded-full  px-6  py-2 md:hover:text-white`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export function PriceButton({price}) {
    return <button className="bg-blue700 text-white rounded-lg p-2 w-48">From &#8358;{price}</button>;
}
