import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Not Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-lg text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-blue-100 cursor-pointer" />

          <Avatar url="https://firebasestorage.googleapis.com/v0/b/messenger-app-6b72d.appspot.com/o/profile.png?alt=media&token=239e5f15-e076-413b-92f7-26d4a1b1247b" />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
          alt=""
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-600" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
            alt=""
          />
          <MicrophoneIcon className="h-5 text-blue-500" />
        </div>

        <div
          className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0
        sm:flex-row sm:space-x-4"
        >
          <button onClick={search} className="btn">
            Google Search
          </button>

          <button onClick={search} className="btn">
            Feeling Lucky
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
