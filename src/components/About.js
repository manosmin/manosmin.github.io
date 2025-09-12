import { useIsVisible } from "../App";
import {
  FaInfoCircle,
  FaGithub,
  FaLinkedinIn,
  FaDiscord,
} from "react-icons/fa";
import Typewriter from "typewriter-effect";

new Typewriter("#typewriter", {
  strings: ["Emmanouil Minadakis"],
  autoStart: true,
});

const About = () => {
  const [containerRef1, isVisible1] = useIsVisible({});
  const [containerRef3, isVisible3] = useIsVisible({});
  const [containerRef4, isVisible4] = useIsVisible({});

  return (
    <div
      id="about"
      className="bg-primary text-primary p-10 py-24 "
    >
      <div className="flex justify-between mb-8">
        <h2
          ref={containerRef1}
          className={`${
            isVisible1 && "animate-drop-in"
          } opacity-0 text-2xl font-semibold`}
          style={{ "--delay": 0.2 + "s" }}
        >
          <p className="flex justify-center items-center">
            <FaInfoCircle className="mr-2" /> About Me
          </p>
        </h2>
      </div>
      <div className="flex flex-col 2xl:flex-row items-center md:space-x-8 overflow-x-visible">

        <div
          ref={containerRef3}
          className={`${
            isVisible3 && "animate-fade-in 2xl:animate-fade-in"
          } opacity-0 flex flex-col space-y-4 text-center 2xl:text-left`}
          style={{ "--delay": 0.4 + "s" }}
        >
          <p>
            I'm a{" "}
            <span className="font-semibold">Junior Software Developer</span>{" "}
            based in{" "}
            <span className="underline decoration-dotted underline-offset-4">
              Heraklion, Greece
            </span>
            .
          </p>
          <p>
            I have a background in computer engineering and professional
            experience in full stack development, and I'm always eager to keep
            growing my skills across both frontend and backend technologies.
          </p>
          <p>
            I'm especially excited about using AI tools to
            streamline development workflows and create smarter, more efficient
            applications.
          </p>
          <p>
            I'm always open to new opportunities and ideas, so feel free to reach
            out!
          </p>
          <div>
            <div
              ref={containerRef4}
              className={`${
                isVisible4 && "animate-fade-in"
              } opacity-0 flex flex-col`}
              style={{ "--delay": 0.4 + "s" }}
            >
              <div className="flex items-center min-h-[2.5rem]">
                <span className="font-semibold uppercase">Name:</span>
                <span className="ml-4 text-secondary">
                  {isVisible4 && (
                    <Typewriter
                      options={{ delay: 20, loop: false }}
                      onInit={(typewriter) => {
                        typewriter
                          .pauseFor(500)
                          .typeString("Manos Minadakis")
                          .start();
                      }}
                    />
                  )}
                </span>
              </div>
              <div className="flex items-center min-h-[2.5rem]">
                <span className="font-semibold uppercase">Location:</span>
                <span className="ml-4 text-secondary">
                  {isVisible4 && (
                    <Typewriter
                      options={{ delay: 20, loop: false }}
                      onInit={(typewriter) => {
                        typewriter
                          .pauseFor(1000)
                          .typeString("Heraklion, Greece")
                          .start();
                      }}
                    />
                  )}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between min-h-[2.5rem]">
                <div className="flex items-center min-h-[2.5rem]">
                  <span className="font-semibold uppercase">Email:</span>
                  <span className="ml-4 text-secondary">
                    {isVisible4 && (
                      <Typewriter
                        options={{ delay: 20, loop: false }}
                        onInit={(typewriter) => {
                          typewriter
                            .pauseFor(1500)
                            .typeString("manosmin@hotmail.com")
                            .start();
                        }}
                      />
                    )}
                  </span>
                </div>
                <ul className="flex flex-row items-center space-x-4 mt-2 sm:mt-0">
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="https://github.com/manosmin"
                      className="flex items-center text-primary rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                      target="_blank"
                      alt="github"
                    >
                      <div className="icon-container bg-accent text-accent rounded-full p-2">
                        <FaGithub size={20} />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="https://linkedin.com/in/manosmin"
                      className="flex items-center text-primary rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                      target="_blank"
                      alt="linkedin"
                    >
                      <div className="icon-container bg-accent text-accent rounded-full p-2">
                        <FaLinkedinIn size={20} />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.discordapp.com/users/270397164209963009"
                      className="flex items-center text-primary rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                      target="_blank"
                      alt="discord"
                    >
                      <div className="icon-container bg-accent text-accent rounded-full p-2">
                        <FaDiscord size={20} />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
