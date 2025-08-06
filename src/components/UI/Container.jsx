const Container = ({ children }) => {
  return (
    <div
      className={`flex gap-12 flex-col md:flex-row items-center justify-between md:gap-24`}
    >
      {children}
    </div>
  );
};

export default Container;
