import axios from "axios";
import { useState } from "react";
import Footer from "./Footer";

const Addproduct = () => {
  const [productName, setproductName] = useState("");
  const [productDescription, setproductDescription] = useState("");
  const [productCost, setproductCost] = useState("");
  const [productPhoto, setproductPhoto] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const uploadProduct = async (e) => {
    e.preventDefault();
    setLoading("Please wait as your product is being uploaded...");

    try {
      const data = new FormData();
      data.append("product_name", productName);
      data.append("product_description", productDescription);
      data.append("product_cost", productCost);
      data.append("product_photo", productPhoto);

      const response = await axios.post(
        "https://tiaj3pt00.pythonanywhere.com/api/addproduct",
        data
      );

      setLoading("");
     setSuccess(response.data.message);



      setproductName("");
      setproductDescription("");
      setproductCost("");
      setproductPhoto("");
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div
      className="row justify-content-center mt-4 mb-5"
      style={{ backgroundColor: "#f8f6f3", padding: "40px 0" }}
    >
      <div
        className="col-md-7 card shadow-lg p-4"
        style={{
          border: "none",
          borderRadius: "12px",
          backgroundColor: "#ffffff",
        }}
      >
        <h3
          className="text-center mb-4"
          style={{ fontWeight: "600", color: "#8e6f5e" }}
        >
          Add a New Jewel to Your Collection
        </h3>

        <div className="text-center mb-3">
          {loading && <b className="text-warning">{loading}</b>}
          {success && <b className="text-success">{success}</b>}
          {error && <b className="text-danger">{error}</b>}
        </div>

        <form onSubmit={uploadProduct}>
          <input
            type="text"
            required
            value={productName}
            onChange={(e) => setproductName(e.target.value)}
            placeholder="Product Name"
            className="form-control mb-3"
            style={{ borderRadius: "8px", borderColor: "#d1c4b3" }}
          />

          <textarea
            required
            value={productDescription}
            onChange={(e) => setproductDescription(e.target.value)}
            placeholder="Product Description"
            className="form-control mb-3"
            style={{ borderRadius: "8px", borderColor: "#d1c4b3" }}
          ></textarea>

          <input
            type="number"
            required
            value={productCost}
            onChange={(e) => setproductCost(e.target.value)}
            placeholder="Product Price"
            className="form-control mb-3"
            style={{ borderRadius: "8px", borderColor: "#d1c4b3" }}
          />

          <label
            className="form-label"
            style={{ fontWeight: "500", color: "#6e5849" }}
          >
            Upload Product Image
          </label>
          <input
            type="file"
            className="form-control mb-4"
            accept="image/*"
            onChange={(e) => setproductPhoto(e.target.files[0])}
            style={{ borderRadius: "8px", borderColor: "#d1c4b3" }}
          />

          <div className="text-center">
            <input
              type="submit"
              value="Add Product"
              className="btn btn-outline-dark px-4 py-2"
              style={{
                backgroundColor: "#8e6f5e",
                color: "#fff",
                fontWeight: "500",
                borderRadius: "10px",
                border: "none",
              }}
            />
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Addproduct;
