import { Route, Routes, useNavigate } from 'react-router-dom';

//components:
import Navbar from './components/Navbar';

//pages:
import Code from './pages/Code';
import Eat from './pages/Eat';
import Sleep from './pages/Sleep';
import Debug from './pages/Debug';
import Test from './pages/Test';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';

function App() {
  
  const navigate = useNavigate();

  return (
    <section className="App">
      <Navbar />
      <Routes>
          <Route path='/' element = {<p>What's your mood right now ?</p>} />
          <Route path='/Code' element = {<Code />}>
            {
              ['','Debug'].map((path,index)=>(<Route path={path} key={index} element = {<Debug />} />))
            }
            <Route path='Test' element = {<Test />} />
          </Route>
          <Route path="/Eat" element={<Eat />} />
          <Route path="/Sleep" element={<Sleep />} />
          <Route path='/Users' element = {<Users />} >
            <Route path=':id' element={<UserDetails />} />
          </Route>
          <Route path="*" element = {<p>Error: It's not my Job</p>} />
      </Routes>

      <button onClick={()=>{navigate(-1)}}>GO BACK</button>

    </section>
  );
}

export default App;