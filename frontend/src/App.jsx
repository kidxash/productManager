    import { Routes, Route } from 'react-router-dom';
    import Home from './Pages/Home';
    import View from './Pages/View';
    import Add from './Pages/Add';
    import { useEffect } from 'react';
    import Navbar from './Componets/Navbar';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#444444";
    document.body.style.margin = "0";
  }, [] )

  return (
    <>
    <Navbar />

    
    <Routes>
      <Route path = '/' element={<Home  />} /> 
      <Route path = '/View' element={<View />} />
      <Route path = '/Add' element ={<Add />} />
    </Routes>
    
    </>
  )
}

export default App
