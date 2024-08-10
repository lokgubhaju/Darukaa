import React, { useEffect } from "react";
import cn from "classnames";
import s from "./StackCards.module.scss";
import Image from "next/image";

const Panel: React.FC = () => {

    
  return (
    <main>
      <ul className={cn(s["cards"])}>
        <li className={cn(s["card"])} id="card-1">
          <div className={cn(s["card-content"])}>
            <div>
              <h2 className={cn(s["card-content__headline"])}>
              Multimodal data collection 
              </h2>
              <p className={cn(s["card-content__body-copy"])}>
                Use this space to promote the business, its products or its
                services. Help people become familiar with the business and its
                offerings, creating a sense of connection and trust. Focus on
                what makes the business unique and how users can benefit from
                choosing it.
              </p>
            </div>
            <figure>
              <Image
                src="https://assets.codepen.io/210284/flower-9.jpg"
                width={100}
                height={100}
                layout="responsive"
                alt="card-one"
              />
            </figure>
          </div>
        </li>

        <li className={cn(s["card"])} id="card-2">
          <div className={cn(s["card-content"])}>
            <div>
              <h2 className={cn(s["card-content__headline"])}>Digital MRV</h2>
              <p className={cn(s["card-content__body-copy"])}>
                Use this space to promote the business, its products or its
                services. Help people become familiar with the business and its
                offerings, creating a sense of connection and trust. Focus on
                what makes the business unique and how users can benefit from
                choosing it.
              </p>
            </div>
            <figure>
              <Image
                src="https://assets.codepen.io/210284/flower-8.jpg"
                width={100}
                height={100}
                layout="responsive"
                alt="card two"
              />
            </figure>
          </div>
        </li>

        <li className={cn(s["card"])} id="card-3">
          <div className={cn(s["card-content"])}>
            <div>
              <h2 className={cn(s["card-content__headline"])}>
                Carbon Credit Simulation
              </h2>
              <p className={cn(s["card-content__body-copy"])}>
                Use this space to promote the business, its products or its
                services. Help people become familiar with the business and its
                offerings, creating a sense of connection and trust. Focus on
                what makes the business unique and how users can benefit from
                choosing it.
              </p>
            </div>
            <figure>
              <Image
                src="https://assets.codepen.io/210284/flower-7.jpg"
                width={100}
                height={100}
                layout="responsive"
                alt="card three"
              />
            </figure>
          </div>
        </li>

        {/* <li className={cn(s['card'])} id="card-4">
          <div className={cn(s["card-content"])}>
            <div>
              <h2 className={cn(s["card-content__headline"])}>Card Four</h2>
              <p className={cn(s["card-content__body-copy"])}>
                This is the content of card four. Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </div>
            <figure>
              <Image
                src="https://assets.codepen.io/210284/flower-6.jpg"
                width={100}
                height={100}
                layout="responsive"
                alt="card four"
              />
            </figure>
          </div>
        </li> */}
      </ul>
    </main>
  );
};

export default Panel;
