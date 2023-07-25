import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement('div',{id:'parent'},
    React.createElement('div',{id:'child'},
        [
            React.createElement('h3',{id:'child1'},'Hello World from React child1!!!'),
            React.createElement('h3',{id:'child2'},'Hello World from React child2!!!'),
            React.createElement('h3',{id:'child3'},'Hello World from React child3!!!')
        ]
    )
);

console.log("heading : ",heading);

const root = ReactDOM.createRoot(document.getElementById('root'));
        
root.render(heading); //render method converts object to html element