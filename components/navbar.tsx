
import { Link } from "@nextui-org/link";


import Image from "next/image";

export const Navbar = () => {

  return (
    <div className="w-full flex justify-center">
      <div className="dark:border-none border rounded-full w-[1000px] py-4 px-10 flex justify-between items-center mt-4 bg-[#272727] sticky z-30">
        <Image src="/logo.svg" alt="" width={100} height={100}/>
        <Link href="https://forms.gle/73U41PNJjZJdPgGh6">
          <div className="flex gap-4 bg-white text-black px-3 py-2 rounded-full font-semibold text-xl shadow-md">
            Register
          </div>
        </Link>

      </div>
    </div>
    
  )
};
