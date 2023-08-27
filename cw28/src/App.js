
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import CourseCard from './Components/CourseCard';

function App() {
  return (
    <div className='parent'>
    <Navbar/>
    <AllRoutes/>
    <CourseCard/>
    {/* <h1>Brain-Train</h1> */}
    </div>
  );
}

export default App;
