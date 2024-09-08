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

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={cn(s["home"])}>
        <Head>
          <title>Darukaa Earth | Home</title>
        </Head>
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
              <source src="/videos/darukaa-hero.mp4" type="video/mp4" />
            </video>
            <div className={cn(s["home__hero__overlay"])}>
              <h1 className="text-h1-md-max md:text-h1">
                Catalyzing Climate Finance
              </h1>
              <p>Innovating Carbon & Biodiversity Solutions</p>
            </div>
          </section>

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

          <section className="mt-10">
            <HorizontalSlider />
          </section>

          {/* What we do */}
          <section
            className={cn(
              s["home__what-we-do"],
              "rounded-20 overflow-hidden mt-10 container"
            )}
            id="what-we-do"
          >
            <GridCards />
          </section>

          <section>
            <BentoCards />
          </section>

          {/* Services | How we do it */}
          <section
            className={cn(s["home__services"], "mt-10 container")}
            id="services"
          >
            <StackCards />
          </section>

          {/* Solutions */}
          {/* <section
            className={cn(s["home__solutions"], "mt-10 container")}
            id="solutions"
          >
            <TextwithMedia />
          </section> */}

          {/* Why it matters */}
          <section className={cn(s["home__why-it-matters"], "mt-10 container")}>
            <GalleryCards />
          </section>

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

          {/* Contact us */}
          <section className="container mt-10 rounded-20 overflow-hidden">
            <div className={cn(s["home__contact-us"])}>
              <h1 className="text-h1-md-max md:text-h1">Contact us</h1>
              <p className="mt-4 md:mt-8 text-base md:text-xl">
                Contact us at:{" "}
                <a href="mailto:info@Darukaa.com">
                  <FontAwesomeIcon icon={faEnvelope} size="1x" />{" "}
                  info@Darukaa.com
                </a>
              </p>
            </div>
          </section>

          <section className="container mt-10">
            <Footer />
          </section>
        </div>
      </main>
    </>
  );
}
