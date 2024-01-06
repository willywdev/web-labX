import Image from "next/image";
import Link from "next/link";
import Island from "../Island";
import { Github } from "lucide-react";

function Header() {
  return (
    <header className='flex items-center w-full mt-6 justify-evenly'>
      <div></div>
      <Link href='/'>
        <Island>
          <h1 className='text-xl font-bold text-[#07F49E]'>web</h1>
          <Image
            src='/logo.svg'
            width='82'
            height='82'
            alt='web-labX'
            className='rounded-full'
          />
          <h1 className='text-xl font-bold text-[#07F49E]'>labX</h1>
        </Island>
      </Link>
      <aside>
        <Link href='https://github.com/willywdev/web-labX' target='_blank'>
          <Github />
        </Link>
      </aside>
    </header>
  );
}

export default Header;
