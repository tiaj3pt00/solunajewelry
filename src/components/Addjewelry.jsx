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
      style={{
        background: "linear-gradient(to bottom right, #e0f7fa, #f9e7c0)",
        padding: "60px 0",
        fontFamily: "'Segoe UI', 'Playfair Display', serif",
        minHeight: "100vh",
      }}
    >
      <div
        className="col-md-7 card shadow-lg p-5"
        style={{
          border: "none",
          borderRadius: "18px",
          backgroundColor: "#ffffffee",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
        }}
      >
        <h3
          className="text-center mb-4"
          style={{
            fontWeight: "700",
            color: "#a57c00",
            fontSize: "30px",
            letterSpacing: "1px",
          }}
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
            style={{
              borderRadius: "12px",
              border: "1px solid #d8b867",
              fontSize: "16px",
              padding: "12px",
            }}
          />

          <textarea
            required
            value={productDescription}
            onChange={(e) => setproductDescription(e.target.value)}
            placeholder="Product Description"
            className="form-control mb-3"
            rows={4}
            style={{
              borderRadius: "12px",
              border: "1px solid #d8b867",
              fontSize: "16px",
              padding: "12px",
            }}
          ></textarea>

          <input
            type="number"
            required
            value={productCost}
            onChange={(e) => setproductCost(e.target.value)}
            placeholder="Product Price"
            className="form-control mb-3"
            style={{
              borderRadius: "12px",
              border: "1px solid #d8b867",
              fontSize: "16px",
              padding: "12px",
            }}
          />

          <label
            className="form-label"
            style={{
              fontWeight: "600",
              color: "#6e5b38",
              fontSize: "15px",
            }}
          >
            Upload Product Image
          </label>
          <input
            type="file"
            className="form-control mb-4"
            accept="image/*"
            onChange={(e) => setproductPhoto(e.target.files[0])}
            style={{
              borderRadius: "12px",
              border: "1px solid #d8b867",
              padding: "10px",
            }}
          />

          <div className="text-center">
            <input
              type="submit"
              value="Add Product"
              className="btn px-5 py-2"
              style={{
                backgroundColor: "#d4af37",
                color: "#fff",
                fontWeight: "600",
                fontSize: "16px",
                borderRadius: "14px",
                border: "none",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#b99824")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#d4af37")}
            />
          </div>
        </form>
        
      </div>

      <Footer />
    </div>
  );
};

export default Addproduct;
