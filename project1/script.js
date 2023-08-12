// REACT with JS

// const reactHeading = React.createElement("h1", {className:"head"}, "Hello React !");

// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);



// const reactImage = React.createElement("img",{src:"https://files.codingninjas.in/coding-ninjas-24647.png"});
// ReactDOM.createRoot(document.getElementById('root')).render(reactImage);




// REact with JSX and react fragments

// const jsxHeading = (
//     <React.Fragment>
//     <h1>Hello JSX </h1>
//     <p> This is created using JSX </p>
//     </React.Fragment>

// );

function App(){
    return(
        <>
            <h1>Hello JSX </h1>
            <p> This is created using JSX </p>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
