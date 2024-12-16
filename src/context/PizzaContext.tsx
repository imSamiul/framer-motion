import * as React from "react";

export interface PizzaContext {
  pizza: { base: string; toppings: string[] };
  addBase: (base: string) => void;
  addTopping: (topping: string) => void;
}

const PizzaContext = React.createContext<PizzaContext | null>(null);

export function PizzaProvider({ children }: { children: React.ReactNode }) {
  const [pizza, setPizza] = React.useState<{
    base: string;
    toppings: string[];
  }>({ base: "", toppings: [] });

  const addBase = (base: string) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping: string) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <PizzaContext.Provider value={{ pizza, addBase, addTopping }}>
      {children}
    </PizzaContext.Provider>
  );
}

export function usePizza() {
  const context = React.useContext(PizzaContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
