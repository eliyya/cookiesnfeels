import Image from "next/image";


export default async function Home() {
  return (
    <main className="h-screen w-screen">
      <header className="">
        <nav className="flex ">
          <div className="flex-1 bg-gray-800 text-white text-center p-4">
            <a href="/home">Home</a>
          </div>
          <div className="flex-1 bg-gray-800 text-white text-center p-4">
            <a href="/about">resetas</a>
          </div>
          <div className="flex-1 bg-gray-800 text-white text-center p-4">
            <a href="/contact">perfil</a>
          </div>
        </nav>
      </header>
      <section className="flex justify-center items-center h-full">
        <main className="grid grid-col grid-cols-3 justify-center items-center  w-72 h-72">
          <Image src="/4c34f0e70d69de7ca67c61cc6457d0b1.jpg" height={100} width={100} alt="imagen de comida" className="col-span-1 col-start-2"></Image>
          <div className=" col-span-2 col-start-2 ">
            <h1>Recetas</h1>
            <p>Recetas de comida</p>
          </div>
        </main>
      </section>
    </main>
  );
}
