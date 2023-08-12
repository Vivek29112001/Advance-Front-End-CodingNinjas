function App(){
    // let loggedIn = false;
    let loggedIn = true;
    let name = "Alexa";
    let lastname = "AI";
    // let lastname = ""; 


        return(
            <> 
                <h1>Hello {loggedIn?((lastname)||(name)):"User"}!</h1>

                <p>{loggedIn && "Welcome to the port"}</p>
            </>
        )
    }

ReactDOM.createRoot(document.getElementById("root")).render(<App />);