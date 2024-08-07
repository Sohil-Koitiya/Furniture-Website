import React from "react";

function Register() {

  return (
    <div>

      
          <section className="container">
            <header className="register-header" >Registration Form</header>
            <form action="" className="register-form">
              <div className="input-box">
                <label>Full Name</label>
                <input type="text" placeholder="Enter full name" required />
              </div>

              <div className="input-box">
                <label>Email Address</label>
                <input type="text" placeholder="Enter email address" required />
              </div>

              <div className="register-column">
                <div className="input-box mx-2">
                  <label>Phone Number</label>
                  <input
                    type="number"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
                <div className="input-box">
                  <label>Birth Date</label>
                  <input type="date" placeholder="Enter birth date" required />
                </div>
              </div>
              
              <div className="gender-box">
                <h3>Gender</h3>
                <div className="gender-option mx-2">
                  <div className="gender">
                    <input type="radio" id="check-male" name="gender" checked />
                    <label for="check-male">male</label>
                  </div>
                  <div className="gender">
                    <input type="radio" id="check-female" name="gender" />
                    <label for="check-female">Female</label>
                  </div>
                  <div className="gender">
                    <input type="radio" id="check-other" name="gender" />
                    <label for="check-other">prefer not to say</label>
                  </div>
                </div>
              </div>
              <div className="input-box address">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Enter street address"
                  required
                />
                <input
                  type="text"
                  placeholder="Enter street address line 2"
                  required
                />
                <div className="column">
                  <div className="select-box">
                    <select>
                      <option hidden>Country</option>
                      <option>America</option>
                      <option>Japan</option>
                      <option>India</option>
                      <option>Nepal</option>
                    </select>
                  </div>
                  <input type="text" placeholder="Enter your city" required />
                </div>
                <div className="column">
                  <input type="text" placeholder="Enter your region" required />
                  <input
                    type="number"
                    placeholder="Enter postal code"
                    required
                  />
                </div>
              </div>
              <button className="btn btn-primary my-2">Submit</button>
            </form>
          </section>


    </div>
  );
}

export default Register;
