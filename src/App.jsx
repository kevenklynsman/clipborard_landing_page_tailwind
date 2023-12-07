function App() {
  const infos = [
    {
      icon: "./images/icon-blacklist.svg",
      title: "Create blacklists",
      info: "Ensure sensitive information never makes its way to your clipboar by excluding certain sources.",
    },
    {
      icon: "./images/icon-text.svg",
      title: "Plain text snippets",
      info: " Remove unwanted formatting from copied text for a consistent look.",
    },
    {
      icon: "./images/icon-preview.svg",
      title: "Sneak preview",
      info: " Quick preview of all snippets on your Clipboard for easy access.",
    },
  ];

  const logos = [
    { logo: "./images/logo-google.png" },
    { logo: "./images/logo-ibm.png" },
    { logo: "./images/logo-microsoft.png" },
    { logo: "./images/logo-hp.png" },
    { logo: "./images/logo-vector-graphics.png" },
  ];

  const links = [
    { icon: "./images/icon-facebook.svg" },
    { icon: "./images/icon-twitter.svg" },
    { icon: "./images/icon-instagram.svg" },
  ];

  return (
    <>
      <header className="mb-5 h-60 flex flex-col items-center relative">
        <img
          srcSet="./images/bg-header-mobile.png 320w"
          src="./images/bg-header-desktop.png"
          alt="imagem de fundo"
          className=" h-full w-full z-0"
        />
        <img
          src="./images/logo.svg"
          alt="imagem de fundo do cebeçalho"
          className="w-20 z-10 absolute mt-40"
        />
      </header>
      <main className="flex flex-col p-5 items-center">
        <div className="text-center md:max-w-2xl">
          <h1 className="text-3xl text-dark-grayish-blue tracking-wide font-body font-bold">
            A history of everything you copy
          </h1>
          <p className="text-lg text-grayish-blue my-10">
            Clipboard allows you to track and organize everything you copy
            Instantly access your clipboard on all your devices.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center gap-4 mb-40">
          <button className="py-2 px-6 bg-strong-cyan-500 rounded-full font-semibold text-white border-b-4 border-strong-cyan-700 hover:bg-strong-cyan-300">
            Download for iOS
          </button>
          <button className="py-2 px-6 bg-light-blue-500 rounded-full font-semibold text-white border-b-4 border-light-blue-700 hover:bg-light-blue-300">
            Download for Mac
          </button>
        </div>
        <div className="text-center md:max-w-2xl">
          <h2 className="text-3xl text-dark-grayish-blue text-center tracking-wide font-body font-bold">
            Keep track of your snippets
          </h2>
          <p className="text-lg text-grayish-blue text-center my-7">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 justify-center  mb-40">
          <img
            src="./images/image-computer.png"
            alt="Imagem de um computador"
            className="md:w-1/2"
          />
          <div className="flex flex-col p-5 md:px-14 gap-y-10">
            <div>
              <h3 className="text-3xl text-dark-grayish-blue font-body font-bold text-center md:text-start">
                Quick Search
              </h3>
              <p className="text-lg text-grayish-blue text-justify md:mb-5">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div>
              <h3 className="text-3xl text-dark-grayish-blue font-body font-bold text-center md:text-start">
                iCloud Sync
              </h3>
              <p className="text-lg text-grayish-blue text-justify md:mb-5">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>
            <div>
              <h3 className="text-3xl text-dark-grayish-blue font-body font-bold text-center md:text-start">
                Complete History
              </h3>
              <p className="text-lg text-grayish-blue text-justify md:mb-5">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center md:max-w-2xl">
          <h2 className="text-3xl text-dark-grayish-blue text-center tracking-wide font-body font-bold">
            Access Clipboard anywhere
          </h2>
          <p className="text-lg text-grayish-blue text-center my-7   ">
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
          <img
            src="./images/image-devices.png"
            alt="imagem de um cecular e um tablet"
          />
          <div className="text-center md:max-w-2xl">
            <h2 className="text-3xl text-dark-grayish-blue text-center tracking-wide font-body font-bold">
              Supercharge your workflow
            </h2>
            <p className="text-lg text-grayish-blue text-center my-7">
              We’ve got the tools to boost your productivity.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:flex-grow gap-32 my-32">
          {infos.map((info) => (
            <div
              className="flex flex-col justify-center items-center gap-12"
              key={info.title}
            >
              <img src={info.icon} alt="icone de uma lista" className="w-10" />
              <div className="flex flex-col gap-y-5 text-center">
                <h3 className="text-3xl text-dark-grayish-blue font-body font-bold">
                  {info.title}
                </h3>
                <p className="text-lg text-grayish-blue text-center">
                  {info.info}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 my-16">
          {logos.map((logo) => (
            <div key={logo.logo}>
              <img src={logo.logo} alt="Logos" />
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-3xl text-dark-grayish-blue text-center font-body font-bold my-10">
            Clipboard for iOS and Mac OS
          </h2>
          <p className="text-lg text-grayish-blue text-center my-10 mx-auto md:max-w-2xl md:text-center">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you’re ready to start adding to your clipboard.
          </p>
          <div className="flex flex-col md:flex-row md:justify-center gap-4 mb-40">
            <button className="py-2 px-6 bg-strong-cyan-500 rounded-full font-semibold text-white border-b-4 border-strong-cyan-700 hover:bg-strong-cyan-300">
              Download for iOS
            </button>
            <button className="py-2 px-6 bg-light-blue-500 rounded-full font-semibold text-white border-b-4 border-light-blue-700 hover:bg-light-blue-300">
              Download for Mac
            </button>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 text-grayish-blue">
        <div className=" flex flex-col md:flex-row items-center md:justify-evenly gap-10 p-14">
          <img
            src="./images/logo.svg"
            alt="imagem de fundo do cebeçalho"
            className="w-14"
          />
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Press Kit</li>
            <li>Install Guide</li>
          </ul>
          <ul className="flex justify-between items-center gap-5">
            {links.map((link) => (
              <a key={link.icon}>
                <img src={link.icon} alt="Icone de link" />
              </a>
            ))}
          </ul>
        </div>
        <div className="text-center p-5">
          <p>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              {" "}
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              href="https://github.com/kevenklynsman"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              {" "}
              Keven klynsman{" "}
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
