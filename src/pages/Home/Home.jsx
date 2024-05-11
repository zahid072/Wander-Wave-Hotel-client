import { Helmet } from "react-helmet";
import HomeBanner from "../../components/banner/HomeBanner";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import DirectionMap from "../../components/directionMap/DirectionMap";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wander Wave</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <HomeBanner />
      <div>
        <NewsLetter />
      </div>
      <div className="my-10">
        <DirectionMap />
      </div>
    </div>
  );
};

export default Home;
