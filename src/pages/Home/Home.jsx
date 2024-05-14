import { Helmet } from "react-helmet";
import HomeBanner from "../../components/banner/HomeBanner";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import DirectionMap from "../../components/directionMap/DirectionMap";
import FeaturedRooms from "../../components/featuredRooms/FeaturedRooms";
import AllReviews from "../../components/allReviews/AllReviews";
import Modal from "../../components/modal/Modal";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect } from "react";
import { getStoredId } from "../../Utilities/LocalStorage";
import useAuth from "../../hooks/useAuth";
import { useFetcher } from "react-router-dom";

const Home = () => {
  const [isActivate, setIsActivate] = useState(false);
  const [popupModal, setPopupModal] = useState(true);
  const offerId = getStoredId("offer-key");
  const {signUpSuccess}= useAuth();

  useEffect(() => {
    if(signUpSuccess){
        window.location.reload()
    }
  }, [signUpSuccess]);

  useEffect(() => {
      if (offerId.includes(10)) {
        setPopupModal(false)
      }
  }, [isActivate]);

  const handleClose = () => {
    setPopupModal(false);
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wander Wave</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <HomeBanner />
      <div className="mt-36 md:mt-10">
        <FeaturedRooms />
      </div>
      <div className="md:mx-5 mx-2">
        <NewsLetter />
      </div>
      <div className="md:mt-20 mt-10">
        <DirectionMap />
      </div>
      <div className="my-10 md:my-20">
        <AllReviews />
      </div>
      {popupModal && (
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://i.pinimg.com/736x/12/d0/e3/12d0e332933e300443d5ab365a71b671.jpg")`,
          }}
          className=" z-[99] h-[500px] md:w-[400px] w-[80%] rounded bg-white fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cover bg-center bg-no-repeat shadow-[1px_1px_150px_20px_#9a9999e5]"
        >
          <div className="w-full h-full relative px-3">
            <Modal setIsActivate={setIsActivate} />
            <form onSubmit={handleClose}>
              <button className="p-1 rounded absolute top-3 right-3 bg-white text-xl">
                <IoCloseSharp />
              </button>
              <button className="absolute px-3 py-2 left-1/2 transform -translate-x-1/2 rounded bottom-3   text-white bg-[#201f1f]">
                No Thanks
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
