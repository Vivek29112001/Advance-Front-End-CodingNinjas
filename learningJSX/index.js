function App() {

    let Student = [
        {
            name: 'Ajay',
            age: '24',
            marks: '89'
        },
        {
            name: 'xyz',
            age: '34',
            marks: '189'
        },
        {
            name: 'ABC',
            age: '54',
            marks: '99'
        },
    ]
    return (
        <>
            <h2>Student Details</h2>
            {/* <p>{Student.map((num) => (<ul key={num}>{num.name} {num.age} {num.marks}</ul>))}</p> */}
            <table>
                <thead> <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Marks</th>
                </tr></thead>

                <tbody>
                    {Student.map((num, index) => (
                        <tr key={index}>
                            <td>{num.name}</td>
                            <td>{num.age}</td>
                            <td>{num.marks}</td>
                        </tr>)
                    )}

                </tbody>

            </table>

        </>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />);