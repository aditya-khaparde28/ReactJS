const heading=React.createElement("h1",{id:"heading"},"Hello world from react");//returns object
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


//Nested structure/tags
const Parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child1"},
        React.createElement("h1",{},"h1 tag")
    )
);


root.render(Parent);