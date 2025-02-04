import Image from "next/image";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger } 
from '@/components/ui/tabs';
import { 
  User2, 
  MailIcon, 
  HomeIcon, 
  PhoneCall, 
  GraduationCap, 
  Calendar, 
  Briefcase } 
from 'lucide-react';
import DevImg from "./DevImg";

const infoData = [
  {
    icon: <User2 size={20} />, 
    text: 'Pete Za',
  },
  {
    icon: <PhoneCall size={20} />, 
    text: '083 275 1400',
  },
  {
    icon: <MailIcon size={20} />, 
    text: 'pete@hotmail.com',
  },
  {
    icon: <Calendar size={20} />, 
    text: 'Born on 25 Aug 1998',
  },
  {
    icon: <GraduationCap size={20} />, 
    text: 'Master on Computer Science',
  },
  {
    icon: <HomeIcon size={20} />, 
    text: '10720 Blue Avenue, SM, TH',
  },
];

const qualificationData = [
  {
    title: 'education', 
    data: [
      {
        university: 'Example University', 
        qualification: 'Bachelor of Science', 
        years: '2015 - 2018',
      },
      {
        university: 'Another University', 
        qualification: 'Master of Arts', 
        years: '2019 - 2021',
      },
      {
        university: 'Yet Another University', 
        qualification: 'Ph.D in Computer Science', 
        years: '2021 - 2023',
      },
    ],
  },
  {
    title: 'experience', 
    data: [
      {
        company: 'Nissan Morter co.th.', 
        role: 'Tachnical Warranty Service', 
        years: '2023 - 2024',
      },
      {
        company: 'XYZ Copration', 
        role: 'Senior Developer', 
        years: '2023 - 2024',
      },
      {
        company: 'ABC Inc.', 
        role: 'Software Engineer', 
        years: '2023 - 2024',
      },
    ],
  },
];

const skillData = [
  {
    title: 'skills', 
    data: [
      {
        name: 'HTML, CSS', 
      },
      {
        name: 'Front-end Development', 
      },
      {
        name: 'Javascript, Type-script', 
      },
      {
        name: 'Back-end Development', 
      },
    ],
  },
  {
    title: 'tools', 
    data: [
      {
        imgPath: '/about/vscode.svg', 
      },
      {
        imgPath: '/about/figma.svg', 
      },
      {
        imgPath: '/about/notion.svg', 
      },
      {
        imgPath: '/about/wordpress.svg', 
      },
    ],
  },
];

const About = () => {
  const getDate = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
      <div className='container'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          About me
        </h2>

        <div className='flex flex-col xl:flex-row'>
          {/* Image */}
          <div className='hidden xl:flex flex-1 relative'>
            <DevImg 
              containerStyles='bg-about_shape_light dark:bg-about_shape_dark size-[505px] bg-no-repeat relative' 
              imgSrc='/about/developer.png'
            />
          </div>

          {/* Tabs */}
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                {/* Tabs Title */}
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                  Personal Info
                </TabsTrigger>

                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>
                  Qualifications
                </TabsTrigger>

                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
                  skills
                </TabsTrigger>
              </TabsList>

              {/* Tabs Content */}
              <div className='text-lg mt-12 xl:mt-8'>
                {/* Pernonal */}
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>
                      Unmatched Service Quality for Over 10 Years
                    </h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                      I specialize in crafting intuitive websites with cutting-edge technology, 
                      delivering dynamic and engaging user experience.
                    </p>

                    {/* Icons */}
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {infoData.map((item, index) => {
                        return (
                          <div 
                            key={index}
                            className='flex items-center gap-x-4 mx-auto xl:mx-0'  
                          >
                            <div className='text-primary'>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className='text-primary'>Language Skill</div>
                      <div className='border-b border-border'></div>
                      <div>English, French, Spanish, Japan</div>
                    </div>
                  </div>
                </TabsContent>

                {/* Qualificaltions */}
                <TabsContent value='qualifications'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>
                      My Awesome Journey
                    </h3>

                    {/* Experience & Education wrapper */}
                    <div className='grid md:grid-cols-2 gap-y-8'>
                      {/* Experience */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-4 items-center text-[22px] text-primary'>
                          <Briefcase size={28} />
                          <h4 className='capitalize font-medium'>
                            {getDate(qualificationData, 'experience').title}
                          </h4>
                        </div>

                        {/* Lists */}
                        <div className='flex flex-col gap-y-8'>
                          {getDate(qualificationData, 'experience').data.map((item, index) => {
                            const {company, role, years} = item;
                            
                            return (
                              <div 
                                key={index}
                                className='flex gap-8 group'
                              >
                                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                  <div className='size-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                </div>

                                <div>
                                  <div className='font-semibold text-xl leading-none mb-2'>
                                    {company}
                                  </div>
                                  <div className='text-lg leading-none text-muted-foreground mb-4'>
                                    {role}
                                  </div>
                                  <div className='text-base font-medium'>
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Education */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-4 items-center text-[22px] text-primary'>
                          <GraduationCap size={28} />
                          <h4 className='capitalize font-medium'>
                            {getDate(qualificationData, 'education').title}
                          </h4>
                        </div>

                        {/* Lists */}
                        <div className='flex flex-col gap-y-8'>
                          {getDate(qualificationData, 'education').data.map((item, index) => {
                            const {university, qualification, years} = item;
                            
                            return (
                              <div 
                                key={index}
                                className='flex gap-8 group'
                              >
                                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                  <div className='size-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                </div>

                                <div>
                                  <div className='font-semibold text-xl leading-none mb-2'>
                                    {university}
                                  </div>
                                  <div className='text-lg leading-none text-muted-foreground mb-4'>
                                    {qualification}
                                  </div>
                                  <div className='text-base font-medium'>
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Skills */}
                <TabsContent value='skills'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'>What I Use Everyday</h3>
                    
                    {/* Skills */}
                    <div className='mb-16'>
                      <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                      <div className='border-b border-border mb-4'></div>

                      {/* Skill List */}
                      <div>
                        {getDate(skillData, 'skills').data.map((item, index) => {
                          const {name} = item;
                          
                          return (
                            <div 
                              key={index} 
                              className='w-2/4 text-center xl:text-left mx-auto'
                            >
                              <div className='font-medium'>{name}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Tools */}
                    <div>
                      <h4 className='text-xl font-semibold mb-2 xl:text-left'>Tools</h4>
                      <div className='border-b border-border mb-4'></div>

                      {/* Tools */}
                      <div className='flex gap-x-8 justify-center xl:justify-start'>
                        {getDate(skillData, 'tools').data.map((item, index) => {
                          const {imgPath} = item;
                          
                          return (
                            <div
                              key={index} 
                              className='' 
                            >
                              <Image 
                                src={imgPath} 
                                width={48} 
                                height={48} 
                                alt='image' 
                                priority 
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;