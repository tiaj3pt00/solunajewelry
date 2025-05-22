const Footer = () => {
  return (
    <div>
      <section className="row  mt-1 footer-background-color">
        <div className="col-md-4 text-left text-light">
          <h5 className="p-2 text-center text-info">About Us</h5>
          <p>
            Soluna offers a diverse range of jewelry, from fashion
            jewelry to fine jewelry, all showcasing the brand's signature style
            and craftsmanship. Their jewelry collections include
            necklaces,pendants, bracelets, rings, and earrings, utilizing both
            traditional and contemporary designs
          </p>
          <p>
            {" "}
            Created by master jewelers, these pieces incorporate precious
            metals, gemstones, and diamonds, resulting in high-quality, timeless
            designs like the Volt, B Blossom, and Idylle Blossom collections.
          </p>
          <br />
        </div>
        <div className="col-md-4 text-light">
          <h5 className="p-2 text-center text-info">Reach Us Out</h5>
          <input
            className="form-control"
            type="email"
            placeholder="Enter your email"
          />
          <br />
          <textarea
            className="form-control"
            rows="7"
            placeholder="Leave a comment"
          ></textarea>
          <br />
          <input
            type="submit"
            value="Send Message"
            className="btn btn-info"
          />
        </div>
        <div className="col-md-4 ">
          <h4 className="text-center text-info">Connect With Us</h4>
          <br />
          <a href="https://facebook.com">
            <img src="images/fb.jpeg" alt="" className="socialspictures" />
          </a>
          <a href="https://instagram.com">
            <img src="images/insta.jpeg" alt="" className="socialspictures" />
          </a>
          <a href="https://x.com">
            <img src="images/twitter.jpeg" alt="" className="socialspictures" />
          </a>
          <p className="text-dark">
            {" "}
            ✨ Connect With Us ✨ We’d love to be part of your sparkle story!
            Whether you have a question about our collections, need help finding
            the perfect piece, or simply want to share your shine, we’re here
            for you.
          </p>
        </div>
      </section>
      <footer className="text-white text-center p-2 mt-2 bootom-footer">
        <h5>Developed by Tia Jeptoo. &copy; 2025.All rights reserved</h5>
      </footer>
    </div>
  );
};

export default Footer;
