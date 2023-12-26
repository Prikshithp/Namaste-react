/* <div>
    <div>
        <h1> i am an h1 tag</h1>
    </div>
</div> */






// const heading=React.createElement("h1",
// {id:'heading', xyz:"abc"},// react ele  > object
// "hello i am prikshit"); // obj place giving attribute like id class
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // render coverting rect ele to h1 to render on the webpage
// props are children + attributes

// nested elements
const parent=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"children"},
React.createElement("h1",{},"i am an h1 tag")
)
);
const root=ReactDOM.createRoot(document.getElementById("root"));
//root.render(parent);


// Create siblings > giving 2 elements of siblings
/* <div>
    <div>
        <h1> i am an h1 tag</h1>
        <h2> i am an h2 tag </h2>
    </div>
</div> */
// make an array
const parent1= React.createElement("div",{id:"parent"},
React.createElement("div",{id:"children"},
[ React.createElement("h1",{},"i am an h1 tag"),  React.createElement("h2",{},"i am an h2 tag")]
)
);
root.render(parent1);

// same thing for multiple children