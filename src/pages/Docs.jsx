import "./Docs.css";
import Header from "../components/Header.jsx";

function Docs() {
  return (
    <>
      <Header />

      <div id="docs">
        <div id="bento">
          <div>
            <h2 id="installation">Implementation</h2>
            <ul>
              <li>
                <p>
                  Install via <b>npm</b> by running the following command in
                  your
                  <b> terminal:</b>
                </p>
                <pre>
                  <code id="npm">npm install zebicss</code>
                </pre>
              </li>
              <li>
              <p>
                Or drop this right into your{" "}
                <b>
                  <code>&lt;head&gt;</code>
                </b>{" "}
                to use it via a CDN:
                <pre>
                  <code id="unpkg">
                    &lt;link rel="stylesheet"
                    href="https://unpkg.com/zebicss/zebi.min.css" /&gt;
                  </code>
                </pre>
              </p>
            </li>
            </ul>
          </div>
          <div>
            <h2>Introduction</h2>
            <p>
              It is a handy tool designed specifically for developers who want
              to style their HTML elements <b>quickly and effortlessly</b>,
              without the hassle of intricate customization. This minimalist CSS
              framework is built with simplicity and precision at its core,
              offering a seamless solution to{" "}
              <b>kickstart your projects with ease.</b>
            </p>
          </div>
          <div>
            <h2>Purpose</h2>
            <p>
              The aim is to <b>simplify styling</b> for developers, whether
              they`re new to coding or experienced professionals. It provides
              projects with a polished and{" "}
              <b>professional appearance without requiring much effort.</b> By
              using zebi.css, developers can focus on ensuring their projects
              function well while still looking great.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Docs;
