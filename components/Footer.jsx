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
      <div className="flex items-center justify-center h-11 w-11 rounded-full bg-gradient-to-r from-green-light to-green-dark hover:from-gray-gradlight hover:to-gray-graddark mr-5">
        <FontAwesomeIcon icon={icon} size="lg" color="#e4f1f1" />
      </div>
    </Link>
  );
}

const FooterLinkCol = ({ header, linkSet }) => (
  <div className=" w-60">
    <h4 className="font-comfortaa text-2xl text-green-dark my-5  font-semibold">
      {header}
    </h4>
    <ul>
      {linkSet.map((link) => (
        <Link href={link.href} key={`link-to-${link.href}`}>
          <li className="footercontenttxt text-gray-gradlight text-lg my-4">{link.label}</li>
        </Link>
      ))}
    </ul>
  </div>
);

function Discord() {
  return (
    <Link href="https://discord.gg/jBr3GmsYcu">
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-green-light to-green-dark hover:from-gray-gradlight hover:to-gray-graddark mr-lasticoncontentrightmargin">
      <img src="/discord.png" alt="An SVG of an eye" width="25px" height="25px" />
      </div>
    </Link>
  );
}

function Telegram() {
  return (
    <Link href="#">
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-green-light to-green-dark hover:from-gray-gradlight hover:to-gray-graddark mr-iconcontentrightmargin">
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
              <Icon icon={faLinkedinIn} href="https://www.linkedin.com/company/crazynft/" />
              <Icon icon={faTwitter} href="https://twitter.com/team_crazynft" /> 
              <Icon icon={faGithub} href="https://github.com/CrazyNFT" />
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
      { label: "Contact us", href: "#" },
      { label: "Prototype", href: "#" },
    ],
  },
  // {
  //   header: "NFTS",
  //   linkSet: [
  //     { label: "Art NFT", href: "#" },
  //     { label: "Game NFT", href: "#" },
  //     { label: "Photography NFT", href: "#" },
  //     { label: "Video NFT", href: "#" },
  //     { label: "Music NFT", href: "#" },
  //   ],
  // },
  {
    header: "Information",
    linkSet: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];
