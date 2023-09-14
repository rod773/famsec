import React from "react";
import { Container } from "./container";
import Image from "next/image";
import heroImageOne from "@/images/hero-image-1.webp";
import heroImageTwo from "@/images/hero-image-2.webp";
import heroImageThree from "@/images/hero-image-3.webp";
import heroImageFour from "@/images/hero-image-4.webp";
import heroImageFive from "@/images/hero-image-5.webp";

export function Hero() {
  return (
    <section className="py-20">
      <Container>
        <div className="lg:flex items-center justify-between">
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            <span className="inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:z-[-1] before:w-2/3 before:bg-yellowLight">
              Welcome to FamSec
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-heading mb-7">
              Protecting Families, Securing Futures
            </h1>
            <p className="leading-relaxed text-body mb-10">
              We understand that protecting your loved ones is of utmost
              importance. That&apos;s why we are dedicated to providing
              comprehensive solutions tailored to your family&apos;s unique
              needs. Our expert team is committed to creating a solid foundation
              of security and peace of mind for you and your loved ones.
            </p>
            <div className="flex items-center space-x-3">
              <button className="px-5 py-4 bg-primary hover:bg-[#134761] hover:shadow-lg relative top-0 hover:-top-1 text-white rounded-lg ring-offset-2 focus:ring-2 focus:ring-primary transition-all">
                Get Started
              </button>
              <button className="px-5 py-4 bg-secondary hover:bg-[#179792] hover:shadow-lg relative top-0 hover:-top-1 text-white rounded-lg ring-offset-2 focus:ring-2 focus:ring-primary transition-all">
                How its works?
              </button>
            </div>
          </div>
          <div className="lg:w-6/12 space-y-2">
            <div className="flex items-stretch space-x-2">
              <div className="w-8/12">
                <Image
                  src={heroImageOne}
                  alt=""
                  width={397}
                  height={406}
                  className="h-full w-full object-cover rounded-2xl"
                />
              </div>

              <div className="w-4/12 self-end space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Image
                      src={heroImageTwo}
                      alt=""
                      width={397}
                      height={406}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div className="rounded-2xl bg-yellowLight rounded-tr-[200px]"></div>
                </div>
                <div>
                  <Image
                    src={heroImageThree}
                    alt=""
                    width={397}
                    height={406}
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-2">
              <div className="w-4/12">
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-2xl bg-greenLight rounded-bl-[200px]"></div>
                  <div>
                    <Image
                      src={heroImageFive}
                      alt=""
                      width={397}
                      height={406}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
              <div className="w-5/12">
                <Image
                  src={heroImageFour}
                  alt=""
                  width={397}
                  height={406}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
