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
    <div id="about" className="bg-primary text-primary p-10 py-24  ">
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
            isVisible3 && "animate-fade-in"
          } opacity-0 flex flex-col space-y-4 text-center 2xl:text-left`}
          style={{ "--delay": 0.6 + "s" }}
        >
          <p>
            I'm a{" "}
            <span className="font-semibold">Software Developer</span>{" "}
            based in Greece, with 1+ year of experience in full stack
            development for enterprise and mission critical systems.
          </p>
          <p>
            I have a background in computer engineering and enjoy working across
            both frontend and backend components to deliver reliable,
            high quality software.
          </p>
          <p>
            I'm continuously expanding my skills in cloud technologies and modern software architecture, and I'm open to professional opportunities where I can apply my expertise and contribute to impactful projects.
          </p>
          <p>Feel free to contact me.</p>
          <div>
            <div
              ref={containerRef4}
              className={`${
                isVisible4 && "animate-fade-in"
              } opacity-0 flex flex-col`}
              style={{ "--delay": 0.6 + "s" }}
            >
              <div className="flex items-center min-h-[2.5rem]">
                <span className="font-semibold uppercase">Name:</span>
                <span className="ml-4 text-secondary">
                  {isVisible4 && (
                    <Typewriter
                      options={{ delay: 30, loop: false }}
                      onInit={(typewriter) => {
                        typewriter
                          .pauseFor(700)
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
                      options={{ delay: 30, loop: false }}
                      onInit={(typewriter) => {
                        typewriter
                          .pauseFor(1200)
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
                        options={{ delay: 30, loop: false }}
                        onInit={(typewriter) => {
                          typewriter
                            .pauseFor(1700)
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
