import Rating from "../components/Rating";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { currency } from "../utils/currenty";

export default function ProductDetail() {
  return (
    <>
      <Nav />

      <ol className="flex items-center mt-2 px-24 py-9 gap-6 bg-[#F9F1E7]">
          <li>
            <a href="/" className="text-[#9F9F9F]">
              Home
            </a>
          </li>
          <li>
            <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/arrow-down.svg" alt="" />
          </li>
          <li>
            <a href="/" className="text-[#9F9F9F]">
              Shop
            </a>
          </li>

          <li className="border-l-2 border-[#9F9F9F] pl-6">
            <p>Asgard Sofa</p>
          </li>
      </ol>

      <main className="flex gap-28 px-24 py-8">
        <div className="flex gap-8">
          <ul className="flex flex-col gap-8">
            <li className="size-[80px] bg-black rounded-md"></li>
            <li className="size-[80px] bg-black rounded-md"></li>
            <li className="size-[80px] bg-black rounded-md"></li>
            <li className="size-[80px] bg-black rounded-md"></li>
          </ul>
          <div className="w-[423px] bg-black rounded-md" />
        </div>

        <div>
          <div className="max-w-[424px]">
            <h1 className="text-4xl">Asgard Sofa</h1>
            <strong className="text-2xl font-medium">{currency.format(2500000)}</strong>
            <div className="flex items-center my-2">
              <Rating rating={3.9} />
              <p className="border-l border-[#9F9F9F] ml-4 pl-4">5 Costumer reviews</p>
            </div>
            <p className="text-sm leading-relaxed">
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
              stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
              highs for a sound.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}