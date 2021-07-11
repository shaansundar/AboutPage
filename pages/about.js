import Head from "next/head";
import Image from "next/image";
import Comp1 from "../components/Comp1";
import Comp2 from "../components/Comp2";
import Navbar from "../components/Navbar";
import Aboutus from "../components/Aboutus";
import Test from "../components/Test";
import styles from "../styles/Home.module.css";

function About() {
  return (
    <div>
      <Aboutus />
    </div>
  );
}

export default About;
