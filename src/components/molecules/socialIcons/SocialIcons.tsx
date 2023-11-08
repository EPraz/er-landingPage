import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-white relative top-4 bottom-2 right-2">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="inline-flex mb-2 p-2 cursor-pointer items-center
            rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-blue-400
            duration-300"
        >
          {/* <ion-icon name={icon.name}></ion-icon> */} // is depracated
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
