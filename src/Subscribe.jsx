import { useState } from "react";
import { useNavigate } from "react-router";

export function Subscribe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const validateEmail = () => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Success");
      setTimeout(() => {
        navigate("Subscribed");
      }, 1000);
    } else {
      setMessage("Invalid Email");
    }
  };

  return (
    <div className="flex flex-col border-amber-800 border-2">
      <img
        src="../assets/images/illustration-sign-up-mobile.svg"
        alt="illustration sign up"
      />

      <div className="p-8 pt-0 text-neutralBlue-700">
        <h1 className="text-4xl mt-6 font-bold text-neutralBlue-800">Stay updated!</h1>

        <p className="mt-4">
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <ul className="mt-2">
          <li className="mt-2 flex items-center">
            <ion-icon name="checkmark-circle" className="text-primaryRed text-xl"></ion-icon>
            <div className="pl-4">Product discovery and building what matters</div>
          </li>
          <li className="mt-2 flex items-center">
            <ion-icon name="checkmark-circle" className="text-primaryRed text-xl"></ion-icon>
            <div className="pl-4">Measuring to ensure updates are a success</div>
          </li>
          <li className="mt-2 flex items-center">
            <ion-icon name="checkmark-circle" className="text-primaryRed text-xl"></ion-icon>
            <div className="pl-4">And much more!</div>
          </li>
        </ul>

        <form action="#" className="mt-4">
          <label htmlFor="email" className="font-semibold">
            Email address
          </label>
          <p className={ message === "Success" ? "text-green-500":"text-primaryRed"}>{message}</p>
          <div>
            <input
              type="text"
              input={email}
              placeholder="email@company.com"
              required
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className="w-full p-4 rounded-lg border-neutralGrey border-2 mt-2"
            />
          </div>

          <button
            onClick={validateEmail}
            className="mt-4 text-white bg-neutralBlue-800 w-full p-4 rounded-lg font-bold"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </div>
  );
}
