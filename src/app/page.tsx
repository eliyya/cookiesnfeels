import Nav from "@/components/nav";

export default async function Home() {
  return (
    <main className="h-screen w-screen">
      <Nav />
      <div className="h-full w-full grid grid-cols-9 bg-[#FFD1FB]">
        <div className="col-span-1 grid grid-flow-col justify-center bg-[#C288B0] ">
          <ul className="flex flex-col  gap-8 mt-20 ">
            <li className="font-black text-stone-50 ">inicio</li>
            <li>blog</li>
            <li>platillos</li>
            <li>perfil</li>
          </ul>
        </div>
        <div className="col-span-8 flex flex-col justify-center items-center">
          <main className="flex flex-col justify-center items-center bg">
          </main>
        </div>
      </div>
    </main>
  );
}
