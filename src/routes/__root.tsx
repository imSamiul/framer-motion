import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/Header";
import { PizzaContext } from "../context/PizzaContext";

interface MyRouterContext {
  pizza: PizzaContext;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
