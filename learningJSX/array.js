function App() {
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 66, 56, 55, 100, 1245, 713812348.34234, 34575634, 23423,67,3234345678,4332890,2090];

    let cars = ["BMW", "Audi", "Lamborghini", "Porsche", "Mercedes-Benz", "Ferrari", "Fort"];

    let obj = {
        name: 'apple',
        age: '10'
    };


    const MultipleOfFive = a.filter(num => num %5 === 0).map((num) => <h3 key={num}>{num}</h3>);
    const NotMultipleOfFive = a.filter(num => num %5 !== 0).map((num) => <h3 key={num}>{num}</h3>);

    return (
        <>
            <h1>Arrays and Object</h1>
            {a.map((num) => <h2>{num}</h2>)}
            <h2>aaa{obj.name}</h2>

            <h1>Top Cars</h1>
            {cars.map((i) => <h2><ul><li>{i}</li></ul></h2>)}


            <h1>Multiple of five</h1>
            {MultipleOfFive}
            <h1>NotMultipleOfFive</h1>
            {NotMultipleOfFive}



        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);