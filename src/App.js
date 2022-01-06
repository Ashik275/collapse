import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {
  const commandRef = useRef();



  const handleInput = e => {
    const command = commandRef.current.value;
    const newCommand = { command: command }

    e.preventDefault();
  }
  return (
    <div className="App">
      <p>
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
          Click Here
        </button>
      </p>
      <div className="c">
        <div className="collapse collapse-horizontal" id="collapseWidthExample">
          <div className=" card card-body d  box">
            <form onSubmit={handleInput}>
              <input ref={commandRef} type="text" />
              <input type="submit" value="Submit" />
            </form>
            <div className="d-flex px-3 py-2 mt-3 border b border-primary rounded">
              <p className="pe-5  text">https</p>
              <div className="vertical pe-5"></div>
              <p className=" text">Command -Go To Home</p>
            </div>
            <div className="d-flex px-3 py-2 mt-3 border b border-primary rounded">
              <p className="pe-5  text">https</p>
              <div className="vertical pe-5 "></div>
              <p className=" text">Command -Go To Profile</p>
            </div>
            <div className="d-flex px-3 py-2 mt-3 border b border-primary rounded">
              <p className="pe-5  text">https</p>
              <div className="vertical pe-5"></div>
              <p className="text">Command -Go To Cart</p>
            </div>
            <div className="d-flex px-3 py-2 mt-3 border b border-primary rounded">
              <p className="pe-5  text">https</p>
              <div className="vertical pe-5"></div>
              <p className="text">Command -Add[FULL NAME PRODUCT TO CART] To Cart</p>
            </div>
            <div className="d-flex px-3 py-2 mt-3 border b border-primary rounded">
              <p className="pe-5  text">https</p>
              <div className="vertical pe-5"></div>
              <p className="text"></p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
