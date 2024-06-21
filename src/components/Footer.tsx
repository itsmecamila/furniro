export default function Footer() {
  return (
    <footer className="px-24 py-12 border-t border-[#D9D9D9]">
      <div className="flex justify-between">
        <div>
          <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/logo-dark.svg" alt="Furniro's Logo" />

          <address className="max-w-72 my-12">
            400 University Drive Suite 200 Coral Gables,
            FL 33134 USA
          </address>

          <div>
            <ul className="flex items-center gap-4">
              <li className="flex items-center justify-center size-[34px] rounded-full bg-white shadow-lg">
                <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/facebook.svg" alt="Facebook" />
              </li>
              <li className="flex items-center justify-center size-[34px] rounded-full bg-white shadow-lg">
                <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/instagram.svg" alt="Instagram" />
              </li>
              <li className="flex items-center justify-center size-[34px] rounded-full bg-white shadow-lg">
                <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/twitter.svg" alt="Twitter" />
              </li>
              <li className="flex items-center justify-center size-[34px] rounded-full bg-white shadow-lg">
                <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/linkedin.svg" alt="Linkedin" />
              </li>
            </ul>
          </div>
        </div>

        <div>
          <p className="font-semibold text-[#9F9F9F]">Links</p>

          <ul className="flex flex-col gap-12 mt-14">
            <li>
              <a href="#" className="font-semibold hover:underline">Home</a>
            </li>
            <li>
              <a href="#" className="font-semibold hover:underline">Shop</a>
            </li>
            <li>
              <a href="#" className="font-semibold hover:underline">About</a>
            </li>
            <li>
              <a href="#" className="font-semibold hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-[#9F9F9F]">Help</p>

          <ul className="flex flex-col gap-12 mt-14">
            <li>
              <a href="#" className="font-semibold hover:underline">Payments Options</a>
            </li>
            <li>
              <a href="#" className="font-semibold hover:underline">Returns</a>
            </li>
            <li>
              <a href="#" className="font-semibold hover:underline">Privary Policies</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-[#9F9F9F]">Newsletter</p>

          <form className="flex gap-3 mt-14">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="border-b border-black"
            />
            <button
              className="border-b border-black uppercase font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 pt-9 border-t border-[#D9D9D9]">
        <small>2023 furniro. All rights reserved</small>
      </div>
    </footer>
  )
}