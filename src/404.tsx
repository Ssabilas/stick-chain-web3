import Avatar from "/assets/404.png";

const NotFound = () => {
  return (
    <>
      <section
        className={`bg-[url('/assets/Hero-Gradient.png')] bg-center bg-cover w-[100vw] flex justify-center items-center flex-col p-20 h-[80vh] -z-0`}
      >
        <img src={Avatar} alt="Bad Request Image" className="w-[500px]" />
        <h2 className="text-5xl font-bold">Please Enter the Correct URL</h2>
      </section>
    </>
  );
};

export default NotFound;
