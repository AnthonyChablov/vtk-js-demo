import type { Route } from "./+types/home";
import { Demo } from "../demo/demo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "vtk.js demo" },
    { name: "description", content: "Welcome to vtk.js demo!" },
  ];
}

export default function Home() {
  return <Demo />;
}
