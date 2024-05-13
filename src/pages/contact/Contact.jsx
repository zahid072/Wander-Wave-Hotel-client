import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { FaLocationDot } from "react-icons/fa6";
import DirectionMap from "../../components/directionMap/DirectionMap";

const Contact = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!user) {
      navigate("/signIn");
      return;
    }
    e.target.reset();
    toast.success(
      "You've successfully sent your message. We'll get back to you soon!"
    );
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact || Wander Wave</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="py-5">
        <div className="h-[630px] relative overflow-hidden ">
          <div className="absolute bottom-0 w-full">
            <DirectionMap />
          </div>
        </div>
        <div className="flex my-10 lg:flex-row gap-5 max-w-7xl lg:mx-auto mx-2 flex-col">
          <div className=" lg:w-1/2 flex flex-col *:cursor-pointer w-full justify-center items-center gap-8">
            <h1 className="text-center font-bold text-3xl my-5">
              CONTACT INFO
            </h1>
            <p className=" md:text-3xl flex  flex-row gap-5">
              <FaLocationDot className="text-[#5C8392] text-center text-3xl " />
              <span className="text-xl">Dhaka, Bangladesh</span>
            </p>
            <p className=" md:text-3xl flex flex-row gap-5">
              <BsTelephone className="text-[#5C8392]  text-3xl" />
              <span className="text-xl">+880 01358545556</span>
            </p>
            <p className=" md:text-3xl flex flex-row gap-5">
              {" "}
              <MdOutlineMailOutline className="text-[#5C8392] text-center  text-3xl" />
              <span className="text-xl">jahidhasan@gmail.com</span>
            </p>
          </div>

          <div className="lg:w-1/2 w-full">
            <h1 className="text-center md:text-5xl text-2xl font-bold ">
              GET IN <span className="text-[#5C8392]">TOUCH</span>
            </h1>
            <p className="max-w-3xl mx-auto text-gray-500 text-center mt-5">
              Have a question or need assistance? Reach out to us at Crafty
              Corner! We're here to help with inquiries, orders, collaborations,
              and more. Contact us today!
            </p>
            <form
              onSubmit={handleSendMessage}
              className=" p-10 max-w-4xl mx-auto"
            >
              <div className="flex flex-col gap-5 *:w-full *:border *:border-gray-300">
                <input
                  className="input"
                  placeholder="Full Name"
                  type="text"
                  required
                />
                <input
                  className="input"
                  placeholder="Email"
                  type="email"
                  required
                />
                <input className="input" placeholder="Phone" type="number" />
              </div>
              <textarea
                name=""
                className="w-full my-5 rounded textarea border border-gray-300"
                placeholder="Message"
                cols="30"
                rows="5"
              ></textarea>
              <div className="flex justify-center">
                <button className="btn bg-[#30424E] hover:bg-[#435b6b] text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
