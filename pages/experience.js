const Experience = (props, ref) => {
  return (
    <section
      id="experience"
      className="bg-rose-600 dark:bg-red-500 py-6 h-screen"
      ref={ref}
    >
      {/* <div className="mx-auto h-full px-4 h-fit md:max-w-10xl"> */}
      <div className="mx-auto px-4 w-2/3">
        <h1 className="headline text-3xl md:text-5xl lg:text-4xl text-center">
          My timeline
        </h1>
        <div className="border-l-2 mt-10">
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

            <div className="flex-auto">
              <h1 className="text-lg">Day 1</h1>
              <h1 className="text-xl font-bold">
                Orientation and Briefing on Uniliver basics
              </h1>
              <h3>Classroom</h3>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto grid md:grid-cols-2 min-h-screen-without-nav items-center content-center">
        <div className="w-12/12 md:w-12/12 lg:6/12 mx-auto relative py-20">
          <h1 className="text-3xl text-center font-bold text-blue-500">
            Timeline with Tailwindcss
          </h1>
          <div className="border-l-2 mt-10">
            <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

              <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

              <div className="flex-auto">
                <h1 className="text-lg">Day 1</h1>
                <h1 className="text-xl font-bold">
                  Orientation and Briefing on Uniliver basics
                </h1>
                <h3>Classroom</h3>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Experience;
