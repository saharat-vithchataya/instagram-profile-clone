import React from "react";

function Toggle() {
  return (
    <>
      <div>
        <ul className="flex justify-center my-2 text-sm">
          <li className="mx-5 border-black">
            <a href="">POSTS</a>
          </li>
          <li className="mx-5">
            <a href="">GUIDE</a>
          </li>
          <li className="mx-5">
            <a href="">REELS</a>
          </li>
          <li className="mx-5">
            <a href="">VIDEOS</a>
          </li>
          <li className="mx-5">
            <a href="">TAGGED</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Toggle;
