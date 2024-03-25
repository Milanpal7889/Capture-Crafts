import { Button, Card, Form, Modal } from "react-bootstrap";
// import img1 from "../../assets/images/award-1-134x98-inverse.png";
import { useEffect, useState } from "react";
import FormData from "form-data";
import ToastBs from "../Toast/Toast";
import "./CardCompo.scss";
import axiosConfig from "../../helper/config";
export const CardCompo = (Category) => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [createCategory, setCreateCategory] = useState({
    categoryname: Category.category.categoryname,
  });
  const [file, setFile] = useState(`http://localhost:5000/api/image/${Category.category?.imageUrl}`);

  const HandleSubmit = async (e) => {
    const formData = new FormData();
    if(file){
      formData.append("image", file);
    }
    formData.append("categoryname", createCategory.categoryname);
    try {
      e.preventDefault();
      const response = await axiosConfig.put(
        `http://localhost:5000/api/admin/updatecategory/${Category.category._id}`,
        formData
        );
        if (!response?.data?.error) {
          window.location.reload();
          const categoryDatares = response?.data;
          console.log(categoryDatares);
        }
      } catch (err) {
        setError(err.response.data.exists);
        console.error({
          error: true,
          message: "here Server Error",
          errorMessage: err.message,
        });
      }
      setShow(false);
    };
    
    const HandleDelete = async (id) => {
      try {
        const response = await axiosConfig.delete(
          `http://localhost:5000/api/admin/removecategory/${id}`
          );
          if (!response?.data?.error) {
            window.location.reload();
            const categoryDatares = response?.data;
            console.log(categoryDatares);
          }
        } catch (err) {
          setError(err.response.data.exists);
          console.error({
            error: true,
            message: "here Server Error",
            errorMessage: err.message,
          });
        }
      };
      useEffect(() => {
        setFile(`http://localhost:5000/api/image/${Category.category?.imageUrl}`)
      }, [Category.category?.imageUrl])
      return (
        <>
      {error && <ToastBs message="Category already exists" type="danger" />}
      <Modal show={show} onHide={() => setShow(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={HandleSubmit}>
            <Form.Group className="mb-3" controlId="image">
              <Form.Label>Category Image</Form.Label>
              <Form.Control
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="categoryName">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                required
                onChange={(e) => {
                  setCreateCategory({
                    ...createCategory,
                    categoryname: e.target.value,
                  });
                }}
                value={createCategory.categoryname}
                name="categoryname"
                type="text"
                placeholder="Enter Category Name"
              />
            </Form.Group>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </Form>
        </Modal.Body>
      </Modal>
      <Card className="cardcompo">
        <Card.Header>
          <Card.Title className="text-center">
            {" "}
            <h3>{Category.category?.categoryname}</h3>
          </Card.Title>
          {/* <Card.Img variant="bottom" src={img1} /> */}
           <Card.Img
            variant="top"
            src={file}
          />
        </Card.Header>
        <Card.Body>
          <Button onClick={() => setShow(true)} variant="primary">
            Edit catego
          </Button>{" "}
          <Button onClick={() => HandleDelete(Category.category?._id)} variant="primary">Delete catego</Button>
        </Card.Body>
      </Card>
    </>
  );
};
