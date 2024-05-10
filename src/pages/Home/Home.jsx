import { Helmet } from "react-helmet";
import HomeBanner from "../../components/banner/HomeBanner";
import NewsLetter from "../../components/newsLetter/NewsLetter";

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
        <NewsLetter/>
      </div>
      
    </div>
  );
};

export default Home;
