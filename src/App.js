import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Hotel from './pages/Hotel';
import Spectacle from './pages/Spectacle';
import Reservation from './pages/Reservation';
import Login from './pages/Login';
import Signin from './pages/Signin';
function App() {
    return (
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signin' element={<Signin></Signin>}></Route>
            <Route path='/hotels' element={<Hotel></Hotel>}></Route>
            <Route path='/spectacles' element={<Spectacle></Spectacle>}></Route>
            <Route path='/mesreservations' element={<Reservation></Reservation>}></Route>
        </Routes>
    );
}

export default App;
