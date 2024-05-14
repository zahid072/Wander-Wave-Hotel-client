
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routes/router'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
