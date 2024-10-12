import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full bg-background gap-x-8">
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-7xl font-bold capitalize mb-4">
          <span className="block pb-4">Creative</span>
          <span className="block pb-4">Thoughts</span>
          <span className="block pb-4">Agency.</span>
        </div>
        <div className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, omnis
            inventore. Corporis nisi quaerat aliquid laudantium eos, omnis
            aperiam officiis!
          </p>

          <div className="flex gap-x-4 mt-4">
            <button className="px-4 py-3 text-sm rounded-md text-white bg-backgroundSoft">
              Learn More
            </button>
            <button className="px-4 py-3 text-sm rounded-md text-black bg-white">
              Contact
            </button>
          </div>
        </div>
        <div className="icons relative w-[500px] h-[50px] grayscale">
          <Image src={"/brands.png"} alt="Brands" fill />
        </div>
      </div>
      <div className="flex-1 relative bg-red-500">
        <Image src="/hero.gif" alt="" fill />
      </div>
    </div>
  );
}
