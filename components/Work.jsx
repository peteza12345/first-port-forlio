'use client';
import  Link  from "next/link";

import { Button } from "./ui/button";

// Swiper react componemts
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper Styles
import 'swiper/css'
import 'swiper/css/pagination'

// Required Modules
import { Pagination } from 'swiper/modules';

// Componemts
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: '/work/3.png', 
    category: 'react js', 
    name: 'Next Website', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, impedit?', 
    link: '/', 
    github: '/', 
  },
  {
    image: '/work/4.png', 
    category: 'react js', 
    name: 'Solstice Website', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, impedit?', 
    link: '/', 
    github: '/', 
  },
  {
    image: '/work/2.png', 
    category: 'next js', 
    name: 'Lumina Website', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, impedit?', 
    link: '/', 
    github: '/', 
  },
  {
    image: '/work/1.png', 
    category: 'next js', 
    name: 'Evole Website', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, impedit?', 
    link: '/', 
    github: '/', 
  },
  {
    image: '/work/3.png', 
    category: 'next js', 
    name: 'Ignite Website', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, impedit?', 
    link: '/', 
    github: '/', 
  },
  {
    image: '/work/4.png', 
    category: 'next js', 
    name: 'Envision Website', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, impedit?', 
    link: '/', 
    github: '/', 
  },
  {
    image: '/work/1.png', 
    category: 'fullstack', 
    name: 'Serenity Website', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, impedit?', 
    link: '/', 
    github: '/', 
  },
  {
    image: '/work/3.png', 
    category: 'fullstack', 
    name: 'Nova Website', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, impedit?', 
    link: '/', 
    github: '/', 
  },
  {
    image: '/work/2.png', 
    category: 'fullstack', 
    name: 'Zenith Website', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, impedit?', 
    link: '/', 
    github: '/', 
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container">

        {/* Text */}
        <div className="max-w-[480px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">
            Latest Projects
          </h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, facilis.
          </p>
          <Link href='/project'>
            <Button>All projects</Button>
          </Link>
        </div>

        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper className="h-[480px]"
            slidesPerView={1} 
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }} 
            spaceBetween={30} 
            modules={[Pagination]} 
            pagination={{ clickable: true }}
          >
            {/* Show only the first 4 project for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

export default Work;