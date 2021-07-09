import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }) {
  return(<div className='layout'>
  <Navbar />
  <Component {...pageProps} />
</div>) 
}

export default MyApp
