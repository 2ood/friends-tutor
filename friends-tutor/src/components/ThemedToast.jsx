import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function ThemedToast(){
    return (
        <ToastContainer
                position="bottom-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
        />  
    )
}

export default ThemedToast;
