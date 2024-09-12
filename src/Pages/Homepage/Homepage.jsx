import {Button, Card, Blockquote} from "flowbite-react";
import ContactUsBtn from "../../components/Buttons";
import HeroBg from "./assets/HeroBg.jpg";
import WhatWeDoBG from "./assets/Waves-doodle.jpg";
import ContactUsCTA from "./assets/ContactUs-CTA.png";
import Img1 from "../Homepage/assets/Img1.jpg";
import Img2 from "../Homepage/assets/Img2.jpg";
import Img1Sm from "../Homepage/assets/Img1sm.png";
import Img2sm from "../Homepage/assets/Img2Sm.png";
import ContentCreationCard from "../Homepage/assets/Content-Creation.jpg";
import WebDev from "../Homepage/assets/WebandMobile-Dev.jpg";
import DataAnalysis from "./assets/Data-Analysis.jpg";
import DMarketing from "./assets/Digital-Marketing.jpg";
import Expterise from "./assets/Expertise.png";
import CustomSolutions from "./assets/CustomSolutions.png";
import CustomerSatsifcation from "./assets/CustomerSatisfaction.png";
import ResultsDriven from "./assets/ResultsDriven.png";
import InnKeeperClient from "./assets/InnkeeperClient.png";
import HavenClient from "./assets/HavenClient.png";
import MindAfrikClient from "./assets/MindAfrikClient.png";
import telphoneIcone from "./assets/telepone-icon.png";
import EmailIcon from "./assets/Mail-icon.png";

// SERVICE CARDS ARRAY
const ServiceCards = [
    {id: 1, title: "Content Creation", src: `${ContentCreationCard}`},
    {id: 2, title: "Web Devlopment ", src: `${WebDev}`},
    {id: 3, title: "Data Analysis", src: `${DataAnalysis}`},
    {id: 4, title: "Digital Marketing", src: `${DMarketing}`},
];
// QUALITY CARDS ARRAY
const QualityCards = [
    {
        id: 1,
        headerImg: `${Expterise}`,
        body: "Our team of skilled professionals brings years of experience and expertise to deliver exceptional results.",
    },
    {
        id: 2,
        headerImg: `${CustomSolutions}`,
        body: "We understand your unique needs and provide tailored solutions that align with your goals.",
    },
    {
        id: 3,
        headerImg: `${CustomerSatsifcation}`,
        body: "Our commitment to your satisfaction drives us to go above and beyond to exceed your expectations.",
    },
    {
        id: 4,
        headerImg: `${ResultsDriven}`,
        body: "Choose us for unrivaled quality and better outcomes because we are dedicated to helping you achieve measurable results and success.",
    },
];

// TESTIMONIAL CARDS ARRAY
const TestimonialCards = [
    {
        id: 1,
        client: "Innkeeper",
        NameTag: `${InnKeeperClient}`,
        body: "Amazing experience! The service exceeded my expectations and delivered exactly what I needed on time.",
    },
    {
        id: 2,
        client: "Haven",
        NameTag: `${HavenClient}`,
        body: "Delivered faster than expected with top-notch results. I’ll definitely be returning for future projects",
    },
    {
        id: 3,
        client: "Innkeeper",
        NameTag: `${MindAfrikClient}`,
        body: "Highly professional and attentive to details. I’m impressed with the quality of work provided",
    },
];

const Homepage = () => {
    return (
        <div className="pt-12">
            <Hero />
            <WhatWeDo />
            <Solutions />
            <Quality />
            <Banner />
            <Testimonals />
            <ContactUs />
        </div>
    );
};

