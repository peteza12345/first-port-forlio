"use client";

import Link from "next/link";
import { motion } from "framer-motion";
// hooks
import { usePathname } from "next/navigation";

const links = [
  { path: '/', name: 'home' },
  { path: '/project', name: 'my project' },
  { path: '/contact', name: 'contact' }
];

const Nav = ({ containerStyles, linkStyles, underLineStyles }) => {
  const path = usePathname();
  
  return (
    <nav
      className={`${containerStyles}`}
    >
      {links.map((link, index) => (
        <Link 
          key={index} 
          href={link.path}
          className={`capitalize ${linkStyles}`}
        >
          {link.path === path && (
            <motion.span
              initial={{ y: '-100%' }} 
              animate={{ y: 0 }} 
              transition={{ type: 'tween' }} 
              layoutId="underline" 
              className={`${underLineStyles}`}
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;