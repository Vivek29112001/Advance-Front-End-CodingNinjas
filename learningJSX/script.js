
        // const Heading = () =>(
        //     <h1>Let's Learn JSX!!</h1>
        // )
        // function sum(){
        //     let a= 10 + 10;
        //     return a;
        // }

        // const Header = <h1>Hey Buddy!!</h1>;
        // const square = (a) => a**2;


        // function Heading(){
        //     var name = "ajay";
        //     var year = '2024';
        //     let demo = null;
        //     let demo1 = undefined;
        //     let demo2 = Boolean;
        //     let Boolean = true;
        //     return(
        //         <>
        //             <h1> My name is  {name} !!</h1>
        //             <h1> Output : {square(3)}</h1>
        //            { Header}
        //             <p> My age : {year} </p>
        //             <p> hlo :  {demo} , {String(demo1)} , {String(demo2)} , {String(Boolean)}</p>
        //             <p> sum of two number :{sum()}</p>

        //         </>
        //     )
        // }



        // ReactDOM.createRoot(document.getElementById('root')).render(<Heading/>);
        const App = () => {
            // create variable to store fahrenheit here
            const fahrenheit = 12;

            // create function to convert into celsius here
            // const Celsius = (fahrenheit) => {
            //     return ((fahrenheit - 32) * 5) / 9;
            // };
            function Celsius(fahrenheit){
                return ((fahrenheit - 32) * 5) / 9;
            }

            return (
                <>
                    {/* display data here */}
                    <h1>Temperature Converter</h1>
                    <p>Temperature in Fahrenheit: {fahrenheit}</p>
                    <p>Temperature in Celsius{Celsius(fahrenheit)}</p>
                </>
            );
        };

        ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
