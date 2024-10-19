import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root'); 

export default function SignUp(
  {
    setIsSignUpOpen,
    isSignUpOpen,
    setModalIsOpen
  }) {
    let navigate = useNavigate()

    const openModal = () => {
        setModalIsOpen(true);
        navigate("/login");
      };

  const closeSignUpModal = () => {
    setIsSignUpOpen(false);
  };

  return (
    <div>
     
      <Modal
        isOpen={isSignUpOpen}
        onRequestClose={closeSignUpModal}
        contentLabel="Sign Up Modal"
        className="flex items-center justify-center h-screen "
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg  py-10 w-96">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
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
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
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
            <div className="mb-6">
              <label
                htmlFor="ConfirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                ConfirmPassword:
              </label>
              <input
                type="password"
                id="ConfirmPassword"
                name="ConfirmPassword"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Sign Up
            </button>
          </form>
          <button
            onClick={closeSignUpModal}
            className="w-full bg-gray-300 text-gray-700 py-2 rounded-md mt-4 hover:bg-gray-400 transition duration-200"
          >
            Close
          </button>
          <div className="mt-5">
            <p className="text-gray-700">
              You have an account?{' '}
              <button className="font-bold" onClick={()=>openModal()}>
                Sign in
              </button>
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
