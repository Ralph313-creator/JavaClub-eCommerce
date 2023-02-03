import React from 'react';

const Contact = () => {
  return (
    <div className=''>
      <div className="flex justify-evenly">
        <div className="box-info">
          <div className="info-image">
            <i className="fas fa-phone-alt"></i>
          </div>
          <h5>Call Us 24x7</h5>
          <p>123-4567</p>
        </div>

        <div className="box-info">
          <div className="info-image">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h5>881 Castro St.</h5>
          <p>Mountain View, CA 94041-2014 650-965-7900</p>
        </div>

        <div className="box-info">
          <div className="info-image">
            <i className="fas fa-fax"></i>
          </div>
          <h5>Fax</h5>
          <p>123-4567</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
