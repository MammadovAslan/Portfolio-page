import Typewriter from "typewriter-effect";

const Hero = () => {
  const onButtonClick = () => {
    fetch("mammadov_aslan_cv.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "mammadov_aslan_cv.pdf";
        alink.click();
      });
    });
  };

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
        <div className="hero-buttons">
          <button className="hero-button">Contact me</button>
          <button className="hero-button" onClick={onButtonClick}>
            Download CV
          </button>
        </div>
      </div>
      <div className="image-container">
        <img src="https://avatarfiles.alphacoders.com/100/100295.jpg" alt="Aslan Mammadov" />
      </div>
    </section>
  );
};

export default Hero;
