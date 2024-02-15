import './App.css';
import  Item from './component/Item';
import ItemDate from './component/ItemDate';

function App() {
  return (
    <>
      <div className="App">
        <h1>Hello React App</h1>
      </div>
      <div>
        <Item name="React Js"></Item>
        <ItemDate day="24" month="June" year="2024"></ItemDate>
        
        <Item name="javaScript" ></Item>
        <ItemDate day="20" month="May" year="2023"></ItemDate>

        <Item name="CSS" ></Item>
        <ItemDate day="12" month="Jan" year="2022"></ItemDate>
      </div>


    </>
  );
}

export default App;
