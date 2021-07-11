import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero"
import LightFeatureB from "../components/Feature";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      <Hero />
      <LightFeatureB />
      <Banner />
      
    </div>
  );
}
