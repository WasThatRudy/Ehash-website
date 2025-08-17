import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useRef } from 'react';
import TeamFunBg from './backgrounds/TeamFunBg';
import bhoomi from '../images/bhoomi.jpg';
import tushar from '../images/tushar.jpg';
import dhruv from '../images/dhruv.jpg';
import govind from '../images/govind.jpg';
import ayush from '../images/ayush.jpg';
import rudraksha from '../images/rudraksha.jpg';

interface TeamMember {
  name: string;
  url: string;
  title: string;
  bio: string;
  avatar?: string;
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    { name: 'Ayush Singh', url: 'https://www.linkedin.com/in/ayush-singh-5883a1277/', title: 'Backend & ML', bio: 'Building smart backends, seamless workflows, MCP tools, and ML solutions that turn complexity into clarity.', avatar: ayush },
    { name: 'Bhoomi', url: 'https://www.linkedin.com/in/bhoomi-kumari-0000000000/', title: 'AI/ML & backend', bio: 'Builder of agents, trainer of models, creator of scalable backends that think and adapt.', avatar: bhoomi },
    { name: 'Dhruv Puri', url: 'https://www.linkedin.com/in/dhruvpuri-slashex/', title: 'DevOps & Cloud', bio: 'CI/CD wizard. I ship pipelines, observability, and zero‑downtime deploys.', avatar: dhruv },
    { name: 'Govind Pandey', url: 'https://www.linkedin.com/in/govindup63/', title: 'Backend & Devops', bio: 'I bend clouds, tame containers and automate everything. My systems don\'t just run, they dominate.', avatar: govind },
    { name: 'Rudraksha Singh', url: 'https://www.linkedin.com/in/rudrakshasingh18/', title: 'Front-End', bio: 'I craft interfaces that feel alive. Detail, flow and performance are never optional.', avatar: rudraksha },
    { name: 'Tushar Mohapatra', url: 'https://www.linkedin.com/in/tusharmohapatra07/', title: 'DevOps & Backend', bio: 'Backend engineer and cloud native developer. I scale data hungry systems, dive into CNCF projects and bend DevOps tooling to my will.', avatar: tushar },
    { name: 'Yash Agarwal', url: 'https://www.linkedin.com/in/xploy04/', title: 'Full-Stack', bio: 'Smooth apps, shared components, and offline‑first flows.', avatar: 'https://media.licdn.com/dms/image/v2/D5603AQF53aedrbBFhA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715668734235?e=1757548800&v=beta&t=6Zxh-GhaC2emVYzARmfhAPFG-t1q9CsK2JRQQJoSIVE' },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <AnimatedSection>
      <section id="team" className="min-h-screen relative overflow-hidden py-20 bg-transparent flex items-center">
      <TeamFunBg />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-400 mb-4">Meet the Team</h2>
          <p className="text-xl text-gray-300/90">The experts behind your success</p>
        </motion.div>
        {/* Horizontal snap-scrolling team carousel with quote styling */}
        <div className="-mx-4 px-4 relative">
          <div
            ref={scrollRef}
            onMouseEnter={() => {
              document.documentElement.style.scrollSnapType = 'none';
            }}
            onMouseLeave={() => {
              document.documentElement.style.scrollSnapType = 'y mandatory';
            }}
            className="flex gap-6 overflow-x-auto overscroll-contain snap-x snap-mandatory no-scrollbar pb-2 scroll-smooth"
            onWheel={(e) => {
              // Only intercept when hovering. Scroll horizontally with smooth behavior.
              if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                e.currentTarget.scrollBy({ left: e.deltaY, behavior: 'smooth' });
              }
            }}
          >
            {teamMembers.map((member, i) => (
              <motion.div
                key={`${member.url}-${i}`}
                className="snap-center shrink-0 w-[75vw] sm:w-[300px] md:w-[320px] lg:w-[340px] relative overflow-hidden rounded-2xl border border-white/10 aspect-[3/4] group cursor-pointer"
                whileHover={{ y: -4, boxShadow: '0 25px 60px rgba(0,0,0,0.4)' }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <a href={member.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 block">
                  <motion.img
                    src={member.avatar && member.avatar.length > 0 ? member.avatar : `https://unavatar.io/${encodeURIComponent(member.url)}`}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    whileHover={{ scale: 1.08 }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                {/* Hover tint to improve text readability */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
                  <p className="text-emerald-300 font-medium">{member.title}</p>
                  <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 translate-y-3 group-hover:max-h-[50vh] md:group-hover:max-h-[60vh] group-hover:opacity-100 group-hover:translate-y-0 pr-1">
                    <div className="mt-3 text-gray-100 leading-relaxed flex items-start gap-3">
                      <blockquote className="italic text-base md:text-lg">{member.bio}</blockquote>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Arrow controls removed per request */}
        </div>
      </div>
      </section>
    </AnimatedSection>
  );
};

export default Team;