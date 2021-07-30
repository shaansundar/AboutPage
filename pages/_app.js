import "react-vertical-timeline-component/style.min.css";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { AnimateSharedLayout } from "framer-motion";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <div className="layout">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>CrazyNFT</title>
        <img src="/logo" />
      </head>
      <Navbar />
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
      <Footer />
    </div>
  );
}

export default MyApp;
