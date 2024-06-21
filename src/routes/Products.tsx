import ProductsList from "../components/ProductsList";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Products() {
  return (
    <>
      <Nav />

      <main className="my-20 mx-24">
        <ProductsList />
      </main>

      <Footer />
    </>
  )
}