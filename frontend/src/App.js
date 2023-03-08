import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AxiosTest from './util/AxiosTest';
import LoginTest from './util/LoginTest';
import TestPage from './util/TestPage';
import * as Pages from "pages/Pages";
import top_notch from "img/top_safezone.png";
import bottom_notch from "img/bottom_safezone.png";

function App() {
  return (
      <div className='App viewport-mode'>
			<img id="top_notch" alt="top_safezone" src={top_notch}/>
			<BrowserRouter>
				<Routes>
					<Route path="/axios-test" element={<AxiosTest />}></Route>
          			<Route path="/login-test" element={<LoginTest />}></Route>
					<Route path="/certificate" element={<Pages.CertificatePage />}></Route>
					<Route path="/lecture/upload" element={<Pages.LectureUploadPage />}></Route>
					<Route path="/lecture/view" element={<Pages.LectureViewPage/>}></Route>
          			<Route path="/lecture/list" element={<Pages.LectureRoomPage/>}></Route>
          			<Route path="/mypage" element={<Pages.Mypage/>}></Route>
					<Route path="/" element={<TestPage />}></Route>
				</Routes>
			</BrowserRouter>
			<img id="bottom_notch" alt="top_safezone" src={bottom_notch}/>
		</div>
  );
}

export default App;
