"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
  const [showSidebar, setShowSidebar] = useState(false);
  const pathName = usePathname();
  const session = true;
  const isAdmin = true;
  return (
    <>
      <div className="w-full text-base items-center hidden lg:flex">
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
      <div className="mobileLinks lg:hidden ">
        <button
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
        >
          Menu
        </button>
        {showSidebar && (
          <div
            className="absolute top-[100px] h-[calc(100vh-100px)] bg-blue-700 right-0 w-1/2
          flex justify-center items-center gap-y-4 flex-col max-w-[400px] min-w-[300px] transition-all "
          >
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

            {session ? (
              <>
                {isAdmin && (
                  <Link href="/admin" className="font-semibold py-2">
                    Admin
                  </Link>
                )}
                <button className="bg-white text-black font-bold px-2 rounded-sm py-2">
                  Logout
                </button>
              </>
            ) : (
              <Link
                className="bg-white text-black font-bold  px-2 rounded-sm py-2"
                href=""
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Links;
