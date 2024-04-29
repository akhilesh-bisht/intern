import Landing from "./components/Landing";
import Navigation from "./components/base/Navbar";
import Partners from "./components/Partners";
import Trending from "./components/Trending";
import styles from "./page.module.scss";
import Segment from "./components/base/Segment";
import GlareBackground from "./components/base/GlareBackground";
import { segmentList } from "@/utils/constants";
import Footer from "./components/Footer";
import Calendly from "./components/Calender";

export default function Home() {
  return (
    <main className={styles.main}>
      <GlareBackground />
      <Navigation />
      <Landing />
      <Partners />
      <Trending />
      {segmentList.map((data, i) => (
        <Segment
          key={i}
          index={i}
          type={i === 0 ? "middle" : i % 2 === 0 ? "left" : "right"}
          title={data.title}
          subtitle={data.subtitle}
        />
      ))}
      <Calendly />
      <Footer />
    </main>
  );
}
