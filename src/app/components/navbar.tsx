'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-black dark:text-white text-lg font-bold">
          Home
        </Link>
        <Link href="/portfolio" className="text-black dark:text-white text-lg font-bold">
          Portfolio
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
