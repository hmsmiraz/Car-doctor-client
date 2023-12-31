import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingsRow from "./BookingsRow";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();

  const url = `https://car-doctor-server-nine-pi.vercel.app/bookings?email=${user?.email}`;

  useEffect(() => {

    axiosSecure.get(url)
    .then(res => {
      setBookings(res.data);
    })

    // axios.get(url, {withCredentials: true})
    // .then(res => {
    //   setBookings(res.data);
    // })
    // fetch(url, {credentials: include})
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
  }, [url, axiosSecure]);

  const handleDelete = (id) => {
    // console.log(id);
    const proceed = confirm("Are you sure want to delete?");
    if (proceed) {
      fetch(`https://car-doctor-server-nine-pi.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert("Deleted Successfully");
          const remaining = bookings.filter((booking) => booking._id !== id);
          setBookings(remaining);
        });
    }
  };

  const handleBookingConfirm = (id) => {
    const bookingConfirm = confirm("Are you sure want to update?");
    if (bookingConfirm) {
      fetch(`https://car-doctor-server-nine-pi.vercel.app/bookings/${id}`,{
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'confirm'})
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            const remaining = bookings.filter(booking => booking._id !== id);
            const updated = bookings.find(booking => booking._id === id);
            updated.status = 'confirm'
            const newBookings = [updated, ...remaining];
            setBookings(newBookings);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-center text-3xl text-purple-500 font-bold my-5">
        My Booking: {bookings.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingsRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
