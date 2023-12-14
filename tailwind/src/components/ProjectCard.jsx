import { TbWorldWww } from 'react-icons/tb';
const ProjectCard = ({ img, url, text, title, github }) => {
  return (
    <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
      <img
        src={img}
        alt={title}
        className='w-full object-cover rounded-t-lg h-64 '
      />
      <div className='capitalize p-8'>
        <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
        <p className='mt-4 leading-loose'>{text}</p>
        <div className='mt-4 flex gap-x-4'>
          <a href={url}>
            <TbWorldWww className='h-5 w-5 text-red-700 hover:text-black duration-300' />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectCard;
