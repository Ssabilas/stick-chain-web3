import Avatar from "/assets/404.png";

const NotFound = () => {
  return (
    <>
      <section
        className={`bg-[url('/assets/Hero-Gradient.png')] bg-center bg-cover w-[100vw] flex justify-center items-center flex-col p-20 h-[80vh] -z-0`}
      >
        <img src={Avatar} alt="Avatar 404" className="w-[400px]" />
        <div className="flex flex-row items-center justify-center gap-8 px-12 py-8 bg-colorGrayDark/50 rounded-xl">
          <i className="text-6xl font-bold ri-close-large-line text-colorRed"></i>
          <h2 className="text-5xl font-bold">Please Enter the Correct URL</h2>
        </div>
      </section>
    </>
  );
};

export default NotFound;
