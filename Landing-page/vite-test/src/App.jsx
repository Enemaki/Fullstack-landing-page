import Login from "./components/Login"
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";

function App() {

  return (
      <main className="font-sans w-11/12 flex flex-col items-center gap-4 py-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
  )
}

export default App
