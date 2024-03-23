import Image from 'next/image'

export default function nav() {
    return (
        <nav className=" h-16 flex  bg-[#EBB9E2]">
            <div className="">
                <Image
                    src="/Component 2.svg"
                    alt="Picture of the author"
                    width={70}
                    height={50}
                    className=""
                />
            </div>
        </nav>
    )

}