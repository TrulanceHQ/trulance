import { TestimonialCard } from "./Cards";

export default function Testimonial() {
    const testimonyData = [
        {
            testimony: "Amazing experience! The service exceeded my expectations and delivered exactly what I needed on time.",
            imgUrl: "images/productPage/Profile.png",
            name: "Jane D."
        },
        {
            testimony: "Amazing experience! The service exceeded my expectations and delivered exactly what I needed on time.",
            imgUrl: "images/productPage/Profile.png",
            name: "Jane D."
        },
        {
            testimony: "Amazing experience! The service exceeded my expectations and delivered exactly what I needed on time.",
            imgUrl: "images/productPage/Profile.png",
            name: "Jane D."
        },
        {
            testimony: "Amazing experience! The service exceeded my expectations and delivered exactly what I needed on time.",
            imgUrl: "images/productPage/Profile.png",
            name: "Jane D."
        },
    ]
    return (
        <div className="flex flex-col items-center justify-center py-5">
            <h3 className="font-bold text-center text-3xl text-blue800">What clients say about us</h3>
            <div className="my-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {testimonyData.map((d, index) => (
                    <div key={index}> <TestimonialCard testimony={d.testimony} imgUrl={d.imgUrl} name={d.name} /></div>
                ))}
            </div>
        </div>
    )
}