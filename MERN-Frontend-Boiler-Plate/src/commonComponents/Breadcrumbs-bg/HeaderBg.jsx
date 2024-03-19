import { Breadcrumb } from "react-bootstrap";
import "./HeaderBg.scss";
export const HeaderBg = () => {
  return (
    <>
      <section className="breadcrumbs">
        <h1 className="heading">About Us</h1>
        <Breadcrumb className="nav">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>About Us</Breadcrumb.Item>
        </Breadcrumb>
      </section>
    </>
  );
};
