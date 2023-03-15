import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AxiosTest from 'pages/AxiosTestPage';
import LoginTest from 'pages/LoginTestPage';
import TestPage from 'pages/TestPage';
import * as Pages from "pages/Pages";



function App() {

  return (
      <div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Pages.MainPage />}></Route>
					<Route path="/sign-in" element={<Pages.SignInPage />}></Route>
					<Route path="/sign-up" element={<Pages.SignUpPage />}></Route>
					<Route path="/certificate" element={<Pages.CertificatePage />}></Route>
					<Route path="/course/upload" element={<Pages.LectureUploadPage />}></Route>
					<Route path="/course/view/:id" element={<Pages.LectureViewPage/>}></Route>
					<Route path="/course/list" element={<Pages.LectureRoomPage/>}></Route>
					<Route path="/mypage" element={<Pages.MyPage/>}></Route>
					<Route path="/overview" element={<TestPage />}></Route>
					<Route path="/axios-test" element={<AxiosTest />}></Route>
					<Route path="/login-test" element={<LoginTest />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
  );
}

export default App;
