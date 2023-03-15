import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AxiosTestPage from 'pages/AxiosTestPage';
import LoginTestPage from 'pages/LoginTestPage';
import TestPage from 'pages/TestPage';
import * as Pages from "pages/Pages";
import {FE_PATH} from "util/Enums";


function App() {

  return (
      <div className="App">
			<BrowserRouter>
				<Routes>
					<Route path={FE_PATH.main} element={<Pages.MainPage />}></Route>
					<Route path={FE_PATH.auth.signin} element={<Pages.SignInPage />}></Route>
					<Route path={FE_PATH.auth.signup} element={<Pages.SignUpPage />}></Route>
					<Route path={FE_PATH.course.upload} element={<Pages.LectureUploadPage />}></Route>
					<Route path={`${FE_PATH.course.view}:id`} element={<Pages.LectureViewPage/>}></Route>
					<Route path={FE_PATH.course.list} element={<Pages.LectureRoomPage/>}></Route>
					<Route path={FE_PATH.mypage.certificate} element={<Pages.CertificatePage />}></Route>
					<Route path={FE_PATH.mypage.mypage} element={<Pages.Mypage/>}></Route>
					<Route path="/overview" element={<TestPage />}></Route>
					<Route path="/axios-test" element={<AxiosTestPage />}></Route>
					<Route path="/login-test" element={<LoginTestPage />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
  );
}

export default App;
