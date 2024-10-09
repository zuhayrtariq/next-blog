"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
const Links = () => {
  const pathName = usePathname();
  const session = true;
  const isAdmin = false;
  return (
    <div className="w-full  flex text-base items-center">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.title}
          className={`px-4 mx-2 rounded-full py-2 font-semibold ${
            pathName == link.path ? "bg-white  text-black" : ""
          }`}
        >
          {link.title}
        </Link>
      ))}
      <div className="flex items-center gap-6 ml-6">
        {session ? (
          <>
            {isAdmin && (
              <Link href="/admin" className="font-semibold py-2">
                Admin
              </Link>
            )}
            <button className="bg-white text-black font-bold h-full px-2 rounded-sm py-2">
              Logout
            </button>
          </>
        ) : (
          <Link
            className="bg-white text-black font-bold h-full px-2 rounded-sm py-2"
            href=""
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Links;
