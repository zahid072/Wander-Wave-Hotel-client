import { Helmet } from "react-helmet";
import { useLoaderData} from "react-router-dom";
import RoomDetailsRight from "../../components/roomDetails/RoomDetailsRight";
import RoomDetailsLeft from "../../components/roomDetails/RoomDetailsLeft";

const RoomDetails = () => {
  const room = useLoaderData()

  const { name, images, guests, availability } = room;
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Details || Wander Wave</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="relative">
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://media.designcafe.com/wp-content/uploads/2023/09/11183952/modern-luxury-bedroom-design.jpg")`,
          }}
          className="h-80 w-full bg-no-repeat bg-cover bg-center flex items-center justify-center text-white"
        >
          <h1 className="font-gilda px-2 text-center md:text-6xl text-3xl font-semibold tracking-widest">
            Room Details
          </h1>
        </div>
      </div>
          <div className="my-10 max-w-7xl lg:mx-auto mx-2">
            <h1 className="text-3xl text-end font-semibold uppercase tracking-widest">{name}</h1>

          </div>
      <div className="flex lg:flex-row flex-col-reverse gap-5 max-w-7xl lg:mx-auto mx-2">
        <div className="lg:w-1/3 w-full ">
          <div className="sticky top-0">
         <RoomDetailsRight room={room}/>
          </div>
        </div>
        <div className="lg:w-2/3 w-full ">
          <RoomDetailsLeft images={images} room={room}/>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
