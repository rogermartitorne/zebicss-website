import "./Demo.css";
import Header from "../components/Header.jsx";

function Demo() {
  return (
    <>
      <Header />
      <div id="container">
        <div id="demo">
          <div>
            <a href="https://zebitest.netlify.app/" target="_blank">
              View the test page
            </a>
          </div>
          <div>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
          </div>
          <div>
            <b>Bold text</b>
            <i>Italic text</i>
            <u>Underlined text</u>
            <mark>Highlighted text</mark>
            <code>Inline code</code>
            <kbd>Keyboard input</kbd>
          </div>
          <div>
            <a>This is a link</a>
          </div>
          <div id="lists">
            <ul>
              <li>Unordered list item 1</li>
              <li>Unordered list item 2</li>
              <li>Unordered list item 3</li>
            </ul>
            <ol>
              <li>Ordered list item 1</li>
              <li>Ordered list item 2</li>
              <li>Ordered list item 3</li>
            </ol>
          </div>
          <div>
            <button>This is a button</button>
          </div>
          <div>
            <blockquote>
              This is a blockquote. It is used to indicate that the text is a
              quotation.
              <cite>xddd</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
}

export default Demo;
