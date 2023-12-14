import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='py-20 align-element' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} alt='about' className='w-full h-64' />
        <article>
          <SectionTitle text='about me' />
          <p className='mt-8 leading-loose'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            vel sapiente voluptas quo maiores quam sint nisi laboriosam? Ad
            obcaecati in nemo vitae beatae, adipisci impedit harum praesentium
            temporibus minima.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
