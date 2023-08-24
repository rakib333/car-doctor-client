import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingCard from "./BookingCard";
import Swal from "sweetalert2";
import { toast } from "react-toastify";


const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);


    const url = `http://localhost:5000/bookings?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])

    const handleDeleteBooking = id => {
        Swal.fire({
            title: 'Are you sure ?',
            text: "You won't be able to revert this!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining)
                            toast.success('Bookings deleted successfully')
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }

                    })
            }
        })
    };

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const updatedBooking = bookings.find(booking => booking._id === id);
                    const remaining = bookings.filter(booking => booking._id !== id);
                    updatedBooking.status = 'confirm'
                    const newBookings = [updatedBooking, ...remaining];
                    console.log(newBookings)
                    setBookings(newBookings)
                }
            })
    }


    return (
        <div>
            <h2 className="text-3xl my-5 text-red-700 text-center font-bold ">Your Bookings: {bookings.length}</h2>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Image</th>
                            <th>Booking</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingCard
                                key={booking._id}
                                booking={booking}
                                handleDeleteBooking={handleDeleteBooking}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Bookings;