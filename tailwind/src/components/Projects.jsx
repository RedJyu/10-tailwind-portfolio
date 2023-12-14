import SectionTitle from './SectionTitle';
import { projects } from '../data';
import ProjectCard from './ProjectCard';
const Projects = () => {
  return (
    <section className='py-20 align-element' id='projects'>
      <SectionTitle text='my projects' />
      <div className='py-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3'>
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
