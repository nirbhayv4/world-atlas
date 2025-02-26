export const Contact = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="max-w-7xl m-auto flex   flex-col justify-center items-center">
      <div className="min-w-sm w-full flex-1">
        <h2 className="mt-3  mb-6 py-3  text-4xl font-semibold text-center">
          Contact Us
        </h2>

        <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 ">
          <div className="flex-1">
            <input
              className="px-3 py-2 rounded border w-full"
              type="text"
              required
              autoComplete="off"
              placeholder="Enter your name"
              name="username"
            />
          </div>
          <div className="flex-1">
            <input
              className="px-3 py-2 rounded border w-full"
              type="email"
              required
              autoComplete="off"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <div className="flex-1">
            <textarea
              className="px-3 py-2 rounded border w-full"
              name="message"
              rows={10}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <div className="flex-1">
            <button
              className="rounded-xl mb-3 border px-4 py-1 bg-[#202020] w-full"
              type="submit"
              value="send"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
