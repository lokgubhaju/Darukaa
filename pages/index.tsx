import Image from "next/image";
import Head from "next/head";
import Navbar from "@/Components/Navigation/Navbar";
import cn from "classnames";
import s from "../styles/home.module.scss";
import StackCards from "@/Components/StackCards/StackCards";
import GridCards from "@/Components/GridCards/GridCards";
import TextwithMedia from "@/Components/TextwithMedia/TextwithMedia";
import Footer from "@/Components/Footer/Footer";
import GalleryCards from "@/Components/Gallery/Gallery";
import AboutCards from "@/Components/About/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import HorizontalSlider from "@/Components/Slider/HorizontalSlider";
import BentoCards from "@/Components/BentoCards/BentoCards";
import BackToTop from "@/Components/BackToTop/BackToTop";
import HeroSequence from "@/Components/HeroSequence/HeroSequence";
import MarqueeSlider from "@/Components/MarqueeSlider/MarqueeSlider";
import LottieAnimation from "@/Components/LottieAnimation/LottieAnimation";
import Slider from "@/Components/Slider/Slider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Darukaa Earth | Home</title>
      </Head>
      <Navbar />
      <main className={cn(s["home"])}>
        <div>
          {/* Hero Section */}
          <section className={cn(s["home__hero"], "container")} id="hero">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/darukaa-hero.png"
              className="w-full h-full object-cover"
            >
              <source src="/videos/banner_video.mp4" type="video/mp4" />
            </video>
            <div className={cn(s["home__hero__overlay"])}>
              <h1 className="text-h1-md-max md:text-h1 title-main-banner">
                Catalyzing Climate Finance
              </h1>
              <p>Innovating Carbon & Biodiversity Solutions</p>
            </div>
          </section>

          <section className="pt-10 container" id="solutions">
            <BentoCards />
          </section>

          <section id="approach">
            <LottieAnimation />
          </section>

          {/* Our Unmatched Edge */}
          <section
            className={cn(s["home__services"], "pt-10 container")}
            id="strengths"
          >
            <StackCards />
          </section>

          <HeroSequence />

          {/* <section className="pt-10 relative">
            <Slider />
          </section> */}

          {/* Introduction */}
          {/* <section
            className={cn(
              s["home__introduction"],
              "flex flex-col md:flex-row bg-white relative rounded-20 mt-10 container"
            )}
            id="introduction"
          >
            <div
              className={cn(
                s["home__introduction__content"],
                "w-full md:w-1/2 text-black p-4 md:p-10"
              )}
            >
              <p
                className={cn(
                  s["home__introduction__content--pretitle"],
                  "pretitle"
                )}
              >
                Introduction
              </p>
              <h1
                className={cn(
                  s["home__introduction__content--headline"],
                  "h1-md-max md:h1"
                )}
              >
                Who we are
              </h1>
              <p
                className={cn(
                  s["home__introduction__content--body-copy"],
                  "body-copy-md-max md:body-copy"
                )}
              >
                We enhance permanence, additionality & accurate environmental
                measurements through carbon credit principles, facilitating
                impactful climate finance solutions.
                <br />
                <br />
                We consult and advise stakeholders using the latest standards
                and methodologies to optimize sustainable outcomes.
              </p>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/images/who-we-are.png"
                className="rounded-20 overflow-hidden"
              >
                <source src="/videos/who-we-are.mp4" type="video/mp4" />
              </video>
            </div>
          </section> */}

          {/* <HorizontalSlider /> */}

          <section className="mt-10" id="collaborations">
            <h1 className="text-h1-md-max md:text-h1 container text-neutral-600">
              Collaborations
            </h1>
            <MarqueeSlider />
          </section>

          {/* Solutions */}
          {/* <section
            className={cn(s["home__solutions"], "mt-10 container")}
            id="solutions"
          >
            <TextwithMedia />
          </section> */}

          {/* Contact */}

          {/* About us section */}
          {/* <section className={cn(s["home__about"], "container mt-10")} id="about">
          <AboutCards />
        </section> */}
          {/* <section>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdtQpGkzazw224VEtLl6aZJf6bXD16bxnFhEzpX4cxYOsco-A/viewform?embedded=true"
            width="640"
            height="721"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </section> */}

          <section id="info" className={cn(s["home__why-it-matters"], "mt-10 container")}>
            <GalleryCards />
          </section>

          {/* Contact us */}
          <section
            className="container mt-10 rounded-20 overflow-hidden"
            id="contact"
          >
            <div className={cn(s["home__contact-us"])}>
              <div className={cn(s["home__contact-us__container"])}>
                <h1 className="text-h1-md-max md:text-h1 text-neutral-600">
                  Contact us
                </h1>
                <p className="mt-4 md:mt-8 text-base md:text-xl">
                  <a href="mailto:info@Darukaa.com">
                    <FontAwesomeIcon icon={faEnvelope} size="1x" />{" "}
                    info@Darukaa.com
                  </a>
                </p>
                <p className="mt-2 md:mt-4 text-base md:text-xl">
                  <a
                    href="https://www.linkedin.com/company/darukaa-esg-tech/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="1x" /> LinkedIn
                  </a>
                </p>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5319218476207!2d72.88528157611954!3d19.128179782087095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8033a47733f%3A0x5f48e5d80b45cfce!2sDarukaa.Earth!5e0!3m2!1sen!2sde!4v1727888904029!5m2!1sen!2sde"
                  width="500"
                  height="250"
                  style={{border:0}}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>

          <section className="container mt-10">
            <Footer />
          </section>
        </div>
      </main>
      <BackToTop />
    </>
  );
}
