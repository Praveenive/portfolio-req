import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Zenclass from './Crediantials/Zenclass';
import Foodapp from './Crediantials/Foodapp';
import Interviewapp from './Crediantials/Interviewapp';
import Crm from './Crediantials/Crm';
import Homepage from './Crediantials/Homepage';
import Crmtech from './Crediantials/Crmtech';
import Zentech from './Crediantials/Zentech';
import Interviewtech from './Crediantials/Interviewtech';
import Foodapptech from './Crediantials/Foodapptech';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route exact path='/' element={<Homepage/>}></Route>
        <Route path='/zenclass' element={<Zenclass/>}></Route>
        <Route path='/foodapp' element={<Foodapp/>}></Route>
        <Route path='/interview' element={<Interviewapp/>}></Route>
        <Route path="/crm" element={<Crm/>}></Route>
        <Route path="/crmtech" element={<Crmtech/>}></Route>
        <Route path='/zentech' element={<Zentech/>}></Route>
        <Route path='/interviewtech' element={<Interviewtech/>}></Route>
        <Route path='/foodtech' element={<Foodapptech/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
