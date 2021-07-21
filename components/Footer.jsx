import Image from "next/image";
import Link from "next/link";
import {
  faLinkedinIn,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icon({ icon, href }) {
  return (
    <Link href={href}>
      <div className="flex items-center justify-center h-11 w-11 rounded-full bg-gradient-to-r from-green-light to-green-dark hover:from-gray-gradlight hover:to-gray-graddark transform hover:scale-105 duration-300 ease-in-out mr-5">
        <FontAwesomeIcon icon={icon} size="lg" color="#e4f1f1" />
      </div>
    </Link>
  );
}

const FooterLinkCol = ({ header, linkSet }) => (
  <div 
  className="md:w-60"
  >
    <h4 className="font-comfortaa text-2xl text-green-dark my-5  font-semibold">
      {header}
    </h4>
    <ul 
    // className="md:flex md:flex-wrap:nowrap"
    >
      {linkSet.map((link) => (
        <Link href={link.href} key={`link-to-${link.href}`}>
          <li className="footercontenttxt transform hover:scale-105 duration-300 ease-in-out text-gray-gradlight text-lg my-4">{link.label}</li>
        </Link>
      ))}
    </ul>
  </div>
);

function Discord() {
  return (
    <Link href="https://discord.gg/jBr3GmsYcu">
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-green-light to-green-dark hover:from-gray-gradlight hover:to-gray-graddark transform hover:scale-105 duration-300 ease-in-out mr-lasticoncontentrightmargin">
      <img src="/discord.png" alt="An SVG of an eye" width="25px" height="25px" />
      </div>
    </Link>
  );
}

function Telegram() {
  return (
    <Link href="#">
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-green-light to-green-dark hover:from-gray-gradlight hover:to-gray-graddark transform hover:scale-105 duration-300 ease-in-out mr-iconcontentrightmargin">
      <img src="/telegram.png" alt="An SVG of an eye" width="20px" height="20px" />
      </div>
    </Link>
  );
}

export default function Footer() {
  return (
    <div className="min-w-full head py-8">
      <div className=" m-navbarx  flex flex-col">
        <div className="w-full my-2 flex items-center justify-between">
        </div>
        <div className="w-full h-1 rounded-full bg-green-dark mt-5" />
        <div className="md:flex md:flex-wrap:wrap">
          {footerLinks.map((item, indx) => (
            <FooterLinkCol {...item} key={`link-col-${indx + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

const footerLinks = [
  {
    header: "For Investors",
    linkSet: [
      { label: "Invest on us", href: "mailto:investment@crazynft.tech?subject=click Investement" },
      { label: "Contact Finance", href: "mailto:investment@crazynft.tech?subject=click Contact Finance" },
      { label: "Initial Offerings", href: "mailto:investment@crazynft.tech?subject=click Initial Offerings" },
    ],
  },
  {
    header: "For Geeks",
    linkSet: [
      { label: "Whitepaper", href: "#" },
      { label: "Contact Geek Center", href: "mailto:tech@crazynft.tech?subject=click Geek Center" },
      { label: "Prototype", href: "https://prototype.crazynft.tech" },
    ],
  },
  {
    header: "For Laymen",
    linkSet: [
      { label: "NFT Blog", href: "https://medium.com/@crazynft" },
      { label: "Contact us", href: "mailto:hello@crazynft.tech?subject=click Contact Us" },
      { label: "Help", href: "mailto:info@crazynft.tech?subject=click Help" },
    ],
  },
];
