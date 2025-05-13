import { headerElement } from '../lib';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center w-full h-75 text-white bg-[#242424]'>
      <div className='flex items-center justify-between w-full max-w-4xl border-t-2 border-white px-4 py-8'>
        <div className='text-xl font-semibold'>SamuelK.Nguyen</div>
        <div className='flex gap-4'>
          {headerElement.map((item) => (
            <a key={item.id} href={item.href}>
              <item.icon size={25} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
