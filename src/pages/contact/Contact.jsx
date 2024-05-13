import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  // const { user } = useContext(AuthContext);
  // const navigate = useNavigate();
  // console.log(user);
  // const handleSendMessage = (e) => {
  //   e.preventDefault();
  //   if (!user) {
  //     navigate("/signIn");
  //     return;
  //   }
  //   e.target.reset();
  //   toast.success(
  //     "You've successfully sent your message. We'll get back to you soon!"
  //   );
  // };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact || Wander Wave</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* <div className="py-5">
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold text-center py-24 bg-gradient-to-r text-white from-[#30424E] to-[#5C8392] rounded">
          Contact
        </h1>
        <div className="flex md:flex-row flex-col *:cursor-pointer pl-10 w-full justify-evenly gap-8 py-10">
          <p className=" md:text-3xl flex md:flex-col flex-row gap-5">
            <FaLocationDot className="text-[#5C8392] text-center md:text-5xl text-3xl md:ml-7" />
            <span>Location</span>
            <span className="text-xl">Dhaka, Bangladesh</span>
          </p>
          <p className="text-center md:text-3xl flex md:flex-col flex-row gap-5">
            <BsTelephone className="text-[#5C8392] text-center md:text-5xl text-3xl md:ml-5" />
            <span>Phone</span>
            <span className="text-xl">+880 01358545556</span>
          </p>
          <p className=" md:text-3xl flex md:flex-col flex-row gap-5">
            {" "}
            <MdOutlineMailOutline className="text-[#5C8392] text-center md:text-5xl text-3xl md:ml-2" />
            <span>Email</span>{" "}
            <span className="text-xl">jahidhasan@gmail.com</span>
          </p>
        </div>

        <div>
          <h1 className="text-center md:text-5xl text-2xl font-bold ">
            Send a <span className="text-[#5C8392]">message</span>
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
            <div className="flex md:flex-row flex-col gap-5 *:w-full *:border *:border-gray-300">
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
        <ToastContainer />
      </div> */}
    </div>
  );
};

export default Contact;
