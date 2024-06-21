import OurProductsList from "../components/OurProductsList";
import RoomsSlide from "../components/RoomsSlide";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Nav />

      <header className="relative h-[657px] mb-28 bg-hero bg-cover bg-no-repeat">
        <div className="absolute right-14 bottom-14 p-9 rounded-md w-[643px] bg-[#FFF3E3]">
          <h2 className="font-semibold tracking-wider">New Arrival</h2>
          <h1 className="mt-1 mb-4 text-5xl font-bold text-balance">
            Discover Our New Collection
          </h1>
          <p className="mb-11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>

          <a
            href="/shop"
            className="px-16 py-6 block w-fit uppercase font-bold bg-[#B88E2F] text-white"
          >
            Buy Now
          </a>
        </div>
      </header>

      <section className="text-center mx-32">
        <h2 className="font-bold text-3xl">Browse The Range</h2>
        <p className="text-xl text-[#666666]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <ul className="flex items-center justify-center gap-5 mt-16">
          <li>
            <img
              src="https://furniro-bucket.s3.us-east-2.amazonaws.com/images/dining.png"
              alt="Dining Room"
              className="rounded-md mb-7"
            />
            <h3 className="text-2xl font-semibold text-[#333333]">Dining</h3>
          </li>
          <li>
            <img
              src="https://furniro-bucket.s3.us-east-2.amazonaws.com/images/livingroom.png"
              alt="Living Room"
              className="rounded-md mb-7"
            />
            <h3 className="text-2xl font-semibold text-[#333333]">Living</h3>
          </li>
          <li>
            <img
              src="https://furniro-bucket.s3.us-east-2.amazonaws.com/images/bedroom.png"
              alt="Bed Room"
              className="rounded-md mb-7"
            />
            <h3 className="text-2xl font-semibold text-[#333333]">Bedroom</h3>
          </li>
        </ul>
      </section>

      <section className="mt-14 mx-32 mb-16">
        <h2 className="mb-8 font-bold text-4xl text-center">Our Products</h2>

        <OurProductsList />

        <a
          href="/shop"
          className="px-9 py-3 mx-auto mt-8 block w-fit uppercase font-semibold border border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white"
        >
          Explore More
        </a>
      </section>

      <section className="py-11 flex items-center bg-[#FCF8F3]">
        <div className="max-w-[422px] ml-32">
          <h1 className="text-4xl font-bold text-[#3A3A3A] text-balance">50+ Beautiful rooms inspiration</h1>
          <p className="mt-2 mb-6 text-balance">
            Our designer already made a lot of beautiful prototipe of rooms that inspire you
          </p>
          <a
            href="#"
            className="px-9 py-3 block w-fit uppercase font-semibold bg-[#B88E2F] text-white"
          >
            Explore More
          </a>
        </div>

        <RoomsSlide />
      </section>

      <section className="my-16">
        <p className="text-xl text-center text-[#616161]">Share your setup with</p>
        <h2 className="mb-8 font-bold text-4xl text-center">#FurniroFurniture</h2>

        <img src="https://cdn.discordapp.com/attachments/616690548928938058/1253744426610589706/image.png?ex=6676f7fc&is=6675a67c&hm=5bbb57dd403ef53ca9a52daaccc3294d9589d1e8824fd61f7aba21049c5ef72c&" alt="" />
      </section>

      <Footer />
    </>
  )
}