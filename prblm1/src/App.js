import React, {useState} from 'react'
let  App = () => {
  const [data,setdata] = useState('');
  let submit = (e) => {
    e.preventDefault();
    e.target.firstElementChild.value = '';
    alert("You entered data is :\n "+ data);

  }
  let handle = (e) => {
    setdata(e.target.value);
  }
  return (
    <div className="App">
      <center>
          <h2>Input data to print</h2>
          <form onSubmit={submit}>
          <input type="text" onChange={handle} />
          <button type="submit" >submit</button>
          </form>
          </center>
    </div>
  );
}
export default App;
