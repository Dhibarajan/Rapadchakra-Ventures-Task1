import React from 'react';
import './App.css';
import axios from 'axios';
import Filterdata from './components/Filterdata';
import Alldata from "./components/Alldata";

function App() {
  const [data, setData] = React.useState([]);

  const [filterData, setFilterData] = React.useState([]);
  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])


  const handleAll = () => {
    setFilterData(data)
  }

  const handleComplete = () => {
    const filter = data.filter(i => i.completed.toString().includes("true"))
    setFilterData(filter)
  }

  const handlePending = () => {
    const filter = data.filter(i => i.completed.toString().includes("false"))
    setFilterData(filter)
  }
  console.log(filterData)

  return (
    <div className="cons">
      <div className="container">
        <div>
          <button type="button" className="btn btn-info m-3" onClick={handleAll}>All</button>
          <button type="button" className="btn btn-primary m-3" onClick={handleComplete}>Completed</button>
          <button type="button" className="btn btn-secondary m-3" onClick={handlePending}>Pending</button>
        </div>

      </div>
      {filterData.length > 0 ? <Filterdata filterData={filterData} /> : <Alldata data={data} />}
    </div>
  );
}

export default App;
