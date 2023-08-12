function App(){

    let Cars = [
        {
            name:'Lamborghini Urus',
            engineType:'V8 bi-turbo engine',
            img:'https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Urus/10636/1690010693541/front-left-side-47.jpg?tr=w-456'
        },
        {
            name:'Porsche 911',
            engineType:'2981 to 3996 cc',
            img:'https://imgd.aeplcdn.com/664x374/cw/ec/39232/Porsche-992-911-Right-Front-Three-Quarter-154380.jpg?wm=0&q=75&q=75'
        },
        {
            name:'Ferrari F8 Tributo ',
            engineType:'3902 cc',
            img:'https://imgd.aeplcdn.com/664x374/n/cw/ec/49376/f8-tributo-exterior-right-front-three-quarter-11.jpeg?q=75&q=75'
        }
    ]

    return(
        <>
        <h1>Cars Details</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Engine Type</th>
                    <th>Image</th>
                </tr>
            </thead>

            <tbody>
                {Cars.map((car,index) => (
                    <tr key={index}>
                        <td>{car.name}</td>
                        <td>{car.engineType}</td>
                        <td>
                        <img src={car.img} alt={car.name} style={{ width: '200px', height: 'auto' }} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);