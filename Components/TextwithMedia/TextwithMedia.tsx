import cn from "classnames";
import s from "../../styles/home.module.scss";
import Image from "next/image";

export default function TextwithMedia() {
  return (
    <>
      <section
        className={cn(
          s["home__solutions"],
          "flex flex-col md:flex-row bg-white h-max-1/2 relative rounded-20 mt-10"
        )}
        id="solutions"
      >
        <div className="w-full md:w-1/2 p-4">
          <Image
            src={"/images/why-we-do.jpg"}
            alt=""
            layout="responsive"
            width={100}
            height={100}
            className="rounded-xl !h-full object-cover overflow-hidden"
          />
        </div>
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
            Solutions
          </p>
          <h1
            className={cn(
              s["home__introduction__content--headline"],
              "h1-md-max md:h1"
            )}
          >
            Why we do
          </h1>
          <p
            className={cn(
              s["home__introduction__content--body-copy"],
              "body-copy-md-max md:body-copy"
            )}
          >
            We believe in carbon and nature-based credits as scalable ways to
            channel investments into climate solutions.
            <br /> <br />
            We commit to - Transparency, Data-Centricity, Governance and
            Independent Validation.
          </p>
        </div>
      </section>

      <section
        className={cn(
          s["home__introduction"],
          "flex flex-col md:flex-row bg-white relative rounded-20 mt-10"
        )}
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
            Solutions
          </p>
          <h1
            className={cn(
              s["home__introduction__content--headline"],
              "h1-md-max md:h1"
            )}
          >
            Why us
          </h1>
          <div
            className={cn(
              s["home__introduction__content--body-copy"],
              "body-copy-md-max md:body-copy"
            )}
          >
            <li>Enhancing Monitoring</li>
            <li>Streamlining Assessments</li>
            <li>Aligning with Global Standards</li>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <Image
            src={"/images/why-us.jpg"}
            alt=""
            width={100}
            height={100}
            layout="responsive"
            className="rounded-xl !h-full object-cover overflow-hidden"
          />
        </div>
      </section>
    </>
  );
}
