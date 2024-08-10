'use client';

import Image from "next/image";

// UI Card
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Swiper react componemts
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper Styles
import 'swiper/css'
import 'swiper/css/pagination'

// Required Modules
import { Pagination } from 'swiper/modules';

const reviewsData = [
  {
    avatar: '/reviews/avatar-1.png', 
    name: 'Richard Thompson', 
    job: 'Chef', 
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, nulla vero porro laboriosam doloribus recusandae.',
  },
  {
    avatar: '/reviews/avatar-2.png', 
    name: 'Evelyn Anderson', 
    job: 'Interior Desiner', 
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, nulla vero porro laboriosam doloribus recusandae.',
  },
  {
    avatar: '/reviews/avatar-3.png', 
    name: 'John Doe', 
    job: 'Game Dev', 
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, nulla vero porro laboriosam doloribus recusandae.',
  },
  {
    avatar: '/reviews/avatar-4.png', 
    name: 'Emily Smith', 
    job: 'Therapist', 
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, nulla vero porro laboriosam doloribus recusandae.',
  },
  {
    avatar: '/reviews/avatar-5.png', 
    name: 'Oliver Taylor', 
    job: 'Engineer', 
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, nulla vero porro laboriosam doloribus recusandae.',
  },
  {
    avatar: '/reviews/avatar-6.png', 
    name: 'Mason Wilson', 
    job: 'Video Editor', 
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, nulla vero porro laboriosam doloribus recusandae.',
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container">
        <h2 className="section-title mb-12 text-center mx-auto">
          Reviews
        </h2>

        {/* Slider */}
        <Swiper
          slidesPerView={1} 
          breakpoints={{
            640: { slidesPerView: 2 }, 
            1400: { slidesPerView: 3 },
          }} 
          spaceBetween={30} 
          modules={[Pagination]} 
          pagination={{
            clickable: true,
          }} 
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                  
                  {/* Header */}
                  <CardHeader className='p-0 mb-10'>
                    <div className="flex items-center gap-x-4">
                      <Image 
                        src={person.avatar} 
                        width={70} 
                        height={70} 
                        alt={person.name} 
                        priority
                      />

                      {/* Name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>

                  {/* Descriptions */}
                  <CardDescription className='text-lg text-muted-foreground'>
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Reviews;