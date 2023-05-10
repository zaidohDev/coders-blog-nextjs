import Link from "next/link";
import Image from 'next/image';

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between py-6">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image
              src="/images/logo.png"
              width={60}
              height={55}
              alt="logo"
            />
            <span className="font-bold ml-0 text-primary" >Reread Me</span>
          </div>
        </Link>
        <ul className="flex items-center">
          <li className="mr-6 font-medium text-gray-600">
            <a href="#">Products</a>
          </li>
          <li className="mr-6 font-medium text-gray-600">
            <a href="#">Pricing</a>
          </li>
          <li className="mr-6 font-medium text-gray-600">
            <a href="#">Docs</a>
          </li>
          <li className="mr-6 font-medium text-gray-600">
            <a href="#">Company</a>
          </li>
        </ul>

        <ul className="flex items-center" >
          <li className="mr-6 font-medium text-gray-600">
            <a href="#" className="hover:text-gray-400">Log in</a>
          </li>
          <li className="mr-6 font-medium text-gray-600">
            <a href="#" className="bg-primary hover:bg-primary-dark py-2 px-4 rounded-sm text-white">Sign up</a>
          </li>
        </ul>
      </nav>
    </>
  )
}