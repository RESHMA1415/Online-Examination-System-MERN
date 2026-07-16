import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Exam from "./pages/Exam";
import Question from "./pages/Qust";
import Result from "./pages/Result";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AddQuestion from "./pages/AddQuestion";
import ManageQuestions from "./pages/ManageQuestions";
import EditQuestion from "./pages/EditQuestion";
import ViewStudents from "./pages/ViewStudents";
import ViewResults from "./pages/ViewResults";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/exam" element={<Exam />} />
      <Route path="/question/:course" element={<Question />} />
      <Route path="/result" element={<Result />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard"element={<AdminDashboard />}/>
      <Route path="/admin/add-question"element={<AddQuestion />}/>
      <Route path="/admin/questions" element={<ManageQuestions />} /> 
      <Route path="/admin/edit-question/:id"element={<EditQuestion />}/>
      <Route path="/admin/students"element={<ViewStudents />}/>
      <Route path="/admin/results"element={<ViewResults />}/>
      
    </Routes>
  );
}

export default App;  