import { TextField, Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import Navbar from "../components/Navbar";

function AddEmployee() {
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [imgURL, setURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const data = {
        id: Number(id),
        name: name,
        quantity: Number(quantity),
        price: Number(price),
        img: imgURL,
      };
      const res = await axios.post("http://localhost:8080/", data);
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
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Add Product</h1>

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
              Product successfully added!
            </Alert>
          </Snackbar>
          <LoadingButton loading={loading} type="submit" variant="contained">
            Add Product
          </LoadingButton>
        </form>
      </div>
    </>
  );
}

export default AddEmployee;