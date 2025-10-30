import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";

export function Subscribe({setSharedEmail}) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [ isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  useEffect( () => {
    setSharedEmail(email);
  }, [email]);

  const isDesktop = useMediaQuery({ minWidth: 768});

  const validateEmail = (event) => {
    event.preventDefault();

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Success");
      setIsValid(true);
      setTimeout(() => {
        navigate("Subscribed");
      }, 1000);
    } else {
      setMessage("Valid email required");
      setIsValid(false);
    }
  };

  return (
    <div className="flex flex-col w-96 mr-0 ml-0 md:grid md:grid-cols-2 md:w-3xl md:bg-white md:p-5 md:rounded-2xl">
      <img
        src={isDesktop ? "../assets/images/illustration-sign-up-desktop.svg" : "../assets/images/illustration-sign-up-mobile.svg"}
        alt="illustration sign up"
        className="w-96 md:row-start-1 md:col-start-2"
      />

      <div className="p-8 pt-0 text-neutralBlue-700 md:row-start-1 md:col-start-1">
        <h1 className="text-4xl mt-6 font-extrabold text-neutralBlue-800 md:mt-12">Stay updated!</h1>

        <p className="mt-4">
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <ul className="mt-2">
          <li className="mt-2 flex items-center">
            <ion-icon name="checkmark-circle" className="text-primaryRed text-[24px]"></ion-icon>
            <div className="pl-4">Product discovery and building what matters</div>
          </li>
          <li className="mt-2 flex items-center">
            <ion-icon name="checkmark-circle" className="text-primaryRed text-[24px]"></ion-icon>
            <div className="pl-4">Measuring to ensure updates are a success</div>
          </li>
          <li className="mt-2 flex items-center">
            <div>
              <ion-icon name="checkmark-circle" className="text-primaryRed text-[24px]"></ion-icon>
            </div>
            <div className="pl-4">And much more!</div>
          </li>
        </ul>

        <form action="#" className="mt-4">
          <label htmlFor="email" className="font-semibold flex justify-between">
            <div>Email address</div>
            <p className={ message === "Success"? "text-green-500":"text-primaryRed"}>{message}</p>
          </label>
          <div>
            <input
              type="text"
              value={email}
              placeholder="email@company.com"
              required
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className={`w-full p-4 rounded-lg border-neutralGrey border-2 mt-2 
                ${isValid && message === "Success"
                  ? "border-green-500 text-green-500 bg-[hsla(144.07,100%,39%,0.05)]"
                  : !isValid && message === "Valid email required" 
                  ? "border-primaryRed text-primaryRed bg-[hsla(4,100%,67%,0.05)]"
                  : email === ""
                  ? "border-neutralGrey text-neutralGrey bg-white"
                  : ""
                }`}
            />
          </div>

          <button
            onClick={validateEmail}
            className="mt-4 text-white bg-neutralBlue-800 w-full p-4 rounded-lg font-bold 
            active:bg-[linear-gradient(90deg,rgba(214,179,92,1)_0%,rgba(230,60,26,1)_50%,rgba(255,98,87,1)_100%)]"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </div>
  );
}
