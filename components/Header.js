import { SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
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
    <header className="sticky top-0 bg-[#202124]">
      <div className="flex w-full p-6 items-center">
        <Image
          src={
            'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png'
          }
          alt="Google Logo"
          width={90}
          height={30}
          onClick={() => router.push('/')}
          className="cursor-pointer"
        />
        <form
          className="flex flex-grow px-6 py-2 ml-10 mr-5
       border border-neutral-500 rounded-full max-w-3xl items-center border-none bg-[#303134] hover:shadow-lg focus:shadow-lg active:shadow-lg transition transition-duration-150"
        >
          <input
            ref={searchInputRef}
            type="text"
            defaultValue={router.query.term}
            onKeyDown={handleKeyDown}
            className="flex-grow w-full focus:outline-none bg-inherit"
          />
          <XIcon
            className="h-7 sm:mr-3 text-neutral-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = '')}
          />
          <SearchIcon
            className="h-6 border-l-[1px] pl-4 border-neutral-500 text-blue-300 hidden sm:inline-flex cursor-pointer"
            onClick={search}
          />
        </form>
        <div className="ml-auto">
          <Avatar url="https://lh3.googleusercontent.com/a-/AOh14GiMtmVkYB1XAgRzvFZXzmb1NSF3ixRG1czRIWzJVQ=s83" />
        </div>
      </div>
      {/* Header Options */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
