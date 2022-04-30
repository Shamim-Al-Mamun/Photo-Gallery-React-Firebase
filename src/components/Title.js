import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Login from "./Login";

const Title = () => {
  const { logOut, user } = useUserAuth();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  var name = "";
  if (user) {
    if (user.email) {
      name = user.email.substring(0, user.email.indexOf("@"));
      name = name.charAt(0).toUpperCase() + name.slice(1);
    }
  }
  return (
    <>
      <div className="title">
        <div className="d-flex mt-1 justify-content-between">
          {name && (
            <div className="btn">
              <i class="fas fa-user-alt text-danger"></i>
              <span className="m-0 p-0"> {name}</span>
            </div>
          )}
          {!name && (
            <div className="btn">
              <i class="fas fa-user-alt text-danger"></i>
              <span className="m-0 p-0 text-muted small"> Guest</span>
            </div>
          )}
          {!user && (
            <div className="btn" onClick={handleShow}>
              <i class="fa fa-lock"></i>{" "}
              <span className="text-danger">Login</span>
            </div>
          )}
          {user && (
            <>
              <div className="btn" onClick={handleLogout}>
                <i class="fas fa-lock-open"></i>{" "}
                <span className="text-danger">Log out</span>
              </div>
            </>
          )}
        </div>
        <div className="container mt-2">
          <h2 className="text-center">Photo Gallery</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          {!user && (
            <>
              <button
                className="btn btn-danger w-25 my-2 opacity-75"
                onClick={handleShow}
              >
                Add
              </button>
            </>
          )}
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="text-end">
            <i
              className="fa fa-close pe-auto"
              role="button"
              onClick={handleClose}
            ></i>
          </div>
          <Login handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Title;
