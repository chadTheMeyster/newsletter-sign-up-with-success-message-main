import { useNavigate } from "react-router";

export function Subscribed({ sharedEmail }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-96 mr-0 ml-0 p-12 pt-0 pb-0 md:bg-white md:p-12 md:rounded-2xl">
      <div className="mt-40 md:m-0">
        <ion-icon name="checkmark-circle" className="text-primaryRed text-8xl md:text-6xl"></ion-icon>
      </div>
      <h1 className="text-4xl mt-6 font-extrabold text-neutralBlue-800">Thanks for subscribing!</h1>

      <p className="mt-6">
        A confirmation email has been sent to <strong>{sharedEmail}</strong>. Please open
        it and click the button inside to confirm your subscription.
      </p>

      <button 
      className="mt-40 text-white bg-neutralBlue-800 w-full p-4 rounded-lg font-bold 
      active:bg-[linear-gradient(90deg,rgba(214,179,92,1)_0%,rgba(230,60,26,1)_50%,rgba(255,98,87,1)_100%)]
      md:mt-10"
      onClick={() => {navigate('/')}}
      >Dismiss message</button>
    </div>
  );
}
