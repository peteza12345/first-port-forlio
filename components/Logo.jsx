import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href='/'>
      <Image className="size-[54px]" src='/logo.svg' width={54} height={54}
        priority 
        alt='Logo'
      />
    </Link>
  );
}

export default Logo;