export default function ProductHero() {
  return (
    <div className="bg-productHeroBg ">
      <div className="flex flex-col lg:flex-row text-center font-medium lg:text-left justify-center items-center space-x-10 pt-16 pb-10 px-10">
        <h3 className=" md:w-[75%] xl:w-[60%] lg:m-12 text-2xl md:text-3xl lg:text-4xl xl:text-[40px]  md:leading-10 lg:leading-normal py-8">
          Discover our range of innovative products designed to drive your
          digital transformation
        </h3>
        <img
          src="/images/productPage/productHero.png"
          alt="Product page hero image"
          className="md:w-[20rem] xl:w-[40%] xl:my-8"
        />
      </div>
    </div>
  );
}
