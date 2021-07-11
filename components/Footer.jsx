import Image from "next/image";
import Link from "next/link";
import {
  faLinkedinIn,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icon({ icon, href }) {
  return (
    <Link href={href}>
      <div className="flex items-center justify-center h-11 w-11 rounded-full bg-gradient-to-r from-green-light to-green-dark mr-5">
        <FontAwesomeIcon icon={icon} size="lg" color="#e4f1f1" />
      </div>
    </Link>
  );
}

const FooterLinkCol = ({ header, linkSet }) => (
  <div className=" w-60">
    <h4 className="font-comfortaa text-2xl text-gray-gradlight my-5  font-semibold">
      {header}
    </h4>
    <ul>
      {linkSet.map((link) => (
        <Link href={link.href} key={`link-to-${link.href}`}>
          <li className="font-comfortaa text-green-dark text-lg my-2">{link.label}</li>
        </Link>
      ))}
    </ul>
  </div>
);

function Discord() {
  return (
    <Link href="#">
      <div className="flex items-center justify-center h-11 w-11 rounded-full bg-gradient-to-r from-green-light to-green-dark">
      <img src="/icons-03.png" alt="An SVG of an eye" width="35px" height="35px" />
      </div>
    </Link>
  );
}

export default function Footer() {
  return (
    <div className="min-w-full head py-8">
      <div className=" m-navbarx  flex flex-col">
        <div className="w-full my-2 flex items-center justify-between">
          <Image
            src="/logo.png"
            width={170} height={103}
          />
          <div className="" >
            <h4 className="font-comfortaa text-right font-semibold">
              <span className="footerconnect">
              Connect with us
              </span>
            </h4>
            <div className="flex items-right mt-2 ml-iconmarginleft">
              <Icon icon={faLinkedinIn} href="#" />
              <Icon icon={faTwitter} href="#" />
              <Icon icon={faTelegram} href="#" />
              <Discord />
            </div>
          </div>
        </div>
        <div className="w-full h-1 rounded-full bg-green-dark mt-5" />
        <div className="flex w-full mt-2">
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
    header: "CrazyNFT",
    linkSet: [
      { label: "NFT Blog", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Chat with us", href: "#" },
      { label: "Create NFT", href: "#" },
    ],
  },
  {
    header: "NFTS",
    linkSet: [
      { label: "Art NFT", href: "#" },
      { label: "Game NFT", href: "#" },
      { label: "Photography NFT", href: "#" },
      { label: "Video NFT", href: "#" },
      { label: "Music NFT", href: "#" },
    ],
  },
  {
    header: "Information",
    linkSet: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];
