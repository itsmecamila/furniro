export interface Product {
  id: string;
  name: string;
  images: string[];
  cover: string;
  description: string;
  isNew: boolean;
  discount: number;
  price: number;
  category: string;
  tags: string[];
}

interface CartState {
  products: (Product & { quantity: number })[];
}

const cartState: CartState = {
  products: []
}

export default function cartReducer(state = cartState, action: any): CartState {
  switch (action.type) {
    case "CLEAN":
      return { ...state, products: [] };
    case "ADD_PRODUCT":
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      const products = [...state.products];

      if (index !== -1) {
        products[index].quantity += action.payload.quantity;
        return { ...state, products };
      }

      products.push(action.payload);
      return { ...state, products };
    case "REMOVE_PRODUCT":
      const idx = state.products.findIndex(
        (product) => product.id === action.payload.productId
      );

      const prods = [...state.products];

      if (idx !== -1) {
        prods[idx].quantity -= action.payload.quantity;
      }

      if (prods[idx].quantity <= 0) {
        return { ...state, products: state.products.filter(product => product.id !== action.payload.productId) };
      }

      return { ...state, products: prods };
    default:
      return state;
  }
}