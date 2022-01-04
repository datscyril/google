import Head from 'next/head';
import Avatar from '../components/Avatar';
import Image from 'next/image';
import { SearchIcon, ViewGridIcon } from '@heroicons/react/solid';
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      search(event);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="flex w-full p-3 justify-end text-sm ">
        <div className="flex space-x-4 items-center justify-around">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-6 w-6" />
          <Avatar url="https://lh3.googleusercontent.com/a-/AOh14GiMtmVkYB1XAgRzvFZXzmb1NSF3ixRG1czRIWzJVQ=s83" />
        </div>
      </header>
      <form className="flex flex-col items-center mt-36 flex-grow w-4/5">
        <Image
          src={
            'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png'
          }
          alt="Google Logo"
          width={272}
          height={92}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-neutral-500 px-5 py-3 items-center sm:max-w-xl lg:max-w-xl hover:bg-[#303134] focus:bg-[#303134] transition transition-duration-150">
          <SearchIcon className="h-6 w-6 mr-3 text-zinc-500" />
          <input
            type="text"
            onKeyDown={handleKeyDown}
            ref={searchInputRef}
            className="flex-grow bg-inherit focus:outline-none "
          />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-7 sm:flex sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn" onClick={search}>
            Google Search
          </button>
          <button className="btn" onClick={search}>
            I&apos;m Feeling Lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
