let score =0;
let wicket = 0;
let ballWiseRes = [];
let hit = 0;
let inputRef = React.createRef(); 

// function addOne(){
//    score +=1;
//    rootElement.render(<App/>);
// }

// function for adding score
function addScore(num){

    hit = num;
    // ballWiseRes.push(num);
    // if (wicket <10){ 
    //     score += num;
        rootElement.render(<App/>);

    // }
}

// function for wicket fall
function addWicket(){
//     ballWiseRes.push("W");
//    if (wicket <10){ 
//     wicket += 1;
    hit = 'W';
    rootElement.render(<App/>);

    // }
    
}
const ScoreButtons =() =>(
    <div>
        {/* <button onClick= {addOne}>1</button> */}
        <button onClick= {() => addScore(0)}>0</button>
        <button onClick= {() => addScore(1)}>1</button>
        <button onClick= {() => addScore(2)}>2</button>
        <button onClick= {() => addScore(3)}>3</button>
        <button onClick= {() => addScore(4)}>4</button>
        <button onClick= {() => addScore(5)}>5</button>
        <button onClick= {() => addScore(6)}>6</button>
        <button onClick= {addWicket}>wicket</button>
    </div>
)


// array for 6 ball in a table

const Result = () =>(
    <div>
        {ballWiseRes.map((res, index) => (
        <>
        {index % 6 ===0? <br/> : null}
        <span key={index}>{res ===0 ? <strong>.</strong> : res}</span>&nbsp;&nbsp;&nbsp;</>))}
    </div>
)

function handleSubmit (event){
    event.preventDefault();

    if(hit =='W'){
        wicket +=1;
    }
    else{
        score += hit;
    }

    ballWiseRes.unshift(
        // <span>{hit}{','}{inputRef.current.value}</span>
        <span>{`${hit} , ${inputRef.current.value}`}</span>
    );
    // console.log(inputRef.current.value);

        hit = 0;
        inputRef.current.value =" ";

    rootElement.render(<App/>)
}

const Form = () =>(
    <form onSubmit= {handleSubmit}>
        <input value ={hit}/>
        <input ref = {inputRef} placeholder="Add Comment"/>
        <button>Submit</button>
    </form>
)

const App =() =>(
    <>
    <h1>Score Keeper</h1>
    <h2>SCORE : {score}/{wicket}
      </h2>
    <ScoreButtons/>
    <br />
    {/* <Result/> */}
    <Form />
    <hr />
    {ballWiseRes.map((res,index) => (
        <p key = {index}>{res}</p>
    ))}
    </>
)

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>)

