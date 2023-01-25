import React from 'react';

const Error = ({message}) => {
  return (
    <div className="flex justify-center items-center z-[100] h-[80vh]">
      <div className=" bg-red-400 w-full h-[100%] flex justify-center items-center rounded-3xl font-sans text-3xl p-10">
        {message}
      </div>
    </div>
  );
};

Error.defaultProps = {
  message: 'unknow error',
};

export default Error;
