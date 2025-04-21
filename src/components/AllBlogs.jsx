const AllBlogs = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-between gap-3 md:flex-row flex-col">
        <p className="sm:text-[48px] text-2xl leading-8 font-bold">
          All <span className="text-[#00A88E]"> Blogs</span>
        </p>
      </div>
      <div className="flex items-center flex-wrap justify-center gap-4 sm:py-12 py-5">
        <div>
          <button
            className={` sm:py-[11px] py-1  sm:px-6 px-4 border rounded-3xl text-white bg-[#0060AF]  `}
          >
            All{" "}
            <span
              className={`px-[6px] py-1  rounded-lg ms-1  text-[#008F79] bg-[#EAECF0] h-[20px] `}
            >
              10
            </span>
          </button>
        </div>
        <div>
          <button
            className={` sm:py-[11px] py-1  sm:px-6 px-4 border rounded-3xl bg-white`}
          >
            Frontend{" "}
            <span className={`px-[6px] py-1  rounded-lg ms-1 bg-[#EAECF0] h-[20px] `}>
              5
            </span>
          </button>
        </div>
        <div>
          <button
            className={` sm:py-[11px] py-1  sm:px-6 px-4 border rounded-3xl bg-white`}
          >
            Node.js{" "}
            <span className={`px-[6px] py-1  rounded-lg ms-1 bg-[#EAECF0] h-[20px]`}>
              5
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
