import './App.css';
import Item from './component/Item';
import ItemDate from './component/ItemDate';
import Card from './component/Card';
import NewProduct from './component/NewProduct';

function App() {
  // const itemTwoName ="Web Developer";

  const response = [
    {
      itemName: "React1",
      itemDay: "241",
      itemMonth: "Jan1",
      itemYear: "20241"
    },
    {
      itemName: "React2",
      itemDay: "242",
      itemMonth: "Jan2",
      itemYear: "20242"
    },
    {
      itemName: "React3",
      itemDay: "243",
      itemMonth: "Jan3",
      itemYear: "20243"
    }
  ]

  return (
    <div>
      <NewProduct/>
      <Card>
        <Item name={response[0].itemName}></Item>
        <ItemDate day={response[0].itemDay} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

        <Item name={response[1].itemName}></Item>
        <ItemDate day={response[1].itemDay} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

        <Item name={response[2].itemName}></Item>
        <ItemDate day={response[2].itemDay} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>

      </Card>
    </div>
  );
}

export default App;
