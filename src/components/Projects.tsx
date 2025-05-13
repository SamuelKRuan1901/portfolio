import { projects } from '../lib';

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-auto p-4 pb-10 my-20 border-b-3'>
      <div className='text-7xl font-bold w-[905px] max-md:text-4xl max-md:w-full'>
        Projects
      </div>
      <div className='flex flex-wrap items-start justify-center w-full gap-4 mt-8 max-md:bg-slate-900/50 max-md:shadow-lg'>
        {projects.map((project) => (
          <div
            key={project.title}
            className='w-[600px] flex flex-col items-start justify-center gap-2 p-4'
          >
            <div className='relative'>
              <img
                className={`w-full h-[320px] max-md:h-full rounded-lg`}
                src={project.image}
                alt={project.title}
              />
              <div
                className={`flex flex-col gap-4 w-full h-[320px] max-md:h-auto bg-slate-900/50 rounded-lg
                   items-center justify-center absolute top-0 left-0  bottom-0 right-0
                   transition-all duration-300 z-30 max-lg:hidden hover:opacity-100 opacity-0`}
              >
                <a href={project.liveSite}>
                  <button className='text-white uppercase border-b-2 border-[#4ee1a0]'>
                    live site
                  </button>
                </a>
                <a href={project.githubCode}>
                  <button className='text-white uppercase border-b-2 border-[#4ee1a0]'>
                    github code
                  </button>
                </a>
              </div>
            </div>

            <h3 className='text-2xl font-semibold my-5'>{project.title}</h3>
            <p className='text-md text-slate-400 h-32 max-md:h-auto max-md:text-center'>
              {project.description}
            </p>
            <hr className='w-full mt-5' />
            <div className='w-full flex flex-wrap items-center justify-start gap-2 mt-4'>
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className='text-sm text-slate-400 border-b-2 border-[#4ee1a0] px-2'
                >
                  {tech}
                </span>
              ))}
            </div>
            <div
              className={`flex w-full gap-4 justify-center items-center lg:hidden mt-5 `}
            >
              <a href={project.liveSite}>
                <button className='text-white uppercase border-b-2 border-[#4ee1a0]'>
                  live site
                </button>
              </a>
              <a href={project.githubCode}>
                <button className='text-white uppercase border-b-2 border-[#4ee1a0]'>
                  github code
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
