import CheckoutForm from "../components/CheckoutForm";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Checkout() {
  return (
    <>
      <Nav />

      <header className="relative h-80 bg-banner">
        <div className="absolute inset-0 flex flex-col items-center justify-center  bg-white/50">
          <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/logo-simbolo.png" alt="Logo" />
          <h1 className="text-5xl">Checkout</h1>
          <ol className="flex items-center mt-2">
            <li>
              <a href="/" className="font-semibold">
                Home
              </a>
            </li>
            <li>
              <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/arrow-down.svg" alt="" />
            </li>
            <li>
              <a href="/checkout">
                Checkout
              </a>
            </li>
          </ol>
        </div>
      </header>

      <CheckoutForm />

      <Footer />
    </>
  )
}