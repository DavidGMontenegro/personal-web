import "./styles/contactMe.css";

function ContactMe() {
  return (
    <>
      <div className="card">
        <div className="secondary-card">
          <img src="src/assets/email.jpg"></img>
        </div>
        <div className="secondary-card">
          <h2>Get in touch</h2>
          <form>
            <div className="inputContainer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                className="inputIcon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.81828 5.27239C2.22012 5.17193 2.62732 5.41625 2.72778 5.81809L3.10975 7.34596C3.71957 9.78523 5.64125 11.6764 8.0847 12.25H16.0002C18.0912 12.25 19.8512 13.8151 20.0956 15.8918L20.745 21.4124C20.7934 21.8237 20.4992 22.1965 20.0878 22.2449C19.6764 22.2933 19.3037 21.999 19.2553 21.5876L18.6058 16.0671C18.4504 14.7458 17.3306 13.75 16.0002 13.75H7.91785L7.83748 13.7321C4.80227 13.0576 2.40864 10.7262 1.65454 7.70976L1.27257 6.1819C1.17211 5.78005 1.41643 5.37285 1.81828 5.27239Z"
                  fill="#1C274C"
                />
                <path
                  opacity="0.5"
                  d="M8 13.75V18C8 19.8856 8 20.8284 8.58579 21.4142C9.17157 22 10.1144 22 12 22C13.8856 22 14.8284 22 15.4142 21.4142C16 20.8284 16 19.8856 16 18V13.75H8Z"
                  fill="#1C274C"
                />
                <circle cx="12" cy="6" r="4" fill="#1C274C" />
              </svg>
              <input
                type="text"
                placeholder="Name"
                className="inputField"
                required
              />
            </div>
            <div className="inputContainer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                className="inputIcon"
              >
                <path
                  d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                  stroke="#252525"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="#252525"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <input
                type="email"
                placeholder="Email"
                className="inputField"
                required
              />
            </div>

            <div className="inputContainer">
              <textarea
                placeholder="Message"
                className="textInputField"
                required
              />
            </div>

            <button type="submit" className="btn">
              Send email
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactMe;