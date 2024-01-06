function Island({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex items-center gap-2 px-6 py-4 rounded-lg bg-gradient-to-b from-gray-700 to-gray-900 border border-[#07F49E] shadow-inner'>
      {children}
    </div>
  );
}

export default Island;
