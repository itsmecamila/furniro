import Cart from "./Cart";

export default function Nav() {
  return (
    <nav className="flex justify-between p-9">
      <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/logo.svg" alt="Furniro's logo" />

      <ul className="flex items-center gap-16 font-semibold">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      <div className="flex items-center gap-6">
        <a href="#">
          <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/user.svg" alt="User" />
        </a>
        <Cart />
      </div>
    </nav>
  )
}