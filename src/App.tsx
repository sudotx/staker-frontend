import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import Navbar from './components/NavBar';
import { route } from './utils/routes';

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={route} />
      <Toaster />
    </>
  )
}

export default App
