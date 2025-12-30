import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";

const ParentPage = () => {
    return (
        <div className="flex flex-col flex-1 lg:flex-row p-4 gap-4">
            {/* left */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white p-4 lg:min-h-screen h-full rounded-md">
                <h1 className="text-xl font-semibold">Schedule (JOHN DOE)</h1>
              <BigCalendar/>
              </div>
            </div>
            {/* right */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
                <Announcements />
            </div>
        </div>
    );
};

export default ParentPage;
