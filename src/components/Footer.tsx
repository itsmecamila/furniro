import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"

const newsletterSchema = z.object({
  email: z.string().email()
});

export default function Footer() {
  const newsletterForm = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema)
  });

  function onSubmitNewsletter(data: z.infer<typeof newsletterSchema>) {
    console.log(data);

    newsletterForm.reset();
  }

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
              <li>
                <a href="https://www.facebook.com/" className="flex items-center justify-center size-[34px] rounded-full bg-white shadow-lg">
                  <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/facebook.svg" alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" className="flex items-center justify-center size-[34px] rounded-full bg-white shadow-lg">
                  <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/instagram.svg" alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/" className="flex items-center justify-center size-[34px] rounded-full bg-white shadow-lg">
                  <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/twitter.svg" alt="Twitter" />
                </a>
              </li>
              <li >
                <a href="https://www.linkedin.com" className="flex items-center justify-center size-[34px] rounded-full bg-white shadow-lg">
                  <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/linkedin.svg" alt="Linkedin" />
                </a>
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

          <form
            onSubmit={newsletterForm.handleSubmit(onSubmitNewsletter)}
            className="flex items-start gap-3 mt-14"
          >
            <div>
              <input
                type="text"
                id="email"
                placeholder="Enter Your Email Address"
                className="border-b border-black"
                {...newsletterForm.register("email")}
              />
              {newsletterForm.formState.errors.email && <p className="text-red-600">{newsletterForm.formState.errors.email.message}</p>}
            </div>
            <button
              type="submit"
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