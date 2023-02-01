import './App.css';
import SideNavBar from './components/SideNavBar/SideNavBar';

let temp=""
function App(){
  const apiGet=()=>{
    fetch('http://localhost:5000/')
    .then((response)=>response.json())
    .then((json)=> {
      temp = json
      let har = document.getElementById("result");
      har.setAttribute('innerHtml',temp);
      console.log(temp)
      }
      )
  }
return (
  <div>
    <p>Get Machine vision</p>
    <div id="result"></div>
    <img src={ require('./image.jpeg') } style={{width:"500px",height:"350px"}}/>
    <button onClick={apiGet}>Fetch</button>
  </div>   
    );
}
export default App;
