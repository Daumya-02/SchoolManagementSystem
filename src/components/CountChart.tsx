"use client";
import Image from "next/image";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

const data = [
    {
        name: "Total",
        count: 106,
        fill: "white",
    },
    {
        name: "Girls",
        count: 32,
        fill: "#FAE27C",
    },
    {
        name: "Boys",
        count: 53,
        fill: "#C3EBFA",
    },
];

const CountChart = () => {
    return (
        <div className="bg-white rounded-md w-full h-full p-4">
            {/* title */}
            <div className="flex justify-between items-center">
                <h1 className="uppercase font-bold text-lg">Students</h1>
                <Image
                    src="/moredark.png"
                    alt=""
                    width={20}
                    height={20}
                    className="cursor-pointer"
                />
            </div>
            {/* chart */}
            <div className="w-full h-[75%] relative">
                <ResponsiveContainer>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                        <RadialBar background dataKey="count"/>
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image
                    src="/maleFemale.png"
                    alt=""
                    width={50}
                    height={50}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            </div>
            {/* legend */}
            <div className="flex items-center justify-around">
                <div className="flex flex-col items-center gap-1">
                    <div className="w-5 h-5 bg-sky rounded-full"></div>
                    <h2 className="font-semibold mt-2">1,234</h2>
                    <p className="text-sm text-gray-700">Boys</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="w-5 h-5 bg-ellow rounded-full"></div>
                    <h2 className="font-semibold mt-2">1,039</h2>
                    <p className="text-sm text-gray-700">girls</p>
                </div>
            </div>
        </div>
    );
};

export default CountChart;
