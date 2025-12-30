import Link from "next/link";

const Homepage = () => {
    return (
        <div className="min-h-screen bg-lightSky flex items-center justify-center p-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">
                    School Management System
                </h1>
                <p className="text-lg text-gray-600 mb-12">
                    Select your role to continue
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md mx-auto">
                    <Link
                        href="/admin"
                        className="bg-sky hover:border hover:border-black active:scale-95 text-white font-semibold py-4 px-6 rounded-lg shadow-md transition duration-300 transform"
                    >
                        Admin
                    </Link>
                    <Link
                        href="/parent"
                        className="bg-purrple hover:border hover:border-black active:scale-95 text-white font-semibold py-4 px-6 rounded-lg shadow-md transition duration-300 transform"
                    >
                        Parent
                    </Link>
                    <Link
                        href="/student"
                        className="bg-ellow hover:border hover:border-black active:scale-95 text-gray-800 font-semibold py-4 px-6 rounded-lg shadow-md transition duration-300 transform"
                    >
                        Student
                    </Link>
                    <Link
                        href="/teacher"
                        className="bg-lightPurrple hover:border hover:border-black active:scale-95 text-gray-800 font-semibold py-4 px-6 rounded-lg shadow-md transition duration-300 transform"
                    >
                        Teacher
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
