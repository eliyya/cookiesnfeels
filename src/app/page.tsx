import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'

//components
import Image from "next/image";
import Nav from "./components/nav";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  if (session == null) {
    redirect('/login')

  }
  const { data: posts } = await supabase.from('posts').select()


  // console.log(posts)
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
            {/* <pre>
              {
                JSON.stringify(posts, null, 2)
              }
            </pre> */}



          </main>

        </div>

      </div>

    </main>
  );
}
