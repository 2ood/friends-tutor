import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AxiosTest from './util/AxiosTest';
import LoginTest from './util/LoginTest';
import TestPage from './util/TestPage';
import * as Pages from "pages/Pages";

function App() {
  return (
      <div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/axios-test" element={<AxiosTest />}></Route>
          			<Route path="/login-test" element={<LoginTest />}></Route>
					<Route path="/certificate" element={<Pages.CertificatePage />}></Route>
					<Route path="/lecture/upload" element={<Pages.LectureUploadPage />}></Route>
					<Route path="/lecture/view" element={<Pages.LectureViewPage/>}></Route>
					<Route path="/lecture/list" element={<Pages.LectureRoomPage/>}></Route>
					<Route path="/" element={<TestPage />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
  );
}

export default App;
