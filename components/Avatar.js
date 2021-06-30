import Image from "next/image";

function Avatar({ className }) {
  return (
    <>
      <Image
        loading="lazy"
        className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
        src="https://firebasestorage.googleapis.com/v0/b/messenger-app-6b72d.appspot.com/o/profile.png?alt=media&token=239e5f15-e076-413b-92f7-26d4a1b1247b"
        alt="profile pic"
        height={40}
        width={40}
      />
    </>
  );
}

export default Avatar;
