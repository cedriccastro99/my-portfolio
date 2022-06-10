import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CopyToClipboard = () => {


    const copy = toast.success('Copy to clipboard!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

  return copy
}

export default CopyToClipboard