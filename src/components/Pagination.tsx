const Pagination = () => {
  return (
    <div className='flex items-center justify-between my-2  text-gray-600'>
        <button disabled className="px-2 py-1 text-sm bg-slate-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed">Prev</button>
        <div className="flex gap-2 items-center">
            <button className="text-xs flex items-center justify-center px-2 bg-sky rounded-sm ">1</button>
            <button className="text-xs rounded-sm flex items-center justify-center px-2 ">2</button>
            <button className="text-xs rounded-sm flex items-center justify-center px-2 ">3</button>
            ...
            <button className="text-xs rounded-sm flex items-center justify-center px-2 ">6</button>
        </div>
        <button className="px-2 py-1 text-sm bg-slate-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
    </div>
  )
}

export default Pagination