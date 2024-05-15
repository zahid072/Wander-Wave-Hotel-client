import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Gallery = () => {

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Bookings || Wander Wave</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="relative">
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://berlin.yourhotelwebsite.com/upload/heading/image-1600x800_8.webp")`,
          }}
          className="h-96 w-full bg-no-repeat bg-cover bg-center flex flex-col gap-5 items-center justify-center text-white"
        >
          <nav aria-label="breadcrumb" className="w-full p-4 text-gray-100">
            <ol className="flex justify-center flex-wrap h-8 space-x-2">
              <li className="flex items-center">
                <Link
                  to={"/"}
                  rel="noopener noreferrer"
                  title="Back to homepage"
                  className="hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 pr-1 underline text-gray-100 "
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                /
                <Link
                  to={"/gallery"}
                  rel="noopener noreferrer"
                  className="flex items-center px-1 active:underline capitalize hover:underline"
                >
                  GALLERY
                </Link>
              </li>

              <li className="flex items-center space-x-2">
                /
                <Link
                  to={"/rooms"}
                  rel="noopener noreferrer"
                  className="flex items-center px-1 hover:underline  cursor-default uppercase"
                >
                  book rooms
                </Link>
              </li>
            </ol>
          </nav>
          <h1 className="font-gilda px-2 text-center md:text-5xl text-3xl font-semibold tracking-widest">
            GALLERY
          </h1>
        </div>
      </div>
      <div className="md:py-20 py-10">
      <section className="py-6 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src="https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src="https://media.istockphoto.com/id/1056591466/photo/lassic-interior-in-olive-colors-with-wooden-wall-panels-sconces-and-niche-3d-rendering.webp?b=1&s=612x612&w=0&k=20&c=SVjj5UJl9OZL9YKIHqcWTeHNAzIq-fMyDkkA2Po7ZPI=" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src="https://longbeachhotelbd.com/wp-content/uploads/2023/05/honeymoonSuite_header.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src="https://media.istockphoto.com/id/1494891709/photo/mockup-poster-frame-on-the-wall-of-living-room-luxurious-apartment-background-with.webp?b=1&s=612x612&w=0&k=20&c=OhdoMUPAwxZ0RbnuzSegYe0M48qwtm3D0xrvk7N0DeU=" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src="https://media-cdn.tripadvisor.com/media/photo-s/11/86/ef/2b/front-desk-very-friendly.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src="https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_960_720.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src="https://img.freepik.com/premium-photo/luxury-beautiful-hotel-resort-room-picture_925414-341.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src="https://images.rosewoodhotels.com/is/image/rwhg/RWLDN_Rose%20Bronze%20Gallery_%C2%A9Durston%20Saylor-1:WIDE-LARGE-16-9" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 dark:bg-gray-500 aspect-square" src="https://traveler.marriott.com/wp-content/uploads/2023/12/6046391-hotel-per-la.1279718.jpg" />
		<img src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGx1eHVyeSUyMGhvdGVsfGVufDB8fDB8fHww" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 dark:bg-gray-500 aspect-square" />
	</div>
</section>
<section className="py-6 bg-gray-800 dark:bg-gray-100">
	<div className="container flex flex-col justify-center p-4 mx-auto">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
			<img className="object-cover w-full bg-gray-500 dark:bg-gray-500 aspect-square" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRahkbuCugeU8pNEQ5auUYBlDc5OwDWMlKlNKbGZQblmsnlm_T5o59HoakbpwAmTwTgzvY&usqp=CAU" />
			<img className="object-cover w-full bg-gray-500 dark:bg-gray-500 aspect-square" src="https://www.chelseatoronto.com/en/uploads/images/2023/03/chelsea-hotel-executive-room2.jpg" />
			<img className="object-cover w-full bg-gray-500 dark:bg-gray-500 aspect-square" src="https://cdn.marriottnetwork.com/uploads/sites/22/2019/10/the-mayflower-hotel-exterior-lights.jpg" />
			<img className="object-cover w-full bg-gray-500 dark:bg-gray-500 aspect-square" src="https://www.peninsula.com/en/-/media/images/new-york/03roomssuites/suitetype_03_executibe/executive-suite-bedroom2_p.jpg?mw=905&hash=2F8C917B0429702E273E9212FDAD4FDE" />
		</div>
	</div>
</section>
      </div>
    </div>
  );
};

export default Gallery;
