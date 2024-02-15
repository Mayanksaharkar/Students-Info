import "./App.css";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import Table from "./Components/Table";
import StudContextProvider from "./StudContextProvider";
function App() {
  return (
    <StudContextProvider>
      <div className='min-h-screen  bg-base-300 lg:px-80 md:px-4 sm:px-4 grid place-items-center'>
        <Navbar />
        <div className='my-6'>
          <Form />
        </div>
        <Table />
      </div>
    </StudContextProvider>
  );
}

export default App;
