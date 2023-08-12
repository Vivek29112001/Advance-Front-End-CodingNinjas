// function Logins(){
//     let login = 'Alexa';
//     return(<h1>Hello {login}</h1>)
// }
// function Hello(){
//     let hello = 'User!';
//     return(<h1>Hello {hello}</h1>)
// }

// function App(){
   
//     let login = false;
//     if( login){
//         return <h1><Logins/></h1>
//     }
//     return(
        
//         <> 
//             <h1><Hello/> </h1>
  
//         </>
//     )
// }


function App(){
    // let loggedIn = false;
    let loggedIn = true;

        return(
            <> 
                <h1>Hello {loggedIn?"Alexa":"User"}!</h1>
            </>
        )
    }

ReactDOM.createRoot(document.getElementById("root")).render(<App />);