import { useDispatch } from "react-redux";
import type { Product } from "../redux/cart/reducer";
import { AppDispatch } from "../redux";
import { addProduct } from "../redux/cart/actions";
import { currency } from "../utils/currenty";

interface ProductProps {
  product: Product;
}

export default function ProductCard(props: ProductProps) {
  const dispatch = useDispatch<AppDispatch>();

  const discountPercentage = Math.round(props.product.discount * 100);
  const hasDiscount = props.product.discount > 0;
  let price = props.product.price;

  if (hasDiscount) {
    price -= props.product.price * props.product.discount;
  }

  return (
    <div className="relative group flex flex-col gap-2 bg-[#F4F5F7]">
      { hasDiscount && (
        <div
          className="absolute right-6 top-6 z-10 size-12 flex items-center justify-center rounded-full font-semibold bg-[#E97171] text-white"
        >
          -{discountPercentage}%
        </div>
      ) }
      { props.product.isNew && (
        <div
          className="absolute right-6 top-6 z-10 size-12 flex items-center justify-center rounded-full font-semibold bg-[#2EC1AC] text-white"
        >
          New
        </div>
      ) }
      <img src={props.product.cover} className="h-[301px] w-full bg-black" />

      <div className="p-5">
        <h3 className="text-2xl line-clamp-1">{props.product.name}</h3>
        <p className="line-clamp-1">{props.product.description}</p>
        <div className="flex items-center justify-between">
          <strong className="text-xl font-semibold text-[#3A3A3A]">
            {currency.format(price)}
          </strong>

          { hasDiscount && (
            <small className="line-through font-semibold text-[#B0B0B0]">
              {currency.format(props.product.price)}
            </small>
          ) }
        </div>
      </div>

      <div className="hidden absolute group-hover:flex flex-col z-20 inset-0 items-center justify-center bg-[#3A3A3A]/70">
        <button
          onClick={() => dispatch(addProduct(props.product, 1))}
          className="px-12 py-3 bg-white z-10 text-[#B88E2F] hover:brightness-90"
        >
          Add to cart
        </button>

        <div className="flex items-center text-white gap-5 mt-6">
          <a href={`/shop/${props.product.name}`} className="flex items-center gap-1">
            <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/gridicons_share.svg" alt="" />
            <span>Share</span>
          </a>
          <a href={`/shop/${props.product.name}`} className="flex items-center gap-1">
            <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/compare-svgrepo-com+1.svg" alt="" />
            <span>Compare</span>
          </a>
          <a href={`/shop/${props.product.name}`} className="flex items-center gap-1">
            <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/Heart.svg" alt="Heart" />
            <span>Like</span>
          </a>
        </div>
      </div>
    </div>
  )
}