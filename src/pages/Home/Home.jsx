import { Helmet } from "react-helmet";
import HomeBanner from "../../components/banner/HomeBanner";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import DirectionMap from "../../components/directionMap/DirectionMap";
import FeaturedRooms from "../../components/featuredRooms/FeaturedRooms";
import AllReviews from "../../components/allReviews/AllReviews";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wander Wave</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <HomeBanner />
      <div className="mt-36 md:mt-10">
        <FeaturedRooms/>
      </div>
      <div className="md:mx-5 mx-2">
        <NewsLetter />
      </div>
      <div className="md:mt-20 mt-10">
        <DirectionMap />
      </div>
      <div className="my-10 md:my-20">
        <AllReviews/>
      </div>
      
    </div>
  );
};

export default Home;
