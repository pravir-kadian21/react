import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 id="jsx-heading">JSX Heading</h1>; // jsx

const Title = () => <h1 className="title">Title</h1>;

// functional Component = a js function returning a react element
const HeadingComponent = () => (
  <>
    {jsxHeading}
    <h1>Heading Component</h1>
    <Title />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
