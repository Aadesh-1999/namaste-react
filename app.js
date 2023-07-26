import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement('div',{id:'parent'},
//     React.createElement('div',{id:'child'},
//         [
//             React.createElement('h3',{id:'child1'},'Hello World from React child1!!!'),
//             React.createElement('h3',{id:'child2'},'Hello World from React child2!!!'),
//             React.createElement('h3',{id:'child3'},'Hello World from React child3!!!')
//         ]
//     )
// );

//React component
const heading = (<>
                    <div id="parent">
                        <div id="child">
                            <h5 id="child1" className="headerChild1" tabIndex="0">Hello World from React child1!!!</h5>
                            {/* <h3 id="child2" className="headerChild2" tabIndex="1">Hello World from React child2!!!</h3>
                            <h3 id="child3" className="headerChild3" tabIndex="2">Hello World from React child3!!!</h3> */}
                        </div>
                    </div>
                </>);

console.log("heading : ",heading);

//React functional component
const Title = () => {
    return (
        <h1 style={{color:"red"}}>
            Title
            {/*putting react element inside functional component below*/}
            {heading} 
        </h1>
    );
}

// to use react element inside functional component -> use {element}
// to use functional component inside react element -> use <Component/>

const HeadingComponent1 = () => (
    <>
    {/* Two ways to call functional components below */}
    {Title()}
    <Title/>
        <h1>Hello from Functional component1</h1>
    </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
      
root.render(heading);
root.render(<HeadingComponent1/>); //render method converts object to html element