import React from 'react';

const Newsletter = () => {
  return (
    <div className="flex justify-center mb-20">
      <div className="box shadow w-[60%]">
        <img
          src="https://lh3.google.com/u/0/d/1-WTX2Kw4ZlgLnwT9gYyFOxVXowT9eS-t=w1375-h881-iv1"
          alt=""
        />
        <h2 className="text-5xl">Subscribe to our Newsletter</h2>
        <p className="text-2xl">
          Our weekly newsletter provides you with the latest and most important
          happenings in the industry.
        </p>
        <div className="form-control">
          <input
            type="text"
            className="input"
            placeholder="Enter e-mail adress"
          />
          <button className="btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
