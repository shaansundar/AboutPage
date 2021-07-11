import Image from "next/image";
import Link from "next/link";
import {
  faLinkedinIn,
  faTwitter,
  faDiscord,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icon({ icon, href }) {
  return (
    <Link href={href}>
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-green-light to-green-dark mr-5">
        <FontAwesomeIcon icon={icon} size="lg" color="#e4f1f1" />
      </div>
    </Link>
  );
}

const FooterLinkCol = ({ header, linkSet }) => (
  <div className=" w-60">
    <h4 className="font-comfortaa text-2xl text-gray-dark my-3  font-semibold">
      {header}
    </h4>
    <ul>
      {linkSet.map((link) => (
        <Link href={link.href} key={`link-to-${link.href}`}>
          <li className=" text-green-light text-lg my-1">{link.label}</li>
        </Link>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <div className="min-w-full head py-8">
      <div className="max-w-5xl m-auto w-full flex flex-col">
        <div className="w-full my-2 flex items-center justify-between">
          <Image
            className="logo-l-cropped"
            src="/logo.png"
            width={214.408}
            height={100}
          />
          <div className="max-w-xs w-full flex flex-col">
            <h4 className="font-comfortaa text-2xl text-gray-dark font-semibold">
              Connect with us
            </h4>
            <div
              className="flex items-center"
              style={{ transform: "translateY(16px)" }}
            >
              <Icon icon={faLinkedinIn} href="#" />
              <Icon icon={faTwitter} href="#" />
              <Icon icon={faDiscord} href="#" />
              <Icon icon={faYoutube} href="#" />
            </div>
          </div>
        </div>
        <div className="w-full h-1 rounded-full bg-green-dark my-2" />
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
