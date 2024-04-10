import Button from "./components/atoms/Button";

function App() {
  return (
    <>
      <div className="flex justify-center">
        <h1>Kuća za odmor Franca</h1>
        <Button>Saznaj više</Button>
        <Button filled>Saznaj više</Button>
        <Button wider>Saznaj više</Button>
      </div>
    </>
  );
}

export default App;
