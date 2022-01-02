import Image from 'next/image';
function Avatar({ url }) {
  return (
    <div className="h-8 pr-3">
      <Image
        className="rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
        src={url}
        alt="profile picture"
        width={30}
        height={30}
      />
    </div>
  );
}

export default Avatar;
