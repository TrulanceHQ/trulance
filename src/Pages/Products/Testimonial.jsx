import { TestimonialCard } from "./Cards";

export default function Testimonial() {
    const testimonyData = [
        {
            testimony: "Amazing experience! The service exceeded my expectations and delivered exactly what I needed on time.",
            imgUrl: "/images/inkeeper.svg",
            name: "Innkeeper Academy"
        },
        {
            testimony: "Delivered faster than expected with top-notch results. I’ll definitely be returning for future projects",
            imgUrl: "/images/haven.svg",
            name: "Haven Edu Services"
        },
        {
            testimony: "Highly professional and attentive to details. I’m impressed with the quality of work provided",
            imgUrl: "/images/mindAfrik.svg",
            name: "MindAfrik"
        },
       
    ]
    return (
        <div className="flex flex-col items-center justify-center py-5">
            <h3 className="font-bold text-center text-3xl text-blue800">What clients say about us</h3>
            <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
                {testimonyData.map((d, index) => (
                    <div key={index}
                    className={`
                        ${index === 2 ? 'md:col-span-2 md:justify-self-center md:max-w-md lg:col-span-1' : ''}
                      `}
                    > <TestimonialCard testimony={d.testimony} imgUrl={d.imgUrl} name={d.name} /></div>
                ))}
            </div>
        </div>
    )
}