import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
Modal.setAppElement('#root'); // Accessibility setting

export default function Login({ modalIsOpen,setModalIsOpen,setIsSignUpOpen }) {
  let navigate = useNavigate()
  const closeModal = () => {
    setModalIsOpen(false);
  };
  
  
  const openSignUpModal = () => {
    navigate("/SignUp")
    setIsSignUpOpen(true);
    setModalIsOpen(false);
    
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
        className="flex items-center justify-center h-screen"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
          <h2 className="text-2xl font-bold mb-4">Sign In</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </form>
          <button
             onClick={closeModal}
            className="w-full bg-gray-300 text-gray-700 py-2 rounded-md mt-4 hover:bg-gray-400 transition duration-200"
          >
            Close
          </button>
          <div className="mt-5">
            <p className="text-gray-700">
              Don’t have an account?{' '}
              <button className="font-bold" onClick={openSignUpModal}>
                Sign up
              </button>
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
