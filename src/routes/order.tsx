import { createFileRoute } from "@tanstack/react-router";
import { usePizza } from "../context/PizzaContext";

export const Route = createFileRoute("/order")({
  component: RouteComponent,
});

function RouteComponent() {
  const { pizza } = usePizza();
  return (
    <div className="container order">
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </div>
  );
}
