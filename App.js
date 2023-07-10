const heading1 = React.createElement(
  "h1",
  { id: "heading1", xyz: "abc" }, // attributes
  "Hello React"
);
console.log(heading1); // object

/*
    <div id='parent'>
        <div id='child1'>
            <h1 id='heading1'>Hello React</h1>
            <h1 id='heading2'>Sibling heading</h1>
        </div>
        <div id='child2'>
            <h1>Hello React</h1>
            <h1>Sibling heading</h1>
        </div>
    </div>
*/

const heading2 = React.createElement(
  "h1",
  { id: "heading2" },
  "Sibling heading"
);

const children1 = React.createElement("div", { id: "child1" }, [
  heading1,
  heading2,
]); // for more than 1 children we can use array in 3rd argument

const children2 = React.createElement("div", { id: "child2" }, [
  React.createElement("h1", {}, "Hello React"),
  React.createElement("h1", {}, "Sibmling heading"),
]);

const parent = React.createElement("div", { id: "parent" }, [
  children1,
  children2,
]);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(parent); // this coverts the heading object to html tag that browser understands and injects in root

// To Get rid of this complex stuff we have JSX
