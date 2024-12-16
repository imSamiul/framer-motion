import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="p-2">
      <Header />
      <h3>Welcome Home!</h3>
    </div>
  );
}
