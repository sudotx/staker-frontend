import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import Navbar from './components/NavBar';
import { route } from './utils/routes';

function App() {
  return (
    <>
      <Navbar />
      <h1>Milk Staking</h1>
      <RouterProvider router={route} />
      <Toaster />
    </>
  )
}

export default App
