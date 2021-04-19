import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import Sidebar from "../../MainDashboard/Sidebar/Sidebar";

const OrderList = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch('https://infinite-island-97956.herokuapp.com/allBookingList')
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="">
      <Sidebar />
      <div
        style={{ position: "absolute", right: 50, backgroundColor: "#F4FDFB" }}
        className="container-fluid d-flex flex-column justify-content-center col-md-9"
      >
        <h2>Booking List</h2>
        <Container>
          <Table className="table table-borderless">
            <thead className="text-success">
              <tr>
                <th className="text-center">Name</th>
                <th className="text-center">Email</th>
                <th className="text-center">Service Name</th>
                <th className="text-center">Service Price</th>
                <th className="text-center">Order Date</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length > 0 &&
                bookings.map((pd) => {
                  const { name, email, serviceDetail } = pd;
                  return serviceDetail.map((pdDetails) => {
                    return (
                      <tr>
                        <td className="text-center">{name}</td>
                        <td className="text-center">{email}</td>
                        <td className="text-center">{pdDetails.name}</td>
                        <td className="text-center">$ {pdDetails.price}</td>
                        <td className="text-center">
                          {new Date(pd?.createDate).toLocaleString()}
                        </td>
                      </tr>
                    );
                  });
                })}
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
};

export default OrderList;
