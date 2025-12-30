import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import Table from "@/components/Table";
import {eventsData, role} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Event = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
}

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Start Time",
    accessor: "startTime",
    className: "hidden md:table-cell",
  },
  {
    header: "End Time",
    accessor: "endTime",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const EventList = () => {

    const renderRow = (item : Event) =>(
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lightPurrple" >
          <td className="flex items-center gap-3 p-4">
            {item.title}
          </td>
          <td>{item.class}</td>
          <td className="hidden md:table-cell text-blue-950">{item.date}</td>
          <td className="hidden md:table-cell">{item.startTime}</td>
          <td className="hidden md:table-cell text-blue-950">{item.endTime}</td>
          <td>
            <div className="flex items-center gap-2">
              <Link href={`/list/teachers/${item.id}`}>
                <button className="w-7 h-7 flex items-center justify-center rounded-full bg-sky">
                  <Image src="/edit.png" alt="" width={16} height={16}/>
                </button>
              </Link>
              {role === "admin" && (
                <button className="w-7 h-7 flex items-center justify-center rounded-full bg-purrple">
                <Image src='/delete.png' alt="" height={16} width={16}/>
              </button>
              )}
            </div>
          </td>
        </tr>
      )

    return (
        <div className="bg-white p-4 m-4 rounded-md flex-1 mt-1 ">
            {/* TOP */}
            <div className="flex items-start justify-between">
                <h1 className="hidden md:block font-semibold text-xl">
                    All Events
                </h1>
                <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
                    <SearchBar />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 bg-ellow rounded-full flex items-center justify-center p-1">
                            <Image
                                alt=""
                                src="/filter.png"
                                width={14}
                                height={14}
                            />
                        </button>
                        <button className="w-8 h-8 bg-ellow rounded-full flex items-center justify-center p-1">
                            <Image
                                alt=""
                                src="/filter.png"
                                width={14}
                                height={14}
                            />
                        </button>
                        <button className="w-8 h-8 bg-ellow rounded-full flex items-center justify-center p-1">
                            <Image
                                alt=""
                                src="/filter.png"
                                width={14}
                                height={14}
                            />
                        </button>
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table columns={columns} renderRow={renderRow} data={eventsData}/>
            {/* BOTTOM */}
            <Pagination/>
        </div>
    );
};

export default EventList;
