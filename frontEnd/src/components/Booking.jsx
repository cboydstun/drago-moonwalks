import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const BookingPage = () => {
    const [date, setDate] = useState(new Date()); //stores the selected date
    const [name, setName] = useState(""); //stores name
    const [location, setLocation] = useState(""); //stores location
    const [bookings, setBookings] = useState([]); //stores bookings
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch("/admin/bookings");
                const data = await response.json();

                if (response.ok) {
                    setBookings(data.bookings);
                } else {
                    setMessage("Could not find booking date.");
                }
            } catch (error) {
                console.log("Error fetching booking: ", error)
                setMessage("Error Fetching Booking");
            }
         };
         fetchBookings();
    }, []);

    const dateChange = (newDate) => {
        setDate(newDate);
    };

    const bookingSubmit = async (e) => {
        e.preventDefault();

        const selectedDate = new Date(date).getTime();
        const isBooked = bookings.find((booking) => booking.date === selectedDate);

        if (isBooked) {
            setMessage("Sorry, this date is already booked!");
            return;
        }

        try {
            const response = await fetch("/booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    date: selectedDate,
                    location,
                }),
            });
            const data = await response.json();

            if (response.ok) {
                setMessage(data.response);
                const updateBookings = await fetch("/admin/bookings");
                const updatedData = await updateBookings.json();
                setBookings(updatedData.bookings);
            } else {
                setMessage("Sorry, we could not sumbit your booking.")
            }
        } catch (error) {
            console.log("Error submitting booking: " , error)
            setMessage("Sorry, the booking failed to submit.");
        }
    };
    
    //highights users booked dates on calendar
    const bookedDates = ({ date }) => {
        const timestamp = new Date(date).getTime();
        const isBooked = bookings.some((booking) => booking.date === timestamp);
        return isBooked ? "bg-red text-white" : "";
    };

    return (
        <main className="flex flex-col items-center justify-center text-center">
            <h1 className="font-serif font-bold text-white   text-2xl mb-6">Book A Reservation</h1>
            <div className="flex justify-center mb-6">
                <Calendar 
                    className="text-lg text-red-600 font-bold border" 
                    onChange={dateChange} 
                    value={date}
                    tileClassName={bookedDates}
                />
            </div>
            <form onSubmit={bookingSubmit} className="w-full max-w-sm space-y-4">
                <div className="flex justify-center">
                    <label className="rounded-md pl-2 pr-2 bg-yellow-600 font-bold text-white mr-4">Name:</label>
                    <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="text-red-600 placeholder: text-center rounded-md"
                    />
                </div>
                <div className="flex justify-center">
                    <label className="rounded-md pl-2 pr-2 mr-4 bg-yellow-600 font-bold text-white">Location:</label>
                    <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    className="text-red-600 placeholder: text-center rounded-md mr-4"
                    />
                </div>
                <button className= "bg-red-600 text-white rounded-md p-1 font-bold text-sm hover:bg-white hover:text-red-600"type="submit">Book Now</button>
            </form>
            {message && <p className="font-bold text-white">{message}</p>}
        </main>
    );
};

export default BookingPage;