import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axiosConfig from "../../helper/config";
import axios from "axios";
import { useEffect, useState } from "react";

const ManageUsers = () => {
  //   const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);

  const loggedIn = localStorage?.getItem("user") ? false : true;
  useEffect(() => {
    if (loggedIn) {
      window.location.href = "/login";
    }
  }, [loggedIn]);
  const deleteuser = async (id) => {
    try {
      const response = await axiosConfig.delete(
        `http://localhost:5000/api/admin/deleteuser/${id}`
      );
      if (response?.data && !response.data.error) {
        const usersDatares = response?.data;
        console.log(usersDatares);
        window.location.reload();
      } else {
        // setError(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/admin/allusers"
        );
        if (response?.data && !response.data.error) {
          const usersresData = response?.data;
          setUsers(usersresData?.users || []);
        } else {
          setUsers([]);
        }
      } catch (error) {
        console.log(error?.message);
        setUsers([]);
      }
    };
    const fetchBookings = async() => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/admin/allbookings"
        );
        if (response?.data && !response.data.error) {
          const bookingsresData = response?.data;
          setBookings(bookingsresData?.bookings || []);
        } else {
          setBookings([]);
        }
      } catch (error) {
        console.log(error?.message);
        setBookings([]);
      }
    }

    fetchdata();
    fetchBookings();
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Nav variant="underline" defaultActiveKey="/mangeall/">
            <Nav.Item>
              <Nav.Link eventKey="/manageall" to="/manageall" as={NavLink}>
                Manage Users
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/managebookings" to="/managebookings" as={NavLink}>
                Manage Booking
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          <Col lg={1}>
            <h3>Index</h3>
          </Col>
          <Col lg={2}>
            <h3>Name</h3>
          </Col>
          <Col lg={3}>
            <h3>Email</h3>
          </Col>
          <Col lg={2}>
            <h3>Role</h3>
          </Col>
          <Col lg={2}>
            <h3>Delete</h3>
          </Col>
        </Row>
        {users.map((user, index) => {
          return (
            <Row key={user._id}>
              <Col lg={1}>
                <h5>{index}</h5>
              </Col>
              <Col lg={2}>
                <h5>{user.name}</h5>
              </Col>
              <Col lg={3}>
                <h5>{user.email}</h5>
              </Col>
              <Col lg={2}>
                <h5>{user.role}</h5>
              </Col>
              <Col lg={2}>
                <Button
                  onClick={() => {
                    deleteuser(user._id);
                  }}
                  variant="danger"
                  size="sm"
                >
                  Delete
                </Button>
              </Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
};

export const ManageBooking = () => {
  return (
    <>
      <Container>
        <Nav variant="underline" defaultActiveKey="/mangeall/">
          <Nav.Item>
            <Nav.Link eventKey="/manageall" to="/manageall" as={NavLink}>
              Manage Users
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/managebookings" to="/managebookings" as={NavLink}>
              Manage Booking
            </Nav.Link>
          </Nav.Item>
        </Nav>
        No bookings available
      </Container>
    </>
  );
};
export default ManageUsers;
