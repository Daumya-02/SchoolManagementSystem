import Image from "next/image";

const SearchBar = () => {
    return (
        <div className="w-full md:w-auto flex items-center bg-white rounded-full ring-1 px-4 py-1 gap-2 ring-gray-300">
            <Image src="/search.png" alt="" width={14} height={14} />
            <input
                type="text"
                placeholder="Search..."
                className="outline-none bg-transparent px-2 w-[200px]"
            />
        </div>
    );
};

export default SearchBar;
