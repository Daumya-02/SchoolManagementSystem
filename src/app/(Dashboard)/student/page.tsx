import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";

const StudentPage = () => {
    return (
        <div className="flex flex-col lg:flex-row p-4 gap-4">
            {/* left */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white p-4 h-full rounded-md">
                <h1 className="text-xl font-semibold">Schedule (4A)</h1>
              <BigCalendar/>
              </div>
            </div>
            {/* right */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    );
};

export default StudentPage;
