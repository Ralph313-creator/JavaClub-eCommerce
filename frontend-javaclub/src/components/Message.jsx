import React from 'react';

const Error = ({message}) => {
  return (
    <div className="flex justify-center items-center z-[100]">
      <div className=" bg-[#d82f424a] w-full min-h-[20rem] flex justify-center items-center rounded-lg font-sans text-3xl p-10">
        {message}
      </div>
    </div>
  );
};

Error.defaultProps = {
  message: 'unknow error',
};

export default Error;
