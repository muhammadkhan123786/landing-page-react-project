const Container = ({ children }) => {
  return (
    <section className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <main className="container mx-auto pt-44 pb-4 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        {children}
      </main>
    </section>
  );
};

export default Container;
