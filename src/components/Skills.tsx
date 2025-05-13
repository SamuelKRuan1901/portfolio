import { skills } from '../lib';

const Skills = () => {
  return (
    <div className='flex flex-col items-center justify-center w-[905px] max-md:w-full h-auto p-4 pb-10 my-20 border-b-3'>
      <div className='text-3xl font-bold border-b-2'>Skills</div>
      <div className='flex flex-wrap max-sm:flex-col items-center justify-center w-full gap-4 mt-8'>
        {skills.map((skill) => (
          <div key={skill.id} className='flex items-center gap-4 p-4 flex-col'>
            <skill.icon size={50} />
            <span className='text-lg font-semibold'>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
