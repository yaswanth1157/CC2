import { TextField, Snackbar, Alert } from "@mui/material";
import { useState, useEffect } from "react";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

function EditEmployee(props) {
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [imgURL, setURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const { slug } = useParams();
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`http://localhost:8080/${slug}`);
      await setData(res.data);
      await setID(data.id);
      await setName(data.name);
      await setQuantity(data.quantity);
      await setPrice(data.price);
      await setURL(data.img);
    }
    fetchData();
  }, [slug, data.id, data.name, data.quantity, data.price, data.img]);
  function handleClose() {
    setOpen(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8080/", {
        id: Number(id),
        name: name,
        quantity: Number(quantity),
        price: Number(price),
        img: imgURL,
      });
      await console.log(res);
      await setOpen(true);
    } catch (e) {
      console.log(e.message);
    }
    setLoading(false);
  }
  return (
    <>
      <Navbar />
      {data && (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h1>Edit Product</h1>

            <div className="input-container">
              <TextField
                value={id}
                onChange={(e) => {
                  setID(e.target.value);
                }}
                id="outlined-basic"
                label="ID"
                required
                variant="outlined"
              />
            </div>
            <div className="input-container">
              <TextField
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                id="outlined-basic"
                label="Name"
                required
                variant="outlined"
              />
            </div>
            <div className="input-container">
              <TextField
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                id="outlined-basic"
                label="Quantity"
                required
                variant="outlined"
              />
            </div>
            <div className="input-container">
              <TextField
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                id="outlined-basic"
                label="Price"
                required
                variant="outlined"
              />
            </div>
            <div className="input-container">
              <TextField
                value={imgURL}
                onChange={(e) => {
                  setURL(e.target.value);
                }}
                id="outlined-basic"
                label="Img URL"
                required
                variant="outlined"
              />
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: "100%" }}
              >
                Product updated successfully!
              </Alert>
            </Snackbar>
            <LoadingButton loading={loading} type="submit" variant="contained">
              Edit Product
            </LoadingButton>
          </form>
        </div>
      )}
    </>
  );
}

export default EditEmployee;