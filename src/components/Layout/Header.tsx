// components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white text-black">
      <nav className="container mx-auto flex items-center justify-between p-4 ">
        {/* Logo or site name */}
        <Link href="/" legacyBehavior>
          <a className="text-xl ">MonRent</a>
        </Link>

        {/* Navigation links */}
        <div className="space-x-4">
          <Link href="/" legacyBehavior>
            <a className="hover:underline">Home</a>
          </Link>
          {/* <Link href="/signup" legacyBehavior>
            <a className="hover:underline">Signup</a>
          </Link>

          <Link href="/login" legacyBehavior>
            <a className="hover:underline">Login</a>
          </Link> */}

         </div>
      </nav>
    </header>
  );
};

export default Header;
