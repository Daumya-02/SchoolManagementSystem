import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
    return (
        <div className="p-4 flex flex-col md:flex-row gap-4">
            {/* left side */}
            <div className="w-full lg:w-2/3 flex flex-col gap-6">
                {/* user cards */}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="student" />
                    <UserCard type="teacher" />
                    <UserCard type="parent" />
                    <UserCard type="staff" />
                </div>
                {/* middle charts */}
                <div className="flex flex-col lg:flex-row gap-4 ">
                    <div className="w-full lg:w-1/3 h-[450px] ">
                        <CountChart />
                    </div>{" "}
                    {/* count chart */}
                    <div className="w-full lg:w-2/3 h-[450px]">
                        <AttendanceChart />
                    </div>{" "}
                    {/*attendance chart */}
                </div>
                {/* bottom chart */}
                <div className="w-full h-[500px]">
                    <FinanceChart />
                </div>
            </div>
            {/* right side */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    );
};

export default AdminPage;
