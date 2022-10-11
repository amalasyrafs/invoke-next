import React from "react";
import Navbar from "../Main/navbar";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [type, setType] = useState("");
  const [method, setMethod] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    // Get data from the form.
    const data = {
      name: name,
      email: email,
      contact: contact,
      company: company,
      address: address,
      website: website,
      type: type,
      method: method,
      interest: interest,
      message: message,
    };
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    // const endpoint = "/sendcontactform";
    const endpoint = "/test";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    // Execute the reCAPTCHA when the form is submitted
    recaptchaRef.current.execute();
  };
  const recaptchaRef = React.createRef();

  const onReCAPTCHAChange = (captchaCode) => {
    if (!captchaCode) {
      return;
    }
    recaptchaRef.current.reset();
  };

  return (
    <div className="flex flex-col bg-[#F2F2F2] w-full">
      <div className="flex w-full">
        <div className="lg:w-1/12"></div>
        <div className="w-full">
          <Navbar />
        </div>
        <div className="lg:w-1/12"></div>
      </div>
      <div className="my-[10vh]">
        <div className="flex flex-col lg:flex-row w-full min-h-screen justify-center align-middle gap-10">
          {/* address and social media details */}
          <div className="lg:w-4/12 px-4">
            <div>
              <p className="font-sans text-[1.8em] text-black mb-5 leading-[1.5em] font-normal">
                Mailing Address
              </p>
              <p className="mb-10 font-sans text-[1.3em] text-[#575757] leading-[1.5em] font-normal">
                INVOKE Solutions Sdn Bhd
                <br />
                Level 2-4, 80, Jalan Tasik Utama 5<br />
                Sungai Besi
                <br />
                57000 Kuala Lumpur
                <br />
                Malaysia
              </p>
            </div>
            <div>
              <p className="font-sans text-[1.8em] text-black mb-5 leading-[1.5em] font-normal">
                Follow Us
              </p>
              <a href="https://www.facebook.com/invokeisdata">
                <p className="font-sans text-[1.3em] text-[#575757] leading-[1.5em] font-normal">
                  Facebook
                </p>
              </a>
              <a href="https://twitter.com/invokeisdata/">
                <p className="font-sans text-[1.3em] text-[#575757] leading-[1.5em] font-normal">
                  Twitter
                </p>
              </a>
              <a href="https://www.instagram.com/invokeisdata/">
                <p className="font-sans text-[1.3em] text-[#575757] leading-[1.5em] font-normal">
                  Instagram
                </p>
              </a>
              <a href="https://www.linkedin.com/company/invokeisdata/">
                <p className="font-sans text-[1.3em] text-[#575757] leading-[1.5em] font-normal">
                  LinkedIn
                </p>
              </a>
            </div>
          </div>

          {/* forms */}
          <div className="flex flex-col lg:w-5/12">
            <div className="px-4">
              <p className="font-sans text-[2.5em] text-black mb-5 leading-[1.5em] font-normal">
                Happy to help!
              </p>
              <div className="h-[0.1em] bg-black rounded mb-10 lg:w-8/12"></div>
            </div>
            <div className="px-4 flex flex-col">
              <form onSubmit={handleSubmit}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Name*"
                  className="w-full mb-5 rounded border-gray-300 text-gray-700"
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email*"
                  className="w-full mb-5 rounded border-gray-300 text-gray-700"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                  id="contact"
                  name="contact"
                  type="number"
                  required
                  placeholder="Contact*"
                  className="w-full mb-5 rounded border-gray-300 text-gray-700"
                  onChange={(e) => setContact(e.target.value)}
                ></input>
                <p className="font-sans text-[1.8em] text-[#575757] my-5 leading-[1.5em] font-normal">
                  Tell us a bit about your business
                </p>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  placeholder="Company/Organisation*"
                  className="w-full mb-5 rounded border-gray-300 text-gray-700"
                  onChange={(e) => setCompany(e.target.value)}
                ></input>
                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  placeholder="Address*"
                  className="w-full mb-5 rounded border-gray-300 text-gray-700"
                  onChange={(e) => setAddress(e.target.value)}
                ></input>
                <input
                  id="website"
                  name="website"
                  type="text"
                  required
                  placeholder="Website*"
                  className="w-full mb-5 rounded border-gray-300 text-gray-700"
                  onChange={(e) => setWebsite(e.target.value)}
                ></input>
                <select
                  id="type"
                  name="type"
                  className="w-full mb-5 rounded border-gray-300 text-gray-700"
                  aria-label="Default select example"
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option selected disabled>
                    Company type*
                  </option>
                  <option value="Multinational corporation">
                    Multinational corporation
                  </option>
                  <option value="Government-linked corporation">
                    Government-linked corporation
                  </option>
                  <option value="Government and public bodies">
                    Government and public bodies
                  </option>
                  <option value="Non-profit">Non-profit</option>
                  <option value="SMEs">SMEs</option>
                  <option value="Owner managed business">
                    Owner managed business
                  </option>
                  <option value="Others">Others</option>
                </select>
                <select
                  id="method"
                  name="method"
                  className="w-full mb-5 rounded border-gray-300 text-gray-700"
                  aria-label="Default select example"
                  onChange={(e) => setMethod(e.target.value)}
                  required
                >
                  <option selected disabled>
                    How did you find us?*
                  </option>
                  <option value="Internet search">Internet search</option>
                  <option value="Social media ads">Social media ads</option>
                  <option value="Referral from others">
                    Referral from others
                  </option>
                  <option value="Words of mouth">Words of mouth</option>
                  <option value="Others">Others</option>
                </select>
                <p className="font-sans text-[1.8em] text-[#575757] my-5 leading-[1.5em] font-normal">
                  How can we help you?
                </p>
                <select
                  id="interest"
                  name="interest"
                  className="w-full mb-5 rounded border-gray-300 text-gray-700"
                  aria-label="Default select example"
                  onChange={(e) => setInterest(e.target.value)}
                >
                  <option selected disabled>
                    I am interested to know more on*
                  </option>
                  <option value="Leads-To-Sales (LTS)">
                    Leads-To-Sales (LTS)
                  </option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Analytics">Analytics</option>
                  <option value="Applications Development">
                    Applications Development
                  </option>
                  <option value="Survey">Survey</option>
                  <option value="adnexio">adnexio</option>
                  <option value="meniaga">meniaga</option>
                  <option value="Investor">Investor</option>
                  <option value="Others">Others</option>
                </select>
                <textarea
                  id="message"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  required
                  placeholder="Message*"
                  className="w-full mb-5 rounded border-gray-300 text-gray-700"
                ></textarea>
                <ReCAPTCHA
                  theme="dark"
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={onReCAPTCHAChange}
                  required
                  // asyncScriptOnLoad={this.asyncScriptOnLoad}
                />
                <button
                  type="submit"
                  // disabled={this.state.isLoading}
                  className="rounded-full bg-[#003A51] text-white w-full mt-5 py-1.5"
                >
                  {/* {this.state.isLoading ? (
                  <Spinner animation="border" variant="light" />
                  ) : (
                    "Submit"
                  )} */}
                  Submit
                </button>
                <p className="text-[#575757] mt-2 font-1.8em text-right">
                  *Compulsory
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
