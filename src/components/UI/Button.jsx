const Button = ({ children }) => {
  return (
    <button
      className={`md:block bg-blue-600 text-white px-6 py-2.5 w-fit rounded-2xl hover:bg-blue-700 transition-all duration-300 cursor-pointer text-sm font-medium shadow-lg hover:shadow-blue-300`}
    >
      {children}
    </button>
  );
};

export default Button;
