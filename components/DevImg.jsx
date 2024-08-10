import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} priority alt="image" width={510} height={462} />
    </div>
  );
}

export default DevImg;