import axios from 'axios';

const callInfoAPI_read = async () => {
  let result = await axios.get('http://localhost:8080/api/read')
  console.log(result)
}
const callInfoAPI_increase = async () => {
  let result = await axios.post('http://localhost:8080/api/increase')
  console.log(result)
}


function App() {
  return (
    <div>

      <h1>{result}</h1>
      <button onClick={callInfoAPI_increase}>increase</button>

    </div>
  );
}

export default App;
