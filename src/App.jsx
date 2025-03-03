import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import PromoComponent from "./components/Promo/PromoComponent";
import GalleryComponent from "./components/Gallery/GalleryComponent";

function App() {
  const images = [
    {
      src: '/1.png',
      title: 'GIR: One year In',
      blogTitle: 'Case study'
    },
    {
      src: '/2.png',
      title: 'Introducing Onsen',
      blogTitle: 'New additions'
    },
    {
      src: '/3.png',
      title: 'Selling Your Shopify Brand: An Introduction',
      blogTitle: 'Mergers & Acquisitions 101'
    },
    {
      src: '/4.png',
      title: '5 Reasons We Are Optimistic for 2023',
      blogTitle: 'MERGERS & ACQUISITIONS 101'
    },
    {
      src: '/5.png',
      title: 'Why Right Now is a Great Time to Sell Your Brand',
      blogTitle: 'MERGERS & ACQUISITIONS 101'
    },
    {
      src: '/6.png',
      title: 'Selling Your Shopify Brand: Week 1',
      blogTitle: 'Mergers & Acquisitions 101'
    },
    {
      src: '/7.png',
      title: "Pattern's 2022 Update",
    },
    {
      src: '/8.png',
      title: 'Introducing Yield',
      blogTitle: 'New Additions'
    },
    {
      src: '/9.png',
      title: 'Introducing Poketo',
      blogTitle: 'new additions'
    },
  ];
  return (
    <>
      <HeaderComponent />
      <PromoComponent />
      <GalleryComponent images={images} />
      <FooterComponent />
    </>
  );
}

export default App;
