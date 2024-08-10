'use client';

// Hooks
import { useState } from "react";

// Ui
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";

// Components
import ProjectCard from "@/components/ProjectCard";


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
// Remove category duplicates
const uniqueCategories = [
  'all projects', 
  ...new Set(projectData.map((item) => item.category))
];


const Project = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter category
    return category === 'all projects'
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>

        {/* Tans */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className='size-full grid md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return ( 
                <TabsTrigger 
                  onClick={() => setCategory(category)}
                  key={index} 
                  value={category}
                  className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                </TabsTrigger> 
              );
            })}
          </TabsList>

          {/* Tabs Contents */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent key={index} value={category}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
}

export default Project;