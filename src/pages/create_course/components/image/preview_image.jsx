import React from "react";

import { ReactComponent as Trash } from "../../../../assets/icons/trash.svg";

const PreviewImage = ({
  width = 24,
  height = 24,
  blob,
  id,
  uploaded,
  percent = 0,
  deleteFn,
}) => {
  return (
    <div className="w-max h-max relative">
      {uploaded === false && (
        <div className="flex items-center justify-center bg-white bg-opacity-35 absolute top-0 left-0 bottom-0 right-0 z-50">
          <progress
            className="progress progress-error w-[70%] border border-white bg-gray-100"
            value={percent}
            max="100"
          ></progress>
        </div>
      )}
      <img
        className={`w-${width} h-${height} border rounded-md object-cover`}
        src={blob}
        alt={blob}
        loading="lazy"
      />
      {uploaded !== false && (
        <div className="inline-flex w-6 absolute h-max p-1 rounded-md bg-gray-300 top-2 left-2 cursor-pointer opacity-40 hover:opacity-95">
          <Trash />
        </div>
      )}
    </div>
  );
};

export default PreviewImage;
