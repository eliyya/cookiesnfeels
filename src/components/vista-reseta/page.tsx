import Image from 'next/image'


export default function reset() {
    return (
        <main className="w-72 h-72 grid  grid-rows-4 justify-center gap-2 items-center justify-items-center bg-violet-700 rounded-2xl  border-spacing-5 border-sky-900">
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
        </main>
    )

}