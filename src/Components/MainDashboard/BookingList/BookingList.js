import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { auth } from "../../Login/Login/LoginManager";
import Sidebar from "../Sidebar/Sidebar";
import './Booklist.css'

const BookingList = () => {
  const [book, setBook] = useState([]);
  const email = auth.currentUser.email;
  useEffect(() => {
    fetch(`https://infinite-island-97956.herokuapp.com/getBook/${email}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((error) => {
        console.log(error);
      });
  }, [email]);
  return (
    <section>
      <div className="container-fluid row">
        <Sidebar></Sidebar>
        <div
          className="col-md-9 p-4 pr-5"
          style={{
            position: "absolute",
            left: 280,
            backgroundColor: "#F4FDFB",
          }}
        >
          <h2>Service List</h2>
          <Container>
            <Table className="table table-borderless">
              <thead className="text-success">
                <tr>
                  <th className="text-center">Service Name</th>
                  <th className="text-center">Service Price</th>
                  <th className="text-center">Order Date</th>
                  <th className="text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {book.length > 0 &&
                  book.map((pd) => {
                    const { serviceDetail } = pd;
                    return serviceDetail.map((pdDetails) => {
                      return (
                        <tr>
                          <td className="text-center">{pdDetails.name}</td>
                          <td className="text-center">$ {pdDetails.price}</td>
                          <td className="text-center">
                            {new Date(pd?.createDate).toLocaleString()}
                          </td>
                          <td className="text-center">
                            <div class="btn-group">
                              <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Action
                              </button>
                              <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">On Going</a></li>
                                <li><a class="dropdown-item" href="#">Pending</a></li>
                                <li><a class="dropdown-item" href="#">Done</a></li>
                              </ul>
                            </div>
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
    </section>
  );
};

export default BookingList;
