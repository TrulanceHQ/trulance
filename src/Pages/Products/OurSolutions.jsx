import { OurSolutionsCard } from "./Cards";

export default function OurSolutions() {
    return (
        <div className="flex flex-col items-center justify-center py-5">
            <h3 className="font-bold text-center text-3xl text-blue800">Our Solutions</h3>
            <div className="py-8 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4">
                <OurSolutionsCard imageLink={"/images/productPage/solutionCard1.png"} headerText={"Web Development"} pText={"We offer end-to-end development services, including Product Design, Frontend Development, Backend Development, and Software Testing, to build robust and user-friendly applications."}/>

                <OurSolutionsCard imageLink={"/images/productPage/solutionCard2.png"} headerText={"Data Analysis"} pText={"Turn data into actionable insights. Our services cover the entire spectrum from Collation and Analysis to Visualization and Reporting, helping you make informed decisions and drive business growth."}/>

                <OurSolutionsCard imageLink={"/images/productPage/solutionCard3.png"} headerText={"Content Creation"} pText={"Create compelling content that resonates with your audience. We specialize in Still Graphics, Motion Graphics, and Video Creation & Editing to deliver engaging and visually appealing media."}/>

                <OurSolutionsCard imageLink={"/images/productPage/solutionCard4.png"} headerText={"Digital Marketing"} pText={"Enhance your online presence with targeted Ad Management/Lead Generation and expert Social Media Management to grow your brand and drive results."}/>
            </div>
        </div>
    )
}