//HERO SECTION
const Hero = () => {
    return (
        <div className="relative h-[70vh] w-full">
            <div
                style={{backgroundImage: `url(${HeroBg})`}}
                className="bg-cover h-[70vh] bg-center flex justify-center items-center gap-4 my-4"
            >
                <div className="text-center w-3/4 my-auto font-bold">
                    <h1 className="text-xl md:text-4xl text-wrap pt-2 ">
                        Innovative solutions that supports digital transformations of businesses{" "}
                    </h1>

                    <p className="pt-5 text-sm">
                        Experience the <span className="text-blue-800">Tru</span>
                        <span className="text-green-500">Lance</span> difference...
                    </p>
                    {/* THE BUTTONS */}
                    <div className="mt-5 my-auto flex flex-row items-center justify-center w-full">
                        <Button color="blue" className="rounded-3xl w-48 md:w-32 md:mx-10 h-10">
                            <a className="font-normal text-white">Submit Brief</a>
                        </Button>
                    </div>
                    {/* <div className="mt-5 my-auto hidden flex-col items-center justify-center gap-3  md:flex md:flex-row md:mt-7 md:items-center md:justify-center md:mr-4 md:gap-2">
                        <Button color="blue" className="rounded-3xl w-44 h-10">
                            <a className="font-bold text-white">Get started</a>
                        </Button>
                        <Button className="rounded-3xl w-28 h-10 bg-transparent border-green-600">
                            <a className="font-bold text-green-600">Sign In</a>
                        </Button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

//WHAT WE DO
const WhatWeDo = () => {
    return (
        <div style={{backgroundImage: `url(${WhatWeDoBG})`}} className="py-5 bg-center bg-cover px-2">
            <div className="container text-gray-600">
                <h1 className="text-blue-900 font-semibold text-3xl text-center py-4">What We Do.</h1>
                <div className="w-full m-auto lg:max-w-[900px]">
                    {/* 1st Paragraph */}
                    <div className="flex flex-col-reverse gap-3 m-auto py-3 text-left md:flex-row justify-center items-center md:gap-1 md:py-1 md:mx-8 lg:gap-5 lg:mx-2">
                        {/* WRITE-UP */}
                        <div className="m-auto w-3/4 lg:max-w-[400px] md:m-4">
                            <p className="">
                                Welcome to <span className="text-blue-800 text-sm">Tru</span>
                                <span className="text-green-500 text-sm">Lance</span>, where innovation meets expertise.
                                We are a dynamic platform offering comprehensive solutions in Web Development, Data
                                Analysis , Content Creation, and Digital Marketing.
                            </p>
                            <p className="">
                                Our team of passionate professionals is committed to transforming your ideas into
                                captivating digital experiences that drive growth and success.
                            </p>
                        </div>
                        {/* FOR THE IMAGE FOR Mobile*/}
                        <div className="block md:hidden">
                            <img
                                src={Img1Sm}
                                alt="Img1"
                                className="w-3/4 m-auto py-4 md:w-[500px] bg-center bg-cover"
                            />
                        </div>
                        {/* FOR THE IMAGE FOR md */}
                        <div className="hidden md:block">
                            <img src={Img1} alt="Img1" className="w-3/4 m-auto py-4 md:w-[500px] bg-center bg-cover" />
                        </div>
                    </div>

                    {/* 2nd Paragarph */}
                    <div className="flex flex-col-reverse m-auto py-3 text-left  md:flex-row-reverse justify-center items-center md:gap-1 md:py-1 md:mx-8  lg:gap-5 lg:mx-2">
                        {/* WRITE UP */}
                        <div className="m-auto w-3/4  lg:max-w-[400px] md:m-4">
                            <p className="">
                                With a customer-centric approach, we deliver top-notch solutions tailored to your unique
                                needs. At <span className="text-blue-800 text-sm">Tru</span>
                                <span className="text-green-500 text-sm">Lance</span>, we blend creativity, technical
                                prowess, and strategic thinking to unlock the full potential of your business.
                            </p>
                            <p className="">
                                Partner with us and embark on a journey of collaboration, excellence, and remarkable
                                results. Let’s make your vision a reality.
                            </p>
                        </div>
                        {/* FOR THE IMAGE FOR Mobile*/}
                        <div className="block md:hidden">
                            <img src={Img2sm} alt="Img1" className="w-3/4 m-auto py-4 md:w-[500px] md:py-1" />
                        </div>
                        {/* FOR THE IMAGE FOR TABLET*/}
                        <div className="hidden md:block">
                            <img src={Img2} alt="Img1" className="w-3/4 m-auto py-4 md:w-[500px] md:py-1" />
                        </div>
                    </div>
                    {/* THE  CTA BUTTON */}
                    <div className="mx-auto my-3 flex justify-center items-center ">
                        <Button className="rounded-3xl w-auto h-10 bg-transparent border-blue-800 ">
                            <a className="font-normal text-green-600 hover:text-white">
                                Discover The Trulance Advantage...
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Solutions = () => {
    return (
        <div className="bg-neutral-50">
            <h1 className="text-blue-900 font-semibold text-3xl text-center py-4">Our Solutions</h1>
            {/* SOLUTIONS CARD */}
            <div className="mt-4 py-8 w-full flex flex-col items-center lg:flex-row md:px-0 lg:gap-4 lg:justify-center">
                {ServiceCards.map(({id, title, src}) => (
                    <>
                        {/* 1ST CARD */}
                        <div
                            className="max-w-xs h-[480px] mt-5 w-72 bg-center bg-no-repeat bg-cover flex items-center flex-col justify-end p-10 rounded-2xl lg:w-60 lg:justify-between lg:mb-0 hover:scale-110 md:hover:scale-105"
                            key={id}
                            style={{backgroundImage: `url(${src})`}}
                        >
                            <a href="/products">
                                <div className="mt-48 pt-14 mx-[2px] mb-2 lg:justify-center">
                                    <h3 className="text-xl text-center font-semibold tracking-tight text-white dark:text-gray-400 py-5">
                                        {title}
                                    </h3>
                                    <div className="m-auto">
                                        <ContactUsBtn label={"Read More"} />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

// QUALITY
const Quality = () => {
    return (
        <div className="bg-neutral-100 py-8">
            <h2 className="text-blue-900 font-semibold text-3xl text-center py-4">Why Choose Us</h2>
            {/* FOR THE QUALITY CARDS */}
            <div className="flex flex-col gap-4 justify-center items-center lg:flex-row">
                {QualityCards.map(({id, headerImg, body}) => {
                    return (
                        <>
                            <Card
                                className="max-w-xs mx-4 flex flex-col text-white md:max-w-sm w-[296px] h-[326px]"
                                key={id}
                            >
                                <img src={headerImg} alt="Card-body" className="" />
                                <p className="font-normal text-gray-700 dark:text-gray-400 text-left">{body}</p>
                            </Card>
                        </>
                    );
                })}
            </div>
        </div>
    );
};

const Banner = () => {
    return (
        <div className="pt-4" style={{backgroundImage: `url(${HeroBg})`}}>
            <div className="flex flex-col gap-4 justify-center items-center md:flex-row md:justify-evenly">
                <div className="flex flex-col my-5 text-center">
                    <h2 className="text-white text-2xl font-semibold py-2 md:text-xl">Got a project brief?</h2>
                    <Button className="rounded-3xl w-44 bg-transparent border-blue-800 hover:bg-blue-800 hover:text-white mx-auto md:w-32">
                        <a className="text-blue-800 bg-transparent font-bold text-sm" href="#">
                            Submit Brief
                        </a>
                    </Button>
                </div>
                <div className="w-20 border-t border-gray-100 my-1 md:w-0 md:border-t-0 md:border-r md:h-16"></div>
                <div className="flex flex-col my-5 text-center py-4 md:py-2">
                    <h2 className="text-white text-2xl md:text-xl">Need help finding what you want?</h2>
                    <p className="text-sm pb-3">
                        Reach out to us via <a className="underline text-sx">info@trualance.io</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

const Testimonals = () => {
    return (
        <div className="bg-neutral-100 py-5">
            <h2 className="text-blue-900 font-semibold text-3xl text-center py-4">
                What clients have to say about us.
            </h2>
            {/* TESTIMONIALS */}
            <div className="flex flex-col mx-auto gap-4 my-3 lg:flex-row lg:items-center lg:px-5">
                {TestimonialCards.map(({id, client, NameTag, body}) => {
                    return (
                        <>
                            <Card className="m-auto w-72 h-64 md:w-[405px]" key={id}>
                                <Blockquote>
                                    <span className="text-4xl text-blue-800 font-bold italic">&quot;</span>
                                    <p className="py-2 text-xl text-neutral-500 font-normal">{body}</p>
                                    <img src={NameTag} alt={client} className="py-3" />
                                </Blockquote>
                            </Card>
                        </>
                    );
                })}
            </div>
        </div>
    );
};
// CONTACT US
const ContactUs = () => {
    return (
        <div className="py-5 m-auto bg-neutral-100" id="ContactUs">
            <h2 className="text-blue-900 font-semibold text-3xl text-center py-4">Contact Us</h2>
            <div
                className="md:border border-gray-800 flex flex-col justify-center items-center md:flex-row bg-center bg-cover md:w-1/2 md:mx-auto rounded-2xl mb-5 "
                style={{backgroundImage: `url(${WhatWeDoBG})`}}
            >
                {/* Telephone */}
                <div
                    className="flex flex-row m-3 items-center bg-center bg-contain"
                    style={{backgroundImage: `url(${ContactUsCTA})`}}
                >
                    <img src={telphoneIcone} alt="telephoneIcon" className="p-2" />
                    <p className="text-sm text-blue-800">09213324589</p>
                </div>
                <div className="flex flex-row m-3 items-center">
                    <img src={EmailIcon} alt="EmailIcon" className="p-2" />
                    <p className="text-sm text-blue-800">info@trulance.io</p>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
