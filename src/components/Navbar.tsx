import React from "react";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4">
            {/* search bar */}
            <div className="hidden md:flex items-center bg-white rounded-full ring-1 px-4 py-1 gap-2 ring-gray-300">
                <Image src="/search.png" alt="" width={14} height={14} />
                <input type="text" placeholder="Search..." className="outline-none bg-transparent px-2 w-[200px]"/>
            </div>
            {/* icons and user */}
            <div className="flex items-center justify-end gap-2 w-full">
                <div className="bg-white rounded-full flex items-center justify-center cursor-pointer w-7 h-7 mx-2">
                    <Image src="/message.png" alt="" width={23} height={23} />
                </div>
                <div className="relative bg-white rounded-full flex items-center justify-center cursor-pointer w-7 h-7 mx-2">
                    <Image src="/announcement.png" alt="" width={23} height={23} />
                    <div className="bg-purple-500 rounded-full absolute -top-3 -right-3 text-sm flex items-center justify-center w-5 h-5">1</div>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm leading-3 font-medium">JOHN DOE</span>
                    <span className="text-xs text-gray-600 text-right">Admin</span>
                </div>
                <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full"/>
            </div>
        </div>
    );
};

export default Navbar;
