import { useNavigate } from "react-router-dom";
const LandingPage = () => {
    const navigate = useNavigate();

    return (

            <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
  <title>Landing Page</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n\nbody {\n    font-family: Arial, sans-serif;\n    background-color: #f5f5f5;\n    color: #333;\n}\n\n.container-fluid{\n    background-color: #37517E;\n    width: 100%; \n    height: 100vh; \n    padding: 60px 0; \n    display: flex; \n    align-items: center; \n    justify-content: center; \n    flex-direction: column; \n}\n.content {\n    background-color: #37517E;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 40px 20px;\n    transition: padding 0.3s;\n}\n\n@media (max-width: 768px) {\n    .content {\n        padding: 20px 10px;\n    }\n}\n\n.image img {\n    width: 636px;\n    height: 527px;\n    top: 8px;\n    left: 639px;\n\n}\n\n.text .headline h1 {\n    color: #fff;\n    font-size: 36px;\n    margin-bottom: 20px;\n}\n.text .headline h1:hover {\n    color: #47B2E4; \n}\n.description {\n    color: #FFFFFF99;\n    font-size: 18px;\n    margin-bottom: 50px;\n}\n.description:hover{\n    color: #fff;    \n}\n\n.btn{\n    display: inline-block;\n    padding: 10px 20px;\n    font-size: 16px;\n    text-align: center;\n    text-decoration: none;\n    border-radius: 5px;\n    transition: background-color 0.3s;\n}\n\n.btn-primary {\n    width: Hug (147.36px);\n    height: Hug (45px);\n    padding: 9px 28.359375px 12px 28px;\n    border-radius: 50px;\n    background-color:#47B2E4;\n    color: #fff;\n    margin-right: 10px;\n}\n\n.btn-secondary {\n    width: Hug (147.36px);\n    height: Hug (45px);\n    padding: 9px 28.359375px 12px 28px;\n    border-radius: 50px;\n    color: #fff;\n    margin-right: 10px;\n}\n\n.btn-primary:hover {\n    background-color: #0056b3;\n}\n.btn-secondary:hover{\n    background-color:#47B2E4;\n}\n\n\n.newsletter {\n    background-color: #F3F5FA;\n    padding: 20px;\n    text-align: center;\n}\n\n.newsletter h3 {\n    font-size: 24px;\n    margin-bottom: 10px;\n}\n\n#newsletter {\n    padding: 8px;\n    width: 100%;\n    max-width: 300px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n}\n\n\nfooter {\n    background-color: #fff; \n    \n    color:  #37517E;\n    padding: 40px 0;\n}\n\n.footer {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 0 20px;\n}\n\n.footer .row {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n}\n\n.footer-col {\n    flex: 1;\n    max-width: 25%;\n    padding: 0 20px;\n}\n\n.footer h4 {\n    color: 333;\n    font-size: 20px;\n    margin-bottom: 15px;\n}\n\n.footer ul {\n    list-style: none;\n    margin-bottom: 20px;\n}\n\n.footer li{\n    font-size: 10px;\n    margin-bottom: 10px;\n    color:#444444;\n}\n.footer a {\n    text-decoration: none;\n    color: #333;\n    transition: color 0.3s;\n}\n.footer p{\n    font-size: 10px;\n    margin-bottom: 10px;\n    color:#444444;\n}\n.footer a:hover {\n    color: #fff;\n}\n\n.social-links a {\n    font-size: 24px;\n    margin-right: 10px;\n    color: #37517E;\n}\n\n\n.fa-copyright {\n    height: 70px;\n    background-color: #37517E;\n    text-align: center;\n    padding: 10px;\n    color: #fff;\n}\n\n\n.container {\n    width: 100%;\n    max-width: 1515px;\n    margin: 0 auto;\n    padding: 20px;\n}\n\n\n@media (max-width: 768px) {\n    .container {\n        padding: 10px;\n    }\n    \n    .text {\n        flex-direction: column;\n    }\n    \n    .image img {\n        max-width: 100%;\n        height: auto;\n    }\n}\n\n\n@media (max-width: 480px) {\n    .text {\n        padding: 20px 0;\n    }\n    \n    .headline h1 {\n        font-size: 24px;\n    }\n    \n    .description {\n        font-size: 16px;\n    }\n    \n    .btn-container {\n        flex-direction: column;\n    }\n    \n    .btn {\n        margin-bottom: 10px;\n    }\n}\n"
    }}
  />
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Simple Header
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="btn btn-primary" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-primary" href="#">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-primary" href="#">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-primary" href="#">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-primary" href="#">
            About
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <div className="container-fluid">
    <div className="content">
      <div className="text">
        <div className="headline">
          <h1>
            Better Solution For Your <br /> Business
          </h1>
          <p className="description">
            We are a team of talented designers making websites with <br />{" "}
            Boostrap.
          </p>
          <button className="btn btn-primary" onClick={() => navigate('/Create_product')}>Go To Create Product</button>
          <button className="btn btn-secondary" onClick={() => navigate('/Create_product')}>Watch Video</button>
        </div>
      </div>
      <div className="image">
        <img src="bg1.png" alt="Image" width="700px" />
      </div>
    </div>
  </div>
  <div className="newsletter">
    <div className="newsletter">
      <h3>Join Our Newsletter</h3>
      <form action="#">
        <label htmlFor="newsletter">
          Tamen quem nulla quae legam multos aute sint culpa legam noster magna
        </label>
        <br />
        <br />
        <input
          type="text"
          id="newsletter"
          name="newsletter-text"
          required=""
          minLength={6}
          maxLength={50}
        />
        <button type="submit" className="btn btn-primary">
          Subscribe
        </button>
        <br />
        <br />
      </form>
    </div>
    <footer>
      <div className="footer">
        <div className="row">
          <div className="footer-col">
            <h4>ARSHA</h4>
            <ul>
              <li>A108 Adam Street</li>
              <li>New York, NY 535022</li>
              <li>United States</li>
              <br />
              <li>
                <a href="#">Phone: +123 456 789</a>
              </li>
              <li>
                <a href="#">Email: info@example.com</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Service</h4>
            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Product Management</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="fa-copyright">
      <p>© 2023 Design by Reski Dwi Ramadhani Irawan</p>
    </div>
  </div>
        </>
    )
} 
export default LandingPage