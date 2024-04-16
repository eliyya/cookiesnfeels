import Reset from "@/components/vista-reseta/page";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="h-screen w-full">
      <header className="h-16 w-full">
        <nav className="fixed w-full bg-slate-600  ">
          <ul className="flex justify-between items-center">
            <li className="m-4 p-2 rounded-lg bg-violet-900">
              <Link href={"#"}>Home</Link>
            </li>
            <li className="m-4 p-2 rounded-lg bg-violet-900">
              <Link href={"#"}>Recetas</Link>
            </li>
            <li className="m-4 p-2 rounded-lg bg-violet-900">
              <Link href={"#"}>usuario</Link>
            </li>
          </ul>
        </nav>
      </header>


      <section className="flex justify-center items-center h-full">
        <Reset/>
        {/* <main className="w-72 h-72 grid  grid-rows-4 justify-center gap-2 items-center justify-items-center bg-violet-700 rounded-2xl  border-spacing-5 border-sky-900">
          <Image src="/cσƒƒε☁☕.jpeg" height={60} width={90} alt="imagen de comida" className=" row-start-1 row-span-2   rounded-xl w-24 "></Image>
          <div className="row-start-3 ">
            <h1>Recetas</h1>
            <p>Recetas de comida</p>
          </div>
          <div className="">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Ver recetas
            </button>
          </div>
        </main> */}
      </section>
    </main>
  );
}
