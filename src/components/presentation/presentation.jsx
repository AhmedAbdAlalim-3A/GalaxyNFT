import "./presentation.css";
import { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { FaBehance } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Presentation = () => {
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [wordsBankNumper, setWordsBankNumper] = useState(0);
  const [mainWord, setMainWord] = useState("");

  const wordsBank = [
    {
      main: (
        <span className="prWords bold">
          Welcome to
          <span className="lemon d-block">GalaxyNFT</span>
        </span>
      ),
    },
    {
      main: (
        <span className="prWords bold">
          Im
          <span className="lemon  d-block">Ahmed Abd Alalim</span>
        </span>
      ),
    },
    {
      main: (
        <span className="prWords">
          <span className="lemon">GalaxyNFT </span>
          is a complete shopping site for the
          <span className="lemon"> NFTs field</span>, consisting of
          <span className="lemon"> 10 </span>
          interactive pages that you can try
        </span>
      ),
    },
    {
      main: (
        <span className="prWords">
          <span className="lemon d-block mb-1 text-uppercase">Pages</span>
          home - market place - users Rankings - support - product page - user
          Account - member account - login - singup
        </span>
      ),
    },
    {
      main: (
        <span className="prWords">
          <span className="lemon d-block text-uppercase mb-2">
            scripts & programing <br /> Languages
          </span>
          HTML - CSS - JS - Bootstrap - jQuery - React + Vite
        </span>
      ),
    },
    {
      main: (
        <span className="prWords bold">
          <span className="lemon d-block mb-3">Follow me</span>
          <div className="d-flex gap-3">
            <a
              href="https://www.linkedin.com/in/ahmed-abd-alalim-286768299/"
              className="socialIcon d-flex justify-content-center align-items-center"
            >
              <RiLinkedinFill />
            </a>
            <a
              href="https://www.behance.net/ahmedabdalalim/"
              className="socialIcon d-flex justify-content-center align-items-center"
            >
              <FaBehance />
            </a>
            <a
              href="https://github.com/AhmedAbdAlalim-3A"
              className="socialIcon d-flex justify-content-center align-items-center"
            >
              <BsGithub />
            </a>
          </div>
        </span>
      ),
    },
    {
      main: (
        <span className="prWords bold">
          <span className="lemon d-block mb-2">Hire me</span>
          <div className="d-flex justify-content-center">
            <a
              href="https://ahmedabdalalim-482c3.web.app"
              className="socialIcon d-flex justify-content-center align-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19px"
                height="19px"
                viewBox="0 0 20 20"
                version="1.1"
              >
                <g id="surface1">
                  <path
                    style={{
                      stroke: "none",
                      fillRule: "nonzero",
                      fill: "currentColor",
                      fillOpacity: 1,
                    }}
                    d="M 0.464844 2.464844 C 2.066406 2.464844 3.667969 2.460938 5.269531 2.457031 C 5.457031 2.457031 5.648438 2.457031 5.835938 2.457031 C 5.894531 2.457031 5.894531 2.457031 5.949219 2.457031 C 6.558594 2.457031 7.167969 2.457031 7.777344 2.453125 C 8.402344 2.453125 9.027344 2.453125 9.65625 2.449219 C 10.039062 2.449219 10.425781 2.449219 10.8125 2.449219 C 11.074219 2.449219 11.339844 2.449219 11.605469 2.449219 C 11.757812 2.449219 11.910156 2.449219 12.0625 2.445312 C 12.203125 2.445312 12.34375 2.445312 12.484375 2.445312 C 12.535156 2.445312 12.582031 2.445312 12.632812 2.445312 C 13.289062 2.4375 13.839844 2.679688 14.308594 3.136719 C 14.628906 3.472656 14.808594 3.859375 14.957031 4.292969 C 15.054688 4.574219 15.164062 4.851562 15.269531 5.132812 C 15.453125 5.597656 15.628906 6.066406 15.804688 6.535156 C 15.816406 6.570312 15.816406 6.570312 15.832031 6.605469 C 16.167969 7.503906 16.167969 7.503906 16.167969 7.632812 C 16.1875 7.632812 16.210938 7.632812 16.234375 7.632812 C 16.265625 7.71875 16.296875 7.800781 16.328125 7.886719 C 16.335938 7.914062 16.347656 7.941406 16.359375 7.972656 C 16.421875 8.148438 16.488281 8.324219 16.554688 8.503906 C 16.695312 8.890625 16.835938 9.28125 16.984375 9.667969 C 17.089844 9.949219 17.191406 10.230469 17.296875 10.511719 C 17.46875 10.984375 17.644531 11.453125 17.820312 11.925781 C 17.832031 11.960938 17.847656 12 17.859375 12.039062 C 18.027344 12.480469 18.191406 12.925781 18.367188 13.367188 C 18.429688 13.53125 18.488281 13.695312 18.542969 13.863281 C 18.636719 14.148438 18.742188 14.429688 18.851562 14.710938 C 18.886719 14.800781 18.921875 14.894531 18.957031 14.984375 C 19.066406 15.273438 19.175781 15.5625 19.289062 15.847656 C 19.308594 15.894531 19.328125 15.945312 19.347656 15.992188 C 19.382812 16.078125 19.417969 16.167969 19.453125 16.253906 C 19.464844 16.292969 19.480469 16.332031 19.496094 16.375 C 19.511719 16.40625 19.523438 16.441406 19.539062 16.476562 C 19.566406 16.566406 19.566406 16.566406 19.566406 16.734375 C 18.707031 16.734375 17.851562 16.734375 16.964844 16.734375 C 16.878906 16.480469 16.789062 16.226562 16.699219 15.964844 C 16.644531 15.8125 16.585938 15.660156 16.527344 15.507812 C 16.511719 15.464844 16.496094 15.425781 16.480469 15.386719 C 16.40625 15.1875 16.328125 14.984375 16.25 14.785156 C 16.203125 14.660156 16.15625 14.539062 16.109375 14.417969 C 16.09375 14.378906 16.09375 14.378906 16.078125 14.34375 C 15.964844 14.039062 15.851562 13.734375 15.753906 13.425781 C 15.640625 13.082031 15.507812 12.746094 15.378906 12.410156 C 15.269531 12.121094 15.160156 11.832031 15.050781 11.542969 C 15.042969 11.515625 15.03125 11.488281 15.019531 11.457031 C 14.863281 11.039062 14.710938 10.621094 14.566406 10.199219 C 14.449219 9.871094 14.332031 9.546875 14.203125 9.226562 C 14.058594 8.847656 13.917969 8.46875 13.777344 8.085938 C 13.765625 8.054688 13.753906 8.023438 13.742188 7.988281 C 13.617188 7.65625 13.496094 7.328125 13.382812 6.992188 C 13.277344 6.695312 13.171875 6.402344 13.058594 6.113281 C 13.027344 6.03125 13 5.953125 12.96875 5.875 C 12.921875 5.75 12.875 5.625 12.824219 5.5 C 12.800781 5.4375 12.777344 5.375 12.753906 5.3125 C 12.742188 5.277344 12.726562 5.242188 12.710938 5.203125 C 12.703125 5.175781 12.691406 5.144531 12.679688 5.113281 C 12.605469 4.984375 12.503906 4.917969 12.371094 4.859375 C 12.152344 4.804688 11.964844 4.828125 11.765625 4.933594 C 11.609375 5.082031 11.507812 5.289062 11.492188 5.503906 C 11.492188 5.625 11.492188 5.742188 11.496094 5.863281 C 11.511719 6.589844 11.390625 7.210938 11.066406 7.867188 C 11.042969 7.867188 11.023438 7.867188 11 7.867188 C 10.992188 7.886719 10.988281 7.910156 10.980469 7.933594 C 10.816406 8.273438 10.46875 8.527344 10.160156 8.730469 C 10.140625 8.742188 10.121094 8.753906 10.101562 8.769531 C 9.984375 8.84375 9.867188 8.894531 9.734375 8.933594 C 9.734375 8.957031 9.734375 8.976562 9.734375 9 C 9.761719 9.007812 9.789062 9.015625 9.816406 9.023438 C 9.953125 9.074219 10.070312 9.140625 10.191406 9.21875 C 10.214844 9.234375 10.238281 9.25 10.261719 9.261719 C 10.53125 9.4375 10.78125 9.640625 10.964844 9.898438 C 10.964844 9.933594 10.964844 9.964844 10.964844 10 C 10.988281 10 11.011719 10 11.035156 10 C 11.101562 10.097656 11.132812 10.148438 11.132812 10.265625 C 11.15625 10.277344 11.175781 10.289062 11.199219 10.300781 C 11.617188 11.074219 11.667969 12.203125 11.433594 13.035156 C 11.382812 13.203125 11.324219 13.367188 11.265625 13.535156 C 11.246094 13.601562 11.222656 13.667969 11.199219 13.734375 C 11.179688 13.734375 11.15625 13.734375 11.132812 13.734375 C 11.113281 13.808594 11.089844 13.886719 11.066406 13.964844 C 11.042969 13.964844 11.023438 13.964844 11 13.964844 C 10.992188 13.988281 10.984375 14.011719 10.976562 14.035156 C 10.699219 14.640625 9.925781 15.046875 9.34375 15.285156 C 8.78125 15.492188 8.152344 15.558594 7.558594 15.585938 C 7.511719 15.585938 7.511719 15.585938 7.460938 15.589844 C 7.128906 15.601562 6.800781 15.605469 6.46875 15.605469 C 6.402344 15.605469 6.335938 15.605469 6.269531 15.605469 C 6.09375 15.605469 5.917969 15.605469 5.738281 15.601562 C 5.554688 15.601562 5.367188 15.601562 5.183594 15.601562 C 4.832031 15.601562 4.480469 15.601562 4.128906 15.601562 C 3.730469 15.601562 3.332031 15.601562 2.929688 15.601562 C 2.109375 15.601562 1.289062 15.601562 0.464844 15.601562 C 0.464844 14.820312 0.464844 14.039062 0.464844 13.234375 C 0.769531 13.230469 0.769531 13.230469 1.082031 13.230469 C 1.753906 13.230469 2.425781 13.226562 3.097656 13.222656 C 3.503906 13.222656 3.910156 13.21875 4.320312 13.21875 C 4.671875 13.21875 5.027344 13.21875 5.382812 13.214844 C 5.570312 13.214844 5.757812 13.214844 5.949219 13.214844 C 6.125 13.210938 6.300781 13.210938 6.480469 13.210938 C 6.542969 13.210938 6.609375 13.210938 6.671875 13.210938 C 7.34375 13.210938 8.078125 13.207031 8.632812 12.765625 C 8.691406 12.699219 8.746094 12.628906 8.792969 12.554688 C 8.832031 12.5 8.832031 12.5 8.898438 12.464844 C 8.914062 12.398438 8.921875 12.332031 8.933594 12.265625 C 8.941406 12.242188 8.949219 12.21875 8.957031 12.195312 C 9.101562 11.761719 9.089844 11.257812 8.890625 10.847656 C 8.707031 10.515625 8.457031 10.324219 8.101562 10.199219 C 7.652344 10.074219 7.195312 10.0625 6.730469 10.058594 C 6.691406 10.058594 6.648438 10.058594 6.609375 10.058594 C 6.496094 10.058594 6.386719 10.058594 6.277344 10.058594 C 6.164062 10.054688 6.046875 10.054688 5.929688 10.054688 C 5.714844 10.050781 5.496094 10.050781 5.277344 10.050781 C 5.027344 10.046875 4.78125 10.046875 4.53125 10.042969 C 4.019531 10.039062 3.511719 10.035156 3 10.035156 C 3 9.761719 3 9.488281 3 9.214844 C 2.996094 9.085938 2.996094 8.960938 2.996094 8.832031 C 2.996094 8.710938 2.996094 8.589844 2.996094 8.464844 C 2.996094 8.417969 2.996094 8.371094 2.996094 8.324219 C 2.996094 8.261719 2.996094 8.195312 2.996094 8.128906 C 2.996094 8.09375 2.996094 8.054688 2.996094 8.015625 C 3 7.933594 3 7.933594 3.035156 7.898438 C 3.089844 7.898438 3.148438 7.894531 3.203125 7.894531 C 3.261719 7.894531 3.261719 7.894531 3.316406 7.894531 C 3.378906 7.894531 3.378906 7.894531 3.441406 7.894531 C 3.507812 7.894531 3.574219 7.894531 3.640625 7.894531 C 3.710938 7.894531 3.785156 7.894531 3.855469 7.894531 C 4.003906 7.894531 4.152344 7.890625 4.300781 7.890625 C 4.726562 7.890625 5.152344 7.886719 5.574219 7.886719 C 5.808594 7.886719 6.042969 7.886719 6.277344 7.882812 C 6.402344 7.882812 6.523438 7.882812 6.648438 7.882812 C 6.785156 7.882812 6.925781 7.882812 7.0625 7.878906 C 7.105469 7.878906 7.144531 7.878906 7.1875 7.882812 C 7.5625 7.878906 7.949219 7.832031 8.285156 7.652344 C 8.320312 7.636719 8.359375 7.617188 8.394531 7.597656 C 8.703125 7.410156 8.820312 7.179688 8.945312 6.851562 C 9.042969 6.339844 8.992188 5.855469 8.742188 5.394531 C 8.40625 4.976562 7.988281 4.828125 7.464844 4.765625 C 7.234375 4.75 7 4.753906 6.765625 4.753906 C 6.699219 4.753906 6.628906 4.753906 6.5625 4.753906 C 6.375 4.75 6.191406 4.75 6.007812 4.75 C 5.8125 4.75 5.621094 4.75 5.425781 4.75 C 5.058594 4.746094 4.691406 4.746094 4.328125 4.746094 C 3.671875 4.746094 3.011719 4.742188 2.355469 4.742188 C 2.125 4.742188 1.894531 4.738281 1.664062 4.738281 C 1.519531 4.738281 1.378906 4.738281 1.234375 4.738281 C 1.167969 4.738281 1.101562 4.738281 1.035156 4.738281 C 0.945312 4.738281 0.855469 4.738281 0.765625 4.738281 C 0.726562 4.738281 0.726562 4.738281 0.683594 4.738281 C 0.503906 4.738281 0.503906 4.738281 0.464844 4.699219 C 0.464844 4.628906 0.460938 4.5625 0.464844 4.492188 C 0.464844 4.46875 0.464844 4.449219 0.464844 4.425781 C 0.464844 4.351562 0.464844 4.28125 0.464844 4.207031 C 0.464844 4.160156 0.464844 4.109375 0.464844 4.058594 C 0.464844 3.925781 0.464844 3.792969 0.464844 3.664062 C 0.464844 3.527344 0.464844 3.394531 0.464844 3.257812 C 0.464844 2.996094 0.464844 2.730469 0.464844 2.464844 Z M 0.464844 2.464844 "
                  />
                </g>
              </svg>
            </a>
          </div>
        </span>
      ),
    },
    {
      main: <span className="prWords lemon bold">Enjoy watching</span>,
    },
  ];

  const HandleCloseMessage = () => {
    setIsMessageVisible(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsMessageVisible(true);
    }, 1100);
  }, []);

  useEffect(() => {
    const prWords = document.querySelector(".prWords");
    setMainWord(wordsBank[wordsBankNumper].main);
    prWords && (prWords.style.animation = "");
    setTimeout(() => {
      prWords && (prWords.style.animation = "outToInWords .8s ease");
    }, 1);
  }, [wordsBankNumper]);

  return (
    <>
      {isMessageVisible && (
        <section
          id="presentation"
          className="d-flex justify-content-center align-items-center"
        >
          <div className="presentationBody d-flex justify-content-center align-items-center p-3">
            {wordsBankNumper === wordsBank.length - 1 && (
              <div className="closeIcon">
                <div onClick={HandleCloseMessage}>
                  <IoCloseSharp />
                </div>
              </div>
            )}
            <div className="ownerImg">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQFg7ZW3iDiWkw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1698837079053?e=2147483647&v=beta&t=8kWIHpt6d2Q24JbzJkjfb6RpiEFDi-EZuxxE9lBHOx8"
                alt="ahmed abd alalime"
                width="100%"
              />
            </div>
            <div className="moverButton d-flex gap-3">
              <div
                className="moverIcon d-flex justify-content-center align-items-center"
                onClick={() =>
                  setWordsBankNumper((prvNum) =>
                    prvNum > 0 ? prvNum - 1 : prvNum
                  )
                }
              >
                <FaAngleLeft />
              </div>
              <div
                className="moverIcon d-flex justify-content-center align-items-center"
                onClick={() =>
                  setWordsBankNumper((prvNum) =>
                    prvNum < wordsBank.length - 1 ? prvNum + 1 : prvNum
                  )
                }
              >
                <FaAngleRight />
              </div>
            </div>
            <div className="presentationWords">{mainWord}</div>
          </div>
        </section>
      )}
    </>
  );
};

export default Presentation;
