import HowWeWorkCards from "./Cards";

export default function HowWeWork() {
    return (
        <div className="flex flex-col items-center justify-center py-5">
            <h3 className="font-bold text-center text-3xl text-blue800">How We Work</h3>
            {/* Cards  */}
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-8 py-10 justify-items-center">
                <HowWeWorkCards
                    TitleText={"Discovery & Consultation"}
                    p1={"We start by understanding your unique goals and challenges."}
                    p2={"We listen, analyze, and offer strategic insights"}
                    p3={"to align our services with your objectives."}
                />
                <HowWeWorkCards
                    TitleText={"Strategy & Planning"}
                    p1={"Select from our prepackaged solutions with clear pricing or customize your approach."}
                    p2={"We tailor our plans to fit your requirements, balancing quality, cost, and efficiency."}
                />
                <HowWeWorkCards
                    TitleText={"Implementation"}
                    p1={"Our team of talented professionals executes your project with precision, utilizing the latest technologies and best practices"}
                    p2={"to deliver high-quality results efficiently."}
                />
                <div className="lg:col-span-3 lg:flex lg:justify-center">
                    <HowWeWorkCards
                        TitleText={"Launch & Close-Out"}
                        p1={"As we finalize the project, we focus on ensuring a smooth transition to completion."}
                        p2={"We ensure all aspects are seamlessly integrated and functional."}
                    />
                </div>
            </div>
        </div>
    );
}
