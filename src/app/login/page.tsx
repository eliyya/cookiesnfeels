import AuthButtonClient from '../components/auth-button-client' // componente 👈

export default function PageLogin() {
    return (
        <main className="h-screen w-screen  flex justify-center items-center">
            <div className="flex justify-center items-center w-4/5 h-4/5 ">
                <form action="" className="grid grid-cols-3 gap-4 w-full h-full">
                    <h1 className="col-start-1  col-span-3   text-red-400 text-2xl text-center font-semibold ">login</h1>
                    <input type="text" placeholder="username" className="col-start-1 col-span-3" />
                    <input type="password" placeholder="password" className="col-start-1 col-span-3" />
                    <button className="col-span-3 text-black">login</button>
                    <button className="col-span-3 text-black">register</button>
                    <AuthButtonClient session={null} ></AuthButtonClient>
                    <button type="button" className="col-start-2 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                            <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                        </svg>
                        Sign in with Facebook
                    </button>

                </form>
            </div>
        </main>
    )
}