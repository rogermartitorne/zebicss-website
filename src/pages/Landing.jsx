import { Link } from "react-router-dom";
import { arrowToTheRight } from "../utils/icons.jsx";
import "./Landing.css";
import Header from "../components/Header.jsx";

function Landing() {
  return (
    <>
      <Header />
      <main>
        <header>
          <h1>🐈‍⬛ zebi.css</h1>
          <h1>
            Crafted for developers looking to kickstart projects without the
            burden of styling from scratch
          </h1>
          <p>
            A minimalist CSS framework for <b>quickly styling</b> HTML elements
            without the need for extensive customization.
          </p>
        </header>
        <div id="links">
          <Link to="/docs">
            <span>Get Started</span> {arrowToTheRight}
          </Link>
        </div>
      </main>
    </>
  );
}

export default Landing;
