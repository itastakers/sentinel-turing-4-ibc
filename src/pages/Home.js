import Header from "../components/Header";
import Meta from "../components/Meta";
import AddChain from "../components/AddChain";

const Home = () => {
  // page content
  const pageTitle = "Sentinel turing-4";
  const pageDescription = "Keplr integration for turing-4 testnet";

  return (
    <div>
      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />
      <AddChain></AddChain>
    </div>
  );
};

export default Home;
