import React from "react";

function ContactUs() {
  return (
    <div>
     
      <div className="contact_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="contact_text">CONTACT US</h1>
              <div className="mail_sectin">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Name"
                  name="Name"
                />
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Email"
                  name="Name"
                />
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Phone Number"
                  name="Name"
                />
                <textarea
                  className="massage-bt"
                  placeholder="Massage"
                  rows="5"
                  id="comment"
                  name="Massage"
                ></textarea>
                <div className="send_bt">
                  <a href="#">SEND</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map_main">
                <div className="map-responsive">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France"
                    width="600"
                    height="500"
                    frameBorder="0"
                    style={{"border":"0","width": "100%"}}
                    allowFullScreen=""
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default ContactUs;
