const Announcements = () => {
  return (
    <div className="bg-white rounded-md p-4">
        <div className="flex items-center justify-between">
            <h2 className="font-bold text-lg uppercase">Announcements</h2>
            <span className="text-sm text-gray-500 cursor-pointer">view all</span>
        </div>
        <div className="flex flex-col gap-3 mt-3">
            <div className="px-3 py-3 border-2 border-purrple rounded-md bg-lightPurrple ">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-600 ">Lorem ipsum dolor sit.</h3>
                    <span className="text-xs text-gray-400 bg-white/80 px-1 py-1 rounded-full">2020-02-31</span>
                </div>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, consectetur.</p>
            </div>
            <div className="px-3 py-3 border-2 border-ellow rounded-md bg-lightEllow ">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-600 ">Lorem ipsum dolor sit.</h3>
                    <span className="text-xs text-gray-400 bg-white/80 px-1 py-1 rounded-full">2020-02-31</span>
                </div>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, consectetur.</p>
            </div>
            <div className="px-3 py-3 border-2 border-sky rounded-md bg-lightSky ">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-600 ">Lorem ipsum dolor sit.</h3>
                    <span className="text-xs text-gray-400 bg-white/80 px-1 py-1 rounded-full">2020-02-31</span>
                </div>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, consectetur.</p>
            </div>
        </div>
    </div>
  )
}

export default Announcements