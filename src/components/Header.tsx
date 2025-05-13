import { headerElement } from '../lib';

const Header = () => {
  return (
    <header className='flex items-center justify-around w-full px-4 py-5 text-white fixed top-0 right-0 left-0 z-50'>
      <div className='text-xl font-semibold max-md:hidden'>SamuelNguyen</div>
      <div className='flex gap-4'>
        {headerElement.map((item) => (
          <a key={item.id} href={item.href}>
            <item.icon size={25} />
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
