import { Toast, ToastContainer } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";

const ToastBs = ({ message, type }) => {
  const [showToast, setShowToast] = useState(true);
  setTimeout(() => {
    setShowToast(false);
   }, 3000);
  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast bg={type} show={showToast} onClose={() => setShowToast(false)} delay={3000}>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

ToastBs.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ToastBs;
