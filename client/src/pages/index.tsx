import Image from "next/image";
import { Inter } from "next/font/google";
import AddPersonForm from "./components/form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-10/12 mx-auto">
      <AddPersonForm />
    </main>
  );
}
