import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const BookingPage = () => {
    const [date, setDate] = useState(new Date());
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [item, setItem] = useState("");
    const [bookings, setBookings] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch("/admin");
                const data = await response.json();

                if (response.ok) {
                    setBookings(data.bookings);
                } else {
                    setMessage("Could not find booking date.");
                }
            } catch (error) {
                console.log("Error fetching booking: ", error);
                setMessage("Error Fetching Booking");
            }
        };
        fetchBookings();
    }, []);

    const dateChange = (newDate) => setDate(newDate);

    const bookingSubmit = async (e) => {
        e.preventDefault();
        const selectedDate = new Date(date).getTime();
        const isBooked = bookings.find((booking) => booking.date === selectedDate);

        if (isBooked) {
            setMessage("Sorry, this date is already booked!");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, date: selectedDate, location, item }),
            });
            const data = await response.json();

            if (response.ok) {
                setMessage(data.response);
                const updateBookings = await fetch("http://localhost:3000/admin");
                const updatedData = await updateBookings.json();
                setBookings(updatedData.bookings);
            } else {
                setMessage("Sorry, we could not submit your booking.");
            }
        } catch (error) {
            console.log("Error submitting booking: ", error);
            setMessage("Sorry, the booking failed to submit.");
        }
    };

    const bookedDates = ({ date }) => {
        const timestamp = new Date(date).getTime();
        const isBooked = bookings.some((booking) => booking.date === timestamp);
        return isBooked ? "bg-red-600 text-white" : "";
    };

    return (
        <main className="flex flex-col justify-center text-center p-6 sm:p-12">
            <h1 className="font-serif font-bold text-white text-4xl sm:text-5xl mb-2">Book A Reservation</h1>
            <div className="p-6">
                <Calendar
                    className="text-lg text-red-600 font-bold border"
                    onChange={dateChange}
                    value={date}
                    tileClassName={bookedDates}
                />
                <form onSubmit={bookingSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <input
                            className="text-center rounded-md p-2 text-red-600 font-bold placeholder-red-600"
                            placeholder="Your Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <input
                            className="text-center rounded-md p-2 text-red-600 font-bold placeholder-red-600"
                            placeholder="Location"
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <input
                            className="text-center rounded-md p-2 text-red-600 font-bold placeholder-red-600"
                            placeholder="Item"
                            type="text"
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        className="w-full py-3 text-xl text-white font-bold bg-red-600 rounded-xl hover:bg-white hover:text-red-600"
                        type="submit"
                    >
                        Reserve
                    </button>
                </form>
                {message && <p className="text-white font-bold mt-4">{message}</p>}
            </div>
        </main>
    );
};

export default BookingPage;
