import React from "react";
import { FaEllipsisH } from "react-icons/fa";

function UserInfo() {
  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row md:h-40 lg:h-40  border-b">
        <div className="profile-pic  py-2 w-full md:w-64 lg:w-64 flex justify-center">
          <img
            className="nline-block h-36 w-36  rounded-full ring-2 ring-white"
            src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg"
            //   width={100}
            alt=""
          />
        </div>
        <div className="profile-info w-full ">
          <div className="info-top flex justify-center md:justify-start items-center">
            <h2 className="text-2xl">saharat.vith</h2>
            <button className="bg-blue-500 mx-5 py-1 px-6 rounded text-white">
              Follow
            </button>
            <a href="#">
              <FaEllipsisH />
            </a>
          </div>
          <div className="info-middle my-4 flex justify-center md:justify-start ">
            <p className="mr-5">
              <b>55</b> posts
            </p>
            <p className="mr-5">
              <b>78.7k</b> followers
            </p>
            <p className="mr-5">
              <b>759</b> following
            </p>
          </div>
          <div className="info-bottom flex justify-center md:justify-start ">
            <p>
              158/07 🎧•.* <span className="text-gray-700">she/her</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
