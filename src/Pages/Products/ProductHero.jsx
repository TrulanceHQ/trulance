export default function ProductHero() {
  return (
    <div className="bg-productHeroBg ">
      <div className="flex flex-col-reverse lg:flex-row text-center lg:text-left justify-center items-center space-x-10 pt-32 pb-10 px-10">
        <h3 className=" lg:w-[50%] text-2xl lg:text-4xl lg:text-[40px]  lg:leading-normal py-8">
          Discover our range of innovative products designed to drive your
          digital transformation
        </h3>
        <img
          src="/images/productPage/productHero.png"
          alt="Product page hero image"
          className=""
        />
      </div>
    </div>
  );
}
