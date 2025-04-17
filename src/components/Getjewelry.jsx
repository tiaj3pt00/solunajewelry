import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import ImageCarousel from "./Carousel";

const Getproducts = () => {
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const img_url = "https://tiaj3pt00.pythonanywhere.com/static/images/";

  const fetchProducts = async () => {
    setLoading("Please wait as we get your products...");
    try {
      const response = await axios.get(
        "https://tiaj3pt00.pythonanywhere.com/api/getproducts"
      );
      setProducts(response.data);
      setLoading("");
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filtered_products = products.filter(
    (item) =>
      item.product_name.toLowerCase().includes(search.toLowerCase()) ||
      item.product_description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        backgroundColor: "#f5fbff",
        minHeight: "100vh",
        paddingBottom: "50px",
      }}
    >
      <ImageCarousel/>
      <div className="container py-4">
        <h2
          className="text-center mb-4"
          style={{ color: "#0077b6", fontWeight: "bold" }}
        >
          Available Jewelry
        </h2>

        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <input
              type="search"
              placeholder="Search for any product"
              className="form-control rounded-pill shadow-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: "10px 20px",
                border: "2px solid #ffd700",
                backgroundColor: "#e6f0ff",
              }}
            />
          </div>
        </div>

        {loading && <h5 className="text-center text-info">{loading}</h5>}
        {error && <h5 className="text-center text-danger">{error}</h5>}

        <div className="row">
          {filtered_products.map((product, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div
                className="card shadow-sm h-100"
                style={{
                  border: "1px solid #ffd700",
                  borderRadius: "15px",
                  transition: "transform 0.3s ease-in-out",
                  backgroundColor: "#ffffff",
                }}
              >
                <img
                  src={img_url + product.product_photo}
                  alt={product.product_name}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5
                      className="card-title"
                      style={{ color: "#0077b6", fontWeight: "bold" }}
                    >
                      {product.product_name.slice(0, 25)}
                    </h5>
                    <p className="card-text text-muted">
                      {product.product_description.slice(0, 60)}...
                    </p>
                  </div>
                  <div>
                    <p className="text-dark">
                      <b style={{ color: "#b08900" }}>
                        KSH {product.product_cost}
                      </b>
                    </p>
                    <button
                      className="btn w-100"
                      style={{
                        backgroundColor: "#0077b6",
                        color: "white",
                        borderRadius: "30px",
                        fontWeight: "bold",
                      }}
                      onClick={() =>
                        navigate("/mpesapayment", { state: { product } })
                      }
                    >
                      Purchase Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>

      
    </div>
  );
};

export default Getproducts;
