import Button from "./Button";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header className="primary">
        <p>Test Web Dev Class</p>
        <p>Test Item</p>
      </Header>
      <Button style={{backgroundColor:"red"}} onPress={()=>console.log('button clicked')}>Signup</Button>
    </div>
  );
}

export default App;