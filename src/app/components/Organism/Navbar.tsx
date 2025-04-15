import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-16 border-b border-gray-200 bg-white">
      <div className="flex items-center space-x-2">
        <span className="text-black text-3xl font-bold">✦ Positivus</span>
      </div>
      <div className="hidden md:flex space-x-6 text-gray-700 items-center">
        <Link href="#">
          <span className="hover:text-black">About us</span>
        </Link>
        <Link href="#">
          <span className="hover:text-black">Services</span>
        </Link>
        <Link href="#">
          <span className="hover:text-black">Use Cases</span>
        </Link>
        <Link href="#">
          <span className="hover:text-black">Pricing</span>
        </Link>
        <Link href="#">
          <span className="hover:text-black">Blog</span>
        </Link>
        <button className="border border-gray-400 px-4 py-2 rounded-lg hover:bg-gray-100 text-black">
          Request a quote
        </button>
      </div>
    </nav>
  );
}
