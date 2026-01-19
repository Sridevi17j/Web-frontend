import Image from "next/image";
import Link from "next/link";

export default function Header() {
  console.log("Debug: Header rendered");
  return (
    <header className="bg-gray-dark rounded-2xl shadow-lg mx-4 my-2">
      <div className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/logo.png"
            alt="ProMarshal Logo"
            width={57}
            height={57}
            className="object-contain"
          />
          <h1 className="text-3xl font-medium text-white">ProMarshal</h1>
        </div>

        <nav className="flex items-center gap-12">
          <Link
            href="#features"
            className="text-2xl font-bold text-white hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="#contact"
            className="text-2xl font-bold text-white hover:text-primary transition-colors"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
