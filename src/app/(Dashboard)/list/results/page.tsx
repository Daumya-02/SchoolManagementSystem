import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import Table from "@/components/Table";
import {resultsData, role} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Result = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  type: "exam" | "assignment";
  date: string;
  score: number;
}

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Student",
    accessor: "student",
  },
  {
    header: "Score",
    accessor: "score",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];
const ResultList = () => {

    const renderRow = (item : Result) =>(
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lightPurrple" >
          <td className="flex items-center gap-3 p-4">
            {item.subject}
          </td>
          <td>{item.student}</td>
          <td className="hidden md:table-cell text-blue-950">{item.score}</td>
          <td className="hidden md:table-cell">{item.teacher}</td>
          <td className="hidden md:table-cell text-blue-950">{item.class}</td>
          <td className="hidden md:table-cell">{item.date}</td>
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
                    All Results
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
            <Table columns={columns} renderRow={renderRow} data={resultsData}/>
            {/* BOTTOM */}
            <Pagination/>
        </div>
    );
};

export default ResultList;
