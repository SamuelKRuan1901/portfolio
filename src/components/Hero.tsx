const Hero = () => {
  return (
    <div className='flex items-center justify-center max-md:flex-col-reverse gap-4 py-20 border-b-3'>
      <div className='w-[550px] h-[303px] max-md:w-full max-md:text-center flex flex-col gap-4 max-md:gap-8 items-start max-md:items-center justify-between'>
        <div className='lg:text-5xl font-bold text-white text-4xl'>
          Nice to meet you!
          <br />
          I'm <br className='lg:hidden' />
          <span className='border-b-4 border-[#4ee1a0]'>Samuel Nguyen</span>.
        </div>
        <p className='text-slate-400 text-lg max-md:text-center'>
          I'm a frontend developer from Vietnam. I can help you build a product,
          feature or website. Look through some of my work and experience! If
          you like what you see and have a project you need coded, don't
          hesitate to contact me.
        </p>
        <a href='mailto: duytt2k@gmail.com'>
          <button className='text-white uppercase border-b-2 border-[#4ee1a0]'>
            contact me
          </button>
        </a>
      </div>
      <div className='rounded-full w-auto h-auto p-4 bg-[#4d4646] flex items-center justify-center'>
        <img
          className='w-80 h-80 rounded-full max-md:w-56'
          src='/headimg-square.png'
          alt='profile'
        />
      </div>
    </div>
  );
};

export default Hero;
