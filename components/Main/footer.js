import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col py-12 bg-[#F2F2F2] gap-4 lg:gap-8">
      <div className="text-black flex">
        <div className="lg:w-1/12"></div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 text-[0.8em] w-full mx-4">
          <div className="flex flex-col lg:w-1/5 gap-4">
            <div>
              <h6 className="text-sans font-bold">About</h6>
              <p>
                INVOKE is a data firm founded in 2016. It brings together
                technical expertise in data science, software engineering,
                application development, digital marketing and creative arts to
                offer data-driven solutions to the mass market at the lowest
                entry price.
              </p>
              <Link href="/about">
                <a className="underline">Read more</a>
              </Link>
            </div>
            <Link href="/privacy-policy">
              <a>Privacy policy</a>
            </Link>
          </div>
          <div className="flex flex-col lg:w-1/5 gap-4">
            <div>
              <h6 className="text-sans font-bold">Find us</h6>
              <p>
                <a href={"mailto:sales@invokeisdata.com"}>
                  sales@invokeisdata.com
                </a>
              </p>
            </div>
            <p>
              Level 2-4, 80, Jalan Tasik Utama 5, Sungai Besi, 57000 Kuala
              Lumpur, Malaysia
            </p>
          </div>
          <div className="flex flex-col lg:w-1/5">
            <h6 className="text-sans font-bold">Solutions</h6>
            <ul>
              <li>
                <Link href="/digital-marketing">
                  <a>Digital Marketing</a>
                </Link>
              </li>
              <li>
                <Link href="/analytics">
                  <a>Analytics</a>
                </Link>
              </li>
              <li>
                <Link href="/app-development">
                  <a>App. Development</a>
                </Link>
              </li>
              <li>
                <Link href="/surveys">
                  <a>Surveys</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col lg:w-1/5">
            <h6 className="text-sans font-bold">Platforms</h6>
            <ul>
              <li>
                <Link href="/adnexio">
                  <a>adnexio</a>
                </Link>
              </li>
              <li>
                <Link href="/meniaga">
                  <a>meniaga</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col lg:w-1/5 gap-4">
            <div>
              <h6 className="text-sans font-bold">Team</h6>
              <p>We are doers, creators & artists.</p>
              <Link href="/team">
                <a className="underline">Read more</a>
              </Link>
            </div>
            <Link href="/career">
              <a>Career</a>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/12"></div>
      </div>
      <div className="text-black flex">
        <div className="lg:w-1/12"></div>
        <div className="flex flex-col lg:flex-row lg:justify-between w-full mx-4">
          <p className="text-[0.8em]">
            &copy; INVOKE Solutions Sdn Bhd. 2016 - {new Date().getFullYear()}
          </p>
          <div className="flex text-[0.8em] gap-1">
            <p>
              <strong>Follow Us&nbsp;&nbsp;&nbsp;</strong>
            </p>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/invokeisdata/"
              >
                Facebook
              </a>
            </p>
            <p> | </p>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/invokeisdata/"
              >
                Twitter
              </a>
            </p>
            <p> | </p>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/invokeisdata/"
              >
                Instagram
              </a>
            </p>
            <p> | </p>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/invokeisdata/"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <div className="lg:w-1/12"></div>
      </div>
    </footer>
  );
}
