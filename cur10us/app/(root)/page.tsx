
import Hello from "../components/hello";

export default function Home() {
  console.log("What am I doing here? -- Server/Client Component?");
  return (
    <>
      <h1 className="text-3xl">Wellcome to cur10us</h1>
      <Hello />
    </>
  );
}
