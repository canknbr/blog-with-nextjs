import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
function Header() {
  return (
    <header className="flex justify-between space-x-2 px-10 py-5 font-bold">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="logo"
            className="rounded-full cursor-pointer hover:opacity-80 transition duration-150 ease-out"
            width={50}
            height={50}
          />
        </Link>
        <h1>My App</h1>
      </div>
      <div>
        <Link href="/login">
          <h1 className="text-[#BB2649] hover:underline">Login</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
