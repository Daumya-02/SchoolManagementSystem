import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import Table from "@/components/Table";
import { role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Teacher = {
  id:number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
}

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden xl:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden xl:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const TeacherList = () => {

    const renderRow = (item : Teacher) =>(
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lightPurrple" >
          <td className="flex items-center gap-3 p-4">
            <Image alt="" src={item.photo} width={40} height={40} className="md:hidden lg:block w-10 h-10 rounded-full object-cover"/>
            <div className="flex flex-col">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-xs text-gray-500">{item.email}</p>
            </div>
          </td>
          <td className="hidden md:table-cell text-blue-950">{item.teacherId}</td>
          <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
          <td className="hidden md:table-cell text-blue-950">{item.classes.join(",")}</td>
          <td className="hidden xl:table-cell">{item.phone}</td>
          <td className="hidden xl:table-cell text-blue-950">{item.address}</td>
          <td>
            <div className="flex items-center gap-2">
              <Link href={`/list/teachers/${item.id}`}>
                <button className="w-7 h-7 flex items-center justify-center rounded-full bg-sky">
                  <Image src="/view.png" alt="" width={16} height={16}/>
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
                    All Teachers
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
            <Table columns={columns} renderRow={renderRow} data={teachersData}/>
            {/* BOTTOM */}
            <Pagination/>
        </div>
    );
};

export default TeacherList;
