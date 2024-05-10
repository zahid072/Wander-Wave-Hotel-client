import { Helmet } from "react-helmet";
import HomeBanner from "../../components/banner/HomeBanner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wander Wave</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <HomeBanner />
    </div>
  );
};

export default Home;
