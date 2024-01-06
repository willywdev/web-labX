import Image from "next/image";

function Header() {
  return (
    <div className='flex justify-end'>
      <header className='flex justify-between w-1/2 p-4 border-2 border-white'>
        <div className='flex items-center gap-2'>
          <h1 className='text-xl font-bold text-[#07F49E]'>web</h1>
          <Image
            src='/logo.svg'
            width='82'
            height='82'
            alt='web-labX'
            className='border-2 border-[#004D2F] rounded-full'
          />
          <h1 className='text-xl font-bold text-[#07F49E]'>labX</h1>
        </div>
      </header>
    </div>
  );
}

export default Header;
