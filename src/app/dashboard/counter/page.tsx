import { CartCounter } from "@/shopping-cart";
import { IoCart } from "react-icons/io5";


export const metadata = {
  title: "Counter Page",
  description: "A simple counter page with increment and decrement functionality.",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span className="inline-flex items-center gap-2 text-4xl font-semibold">
        <IoCart className="text-blue-800" />
        Carrito de Compras
      </span>
      <CartCounter initialCount={20} />
    </div>
  );
}
