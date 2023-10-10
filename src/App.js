import Button from "./Button";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header className="primary">
        <p>Test React ARIA</p>
        <p>Item</p>
      </Header>
      <Button style={{backgroundColor:"white"}} onPress={()=>console.log('button clicked')}>Click here</Button>
    </div>
  );
}

export default App;