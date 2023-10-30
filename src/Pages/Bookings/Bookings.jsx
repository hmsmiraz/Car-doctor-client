import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingsRow from "./BookingsRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    const proceed = confirm("Are you sure want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          alert("Deleted Successfully");
          const remaining = bookings.filter(booking => booking._id !== id);
          setBookings(remaining);
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
            {
                bookings.map(booking => <BookingsRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                ></BookingsRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
