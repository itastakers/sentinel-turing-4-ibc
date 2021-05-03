const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="text-center">
        Made by{" "}
        <a href="https://itastakers.com" target="_blank">
          🇮🇹 ITA Stakers
        </a>{" "}
        for Sentinel Community
      </footer>
    </>
  );
};

export default Footer;
