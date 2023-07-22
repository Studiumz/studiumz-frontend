import { StudiumzLogo } from "@/components/icons/StudiumzLogo";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "flowbite-react";

 /* eslint-disable */ 
const LETTER_INTERVAL_IN_MILLISECONDS = 65;
const KEYWORD_INTERVAL_IN_MILLISECONDS = 1500;
const KEYWORDS_LIST: string[] = [
  "connect with peers",
  "website",
  "find peers with similar struggles",
  "online community",
  "Empowerment",
];

export default function Home() {
  const [keywordIndex, setKeywordIndex] = useState<number>(-1);
  const [currentKeyword, setCurrentKeyword] = useState<string>("pharmacy");

  // functional, recursive logic for keyword animation

  function switchKeyword() {
    setKeywordIndex((prev) => (prev + 1) % KEYWORDS_LIST.length);
  }

  function writeKeyword(keyword: string) {
    setTimeout(() => {
      setCurrentKeyword((prev) => prev.concat(keyword.slice(0, 1)));
      if (keyword.slice(1)) {
        writeKeyword(keyword.slice(1));
      } else {
        switchKeyword();
      }
    }, LETTER_INTERVAL_IN_MILLISECONDS);
  }

  function sliceKeyword(len: number) {
    setTimeout(() => {
      setCurrentKeyword((prev) => prev.slice(0, prev.length - 1));
      if (len > 1) {
        sliceKeyword(len - 1);
      }
    }, LETTER_INTERVAL_IN_MILLISECONDS);
  }

  useEffect(() => {
    if (keywordIndex === -1) {
      setKeywordIndex(0);
      return;
    }

    const len = currentKeyword.length;
    if (len >= 1) {
      setTimeout(() => {
        sliceKeyword(len);
      }, KEYWORD_INTERVAL_IN_MILLISECONDS);
    } else {
      writeKeyword(KEYWORDS_LIST[keywordIndex]);
    }
  }, [keywordIndex]);

  useEffect(() => {
    if (!(currentKeyword.length >= 1)) {
      switchKeyword();
    }
  }, [currentKeyword]);

  return (
    <>
      <div className="relative flex flex-col md:flex-row justify-center items-center mb-10 min-h-[40vw] w-full lg:p-24 md:p-20 lg:py-56 py-48">
        {/* left */}
        <div
          className="flex flex-col relative mb-10 leading-none
        text-center md:text-left 2xl:pl-[15vw]
        md:w-[50%] md:max-w-[55%] w-[100%] h-[80vw] md:h-fit mx-auto md:mx-0 md:mr-auto md:px-0 px-[10vw] sm:px-[8vw]"
        >
          <h1 className="text-black lg:text-display-medium text-display-small font-bold mr-8 md:my-0 my-auto">
            Studiumz is more than just a{" "}
            <p className="inline text-violet font-black underlinable w-fit">
              {currentKeyword}
            </p>
            <p className="inline">.</p>
          </h1>
          <br />
          <p className=" leading-normal">
            Embrace your struggles and find strength in solidarity at Studiumz!
            <br />
            <br />
            An inclusive online platform for high school students, fostering
            connections with peers who share similar struggles, offering a safe
            space to exchange advice, discover resources, and build lasting
            friendships while navigating academic life together.
          </p>
          <br />
          <br />
          <Button
            className=" bg-blue-dark w-[50%] hover:bg-blue-darkest md:mr-auto md:mx-0 mx-auto"
            href="#about"
          >
            Yuk eksplor!
          </Button>
        </div>
        <Image
          height={220}
          width={320}
          className="
            absolute right-0 top-0 lg:-mr-0lg:mt-0 md:-mt-20 object-cover rounded-3xl
            ml-auto md:w-[40vw] md:h-[40vw] md:z-10 w-0 h-0 z-10
            "
          src="/assets/images/study-peer.png"
          alt=""
        />
      </div>
    </>
  );
}
