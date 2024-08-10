import Image from "next/image";
import Head from "next/head";
import Navbar from "@/Components/Navigation/Navbar";
import cn from "classnames";
import s from "../styles/home.module.scss";
import StackCards from "@/Components/StackCards/StackCards";

export default function Home() {
  return (
    <main className={cn(s["home"])}>
      <Head>
        <title>Darukaa Earth | Home</title>
      </Head>
      <Navbar />
      <div>
        {/* Hero Section */}
        <section className={cn(s["home__hero"])}>
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/video-thumbnail.png"
            className="w-full h-full object-cover"
          >
            <source src="/videos/one.mp4" type="video/mp4" />
          </video>
          <div className={cn(s["home__hero__overlay"])}>
            <h1>Innovating Carbon & Biodiversity Solutions</h1>
            <p>Catalyzing Climate Finance</p>
          </div>
        </section>

        {/* Introduction */}
        <section
          className={cn(
            s["home__introduction"],
            "flex flex-col md:flex-row bg-white relative rounded-20 mt-10"
          )}
          id="introduction"
        >
          <div
            className={cn(
              s["home__introduction__content"],
              "w-full md:w-1/2 text-black p-10"
            )}
          >
            <p className={cn(s["home__introduction__content--pretitle"])}>
              Introduction
            </p>
            <h1 className={cn(s["home__introduction__content--headline"])}>
              Who we are
            </h1>
            <p className={cn(s["home__introduction__content--body-copy"])}>
              We enhance permanence, additionality & accurate environmental
              measurements through carbon credit principles, facilitating
              impactful climate finance solutions. <br />
              <br />
              We bring together an impact-driven crew of diverse professionals
              in environmental science, finance, geospatial analytics and social
              development.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <Image
              src={"/images/intro.jpg"}
              alt=""
              layout="responsive"
              width={100}
              height={100}
              className="rounded-xl overflow-hidden"
            />
          </div>
        </section>

        {/* Services | How we do it */}
        <section className={cn(s["home__services"], 'mt-10')} id="services">
          <StackCards />
        </section>
        <section className={cn(s["home__contact"])} id="contact"></section>
      </div>
    </main>
  );
}
