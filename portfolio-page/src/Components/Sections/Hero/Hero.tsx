import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="context">
        <h1>Hello,</h1>
        <p className="name-section">
          {" "}
          My name is <span className="fullname">Aslan Mammadov</span>
        </p>
        <div className="description">
          <span>I am</span>
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter

                .typeString("Frontend Developer")
                .pauseFor(700)
                .deleteAll()
                .typeString("React Developer")
                .pauseFor(700)
                .start();
            }}
          />
        </div>
      </div>
      <div className="image-container">
        <img src="https://avatarfiles.alphacoders.com/100/100295.jpg" alt="Aslan Mammadov" />
      </div>
    </section>
  );
};

export default Hero;
