import  { useState} from 'react';
import { navItems } from '../Constants';
import { NavItem } from './Header';


const Menu = ({togglePanel, isOpen} : any) => {
  const [isMenu,setIsMenu] = useState<Boolean>(false)

  const toggleMenu = () => {
  setIsMenu(!isMenu);
}
  return (
    <>
      
      <div className={`fixed block md:hidden top-0 right-0 ${isMenu?"md:w-96 w-full":"w-0"} h-full bg-white transition-all duration-300 ease-in-out z-50 overflow-hidden`}>
      <button onClick={toggleMenu} className={`fixed block md:hidden z-50 top-3 right-4 px-4 py-2 bg-yellow-400 text-black font-bold rounded-md`}>
        {isMenu ? 'X' : '☰'}
      </button>
      <div className="flex flex-col justify-center p-4 bg-gray-900 h-screen text-white items-center">
      <button onClick={togglePanel} className={`w-32 px-5 py-2 bg-yellow-400 text-black font-bold rounded-md`}>
        {isOpen ? 'X' : 'Login'}
      </button>
      
        {navItems.map((item :any, index :number) =>(
          <div onClick={item.dropdown?()=>{}:()=>toggleMenu()} className='w-full p-3 text-center'>
            <NavItem index={index} item={item} active='' toggleMenu={toggleMenu} />
          </div>
        ))}

      </div>
    </div>
     
    </>
  );
};

export default Menu;
