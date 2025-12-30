import Image from "next/image"

const UserCard = ({type}:{type:string}) => {
  return (
    <div className='rounded-md odd:bg-purrple even:bg-ellow px-4 py-3 flex-1 min-w-[123px]'>
        <div className="flex items-center justify-between">
            <span className="bg-white px-2 rounded-full text-green-400 text-xs ">2024/25</span>
            <Image src="/more.png" alt="" height={20} width={20} className="cursor-pointer"/>
        </div>
        <h1 className="text-xl font-bold my-3">1,234</h1>
        <h2 className="capitalize text-sm font-light text-gray-600">{type}s</h2>
    </div>
  )
}

export default UserCard