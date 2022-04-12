const Container = ({ children }) => {
  return (
    <div className="flex flex-col mx-auto min-h-screen justify-center px-4 md:max-w-5xl">
      {children}
    </div>
  );
};

export { Container };
