    "use client";

    import { useState, useMemo } from "react";
    import { FaArrowUp, FaArrowDown } from "react-icons/fa";
    import AstroResultsSelector from "./AstroResultSelector";
    import AstroSearchBox from "./AstroSearchbox";
    import AstroDateFilter from "./AstroDateFilter";

    const Reviews = () => {
    const [data, setData] = useState([
        {
        name: "John Doe",
        walletAmount: 100,
        phone: "123-456-7890",
        callStart: "10:00 AM",
        callEnd: "10:30 AM",
        status: "Success",
        astrologerName: "Jane Smith",
        astrologerPhone: "987-654-3210",
        date: "2024-01-01",
        },
        {
            name: "John Doe",
            walletAmount: 100,
            phone: "123-456-7890",
            callStart: "10:00 AM",
            callEnd: "10:30 AM",
            status: "Success",
            astrologerName: "Jane Smith",
            astrologerPhone: "987-654-3210",
            date: "2024-01-01",
        },
        {
            name: "John Doe",
            walletAmount: 100,
            phone: "123-456-7890",
            callStart: "10:00 AM",
            callEnd: "10:30 AM",
            status: "Success",
            astrologerName: "Jane Smith",
            astrologerPhone: "987-654-3210",
            date: "2024-01-01",
        },
        {
            name: "John Doe",
            walletAmount: 100,
            phone: "123-456-7890",
            callStart: "10:00 AM",
            callEnd: "10:30 AM",
            status: "Success",
            astrologerName: "Jane Smith",
            astrologerPhone: "987-654-3210",
            date: "2024-01-01",
        },
        {
            name: "John Doe",
            walletAmount: 100,
            phone: "123-456-7890",
            callStart: "10:00 AM",
            callEnd: "10:30 AM",
            status: "Success",
            astrologerName: "Jane Smith",
            astrologerPhone: "987-654-3210",
            date: "2024-01-01",
        },
        {
            name: "John Doe",
            walletAmount: 100,
            phone: "123-456-7890",
            callStart: "10:00 AM",
            callEnd: "10:30 AM",
            status: "Success",
            astrologerName: "Jane Smith",
            astrologerPhone: "987-654-3210",
            date: "2024-01-01",
        },
        // Add more sample data as needed
    ]);

    const [resultsPerPage, setResultsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortColumn, setSortColumn] = useState("srno");
    const [sortDirection, setSortDirection] = useState("asc");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // Memoized filtered data
    const filteredData = useMemo(() => {
        return data
        .filter((item) =>
            Object.values(item).some((value) =>
            String(value).toLowerCase().includes(searchTerm)
            )
        )
        .filter((item) => {
            if (!startDate && !endDate) return true;
            const itemDate = new Date(item.date);
            const start = startDate ? new Date(startDate) : null;
            const end = endDate ? new Date(endDate) : null;

            return (!start || itemDate >= start) && (!end || itemDate <= end);
        });
    }, [data, searchTerm, startDate, endDate]);

    // Memoized paginated data
    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * resultsPerPage;
        return filteredData.slice(startIndex, startIndex + resultsPerPage);
    }, [filteredData, currentPage, resultsPerPage]);

    // Sorting logic
    const handleSort = (column) => {
        const direction =
        sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
        setSortColumn(column);
        setSortDirection(direction);

        const sortedData = [...data].sort((a, b) => {
        if (a[column] < b[column]) return direction === "asc" ? -1 : 1;
        if (a[column] > b[column]) return direction === "asc" ? 1 : -1;
        return 0;
        });
        setData(sortedData);
    };

    const handleSearch = (event) => setSearchTerm(event.target.value.toLowerCase());

    const handleDateFilter = ({ startDate, endDate }) => {
        setStartDate(startDate);
        setEndDate(endDate);
    };

    const totalPages = Math.ceil(filteredData.length / resultsPerPage);

    const calculateDuration = (start, end) => {
        const [startHour, startMinute] = start.split(/[:\s]/).map(Number);
        const [endHour, endMinute] = end.split(/[:\s]/).map(Number);

        const durationInMinutes =
        (endHour * 60 + endMinute) - (startHour * 60 + startMinute);
        const hours = Math.floor(durationInMinutes / 60);
        const minutes = durationInMinutes % 60;

        return `${hours}h ${minutes}m`;
    };

    

    return (
        <div>
        <h1 className=" text-[#3C0184] dark:text-[#22c7d5] font-bold font-heading text-[25px] mt-3 ml-[130px]">Reviews</h1>
    <div className=" m-[15px] border border-purple-500 dark:border-[#22c7d5] rounded-[8px] ml-[120px]">
        <div className="p-4 bg-[#f8f9fa] dark:bg-[#0e1726] text-[#212529] dark:text-[#888ea8] rounded-lg shadow-md">
            {/* Top Section */} 
            <div className="flex flex-wrap justify-between items-center mb-4">
            <AstroDateFilter onFilter={(dates) => handleDateFilter(dates)} />

    <div className="flex flex-wrap items-center gap-6">
    <AstroResultsSelector
    resultsPerPage={resultsPerPage}
    onChange={(e) => setResultsPerPage(Number(e.target.value))}
    />
    <AstroSearchBox searchTerm={searchTerm} onSearchChange={handleSearch} />
    </div>

        </div>

            {/* Table */}
            <div className="overflow-x-auto">
            <table className="w-full table-auto shadow-md border-collapse min-w-[1500px]">
                <thead>
                <tr className="  bg-[#e9ecef] rounded-md dark:bg-gradient-to-r from-[#1e2737] to-[#0e1726] text-[#495057] dark:text-[#bfc9d4]">
                    <th className="px-6 py-2 whitespace-nowrap">SR No.</th>
                    <th
                    className="px-6 py-2 whitespace-nowrap cursor-pointer"
                    onClick={() => handleSort("date")}
                    >
                    Date
                    {sortColumn === "date" && (
                        sortDirection === "asc" ? (
                        <FaArrowUp className="inline ml-2 text-green-500" />
                        ) : (
                        <FaArrowDown className="inline ml-2 text-red-500" />
                        )
                    )}
                    </th>
                    <th className="px-6 py-2 whitespace-nowrap">User Name</th>
                    <th className="px-6 py-2 whitespace-nowrap">Call/Chat</th>
                    <th className="px-6 py-2 whitespace-nowrap">Duration</th>
                    <th className="px-6 py-2 whitespace-nowrap">Status</th>
                    
                    <th className="px-6 py-2 whitespace-nowrap">Rating</th>
                    <th className="px-6 py-2 whitespace-nowrap">Review</th>


                    
                </tr>
                </thead>
                <tbody>
                {paginatedData.map((item, index) => (
                    <tr
                    key={index}
                    className="hover:bg-[#e2d4f1] dark:hover:bg-[#1e2737] transition-colors"
                    >
                    <td className="px-6 py-2 text-center">{index + 1}</td>
                    <td className="px-6 py-2 text-center">{item.date}</td>
                    <td className="px-6 text-center py-2">{item.name}</td>
                    <td className="px-6 text-center py-2">{item.name}</td>
                    <td className="px-6 text-center py-2">
                        {calculateDuration(item.callStart, item.callEnd)}
                    </td>
                    <td className="px-6 text-center py-2">{item.status}</td>
                    <td className="px-6 text-center py-2">{item.status}</td>
                    <td className="px-6 text-center py-2">{item.status}</td>



                    
                    </tr>
                ))}
                </tbody>
            </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
            <span className="text-purple-500 dark:text-[#22c7d5] border border-purple-500 dark:border-[#22c7d5] rounded-[8px] px-4 py-2">
            Showing page <span className="font-bold font-heading">{currentPage}</span> of <span className="font-bold font-heading">{totalPages}</span>
            </span>
            <div className="flex items-center gap-2">
                <button
                className="px-3 py-1 shadow-md bg-white dark:bg-[#1e2737] text-purple-500 dark:text-[#22c7d5] rounded-md hover:bg-purple-200 dark:hover:bg-[#2d3747]"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                >
                &lt;
                </button>
                {[...Array(totalPages)].map((_, i) => (
                <button
                    key={i}
                    className={`px-3 py-1 rounded-md ${
                    currentPage === i + 1
                        ? "bg-purple-500 dark:bg-[#22c7d5] text-white"
                        : "bg-white shadow-md dark:bg-[#1e2737] text-[#888ea8] hover:bg-[#2d3747]"
                    }`}
                    onClick={() => setCurrentPage(i + 1)}
                >
                    {i + 1}
                </button>
                ))}
                <button
                className="px-3 py-1 shadow-md bg-white dark:bg-[#1e2737] text-purple-500 dark:text-[#22c7d5] rounded-md  hover:bg-purple-200 dark:hover:bg-[#2d3747]"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                >
                &gt;
                </button>
            </div>
            </div>
        </div>
        </div>
        </div>
    );
    };

    export default Reviews;
