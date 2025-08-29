import Image from "next/image";
import { Hello } from "../components/hello";

export default function Home() {
  // throw new Error("Not implemented")
  console.log('What am I? --- client or Server?')
  return (
    <>
      <h1>Wellcome to my cur10us website</h1>
      <Hello />
    </>
  );
}
