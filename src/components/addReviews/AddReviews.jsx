import React from "react";
import { FaXmark } from "react-icons/fa6";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useState } from "react";
import Swal from "sweetalert2";

const AddReviews = ({ room_id, setReviewModal }) => {
  const [rating, setRating] = useState(4);
  const [comment, setComment] = useState("Great stay! Everything was perfect.");
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { displayName, photoURL, email, reloadUserInfo } = user;
  const user_email = email ? email : reloadUserInfo?.providerUserInfo[0].email;

  const clientReview = { user_name: displayName, user_image: photoURL, user_email, room_id, rating: parseInt(rating), comment, timestamp: new Date().toISOString() };
 
  const handleAddReviews = () => {
    
    axiosSecure.post("/clientReviews", clientReview)
    .then(res=>{
        if(res.data.insertedId){
            setReviewModal(false);
            Swal.fire({
                title: "Success!",
                text: "Thank You for your feedback.",
                icon: "success",
                confirmButtonText: "Ok",
              });
        }
    }).catch(err=>{
      setReviewModal(false)
      Swal.fire({
        title: "Error!",
        text: err.message,
        icon: "error",
        confirmButtonText: "Close",
      });
    })
  };
  return (
    <>
      <div className=" mb-20 mt-6 w-full">
        <div>
          <h1 className="text-center">How was your experience?</h1>
          <form className="rating flex justify-center py-5 rating-lg ">
            <input
              type="radio"
              defaultValue={1}
              onChange={(e) => {
                setRating(e.target.value);
              }}
              name="rating-8"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              defaultValue={2}
              onChange={(e) => {
                setRating(e.target.value);
              }}
              name="rating-8"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              defaultValue={3}
              onChange={(e) => {
                setRating(e.target.value);
              }}
              name="rating-8"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              defaultValue={4}
              onChange={(e) => {
                setRating(e.target.value);
              }}
              name="rating-8"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              defaultValue={5}
              onChange={(e) => {
                setRating(e.target.value);
              }}
              name="rating-8"
              className="mask mask-star-2 bg-orange-400"
            />
          </form>
        </div>
        <div className="flex md:flex-row flex-col gap-5">
          <div>
            <label>Name</label>
            <input
              type="text"
              className="input mt-2 w-full input-bordered opacity-70 font-bold"
              value={displayName}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              className="input mt-2 w-full input-bordered opacity-70 font-bold"
              value={user_email}
            />
          </div>
        </div>
        <div className="mt-5">
          <label>Comments</label>
          <textarea
            placeholder="Great stay! Everything was perfect."
            onChange={(e)=>{
                setComment(e.target.value)
            }}
            name="comments"
            className="h-20 mt-2 w-full textarea textarea-bordered"
            id=""
          ></textarea>
        </div>
      </div>
      <button
        onClick={() => {
          setReviewModal(false);
        }}
        className="p-1  rounded bg-slate-200 absolute top-2 right-2"
      >
        <FaXmark />
      </button>

      <button
        onClick={handleAddReviews}
        className="px-5 py-2 rounded bg-[#343850] hover:bg-[#2a2f41] text-white absolute bottom-5 left-1/2 transform -translate-x-1/2 font-bold"
      >
        ADD
      </button>
    </>
  );
};

export default AddReviews;
