
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routes/router'
import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  
  
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
