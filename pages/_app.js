import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Navbar from '../components/Navbar';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


function MyApp({ Component, pageProps }) {
  return(<div className='layout'>
  <head>
  <title>CrazyNFT</title>
  <img src="/logo" />
</head>
  <Navbar />
  <Component {...pageProps} />
</div>) 
}

export default MyApp
