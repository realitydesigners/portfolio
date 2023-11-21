import { useState } from 'react';

export default function Navbar() {
   const [isNavOpen, setIsNavOpen] = useState(false);

   // Function to toggle the navigation menu
   const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
      document.body.style.overflow = isNavOpen ? 'auto' : 'hidden';
   };

   // Function to handle the SVG path change
   const getMenuIconPath = () => {
      return isNavOpen ? 'M3 3l18 18M3 21L21 3' : 'M3 12h18M3 6h18M3 18h18';
   };
   const getIcon = name => {
      const icons = {
         logo: (
            <svg width="30" height="30" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M47.1279 70.8731L33.5967 55.3087M43.4729 23.3416L10.6978 28.9689L33.5967 55.3087M43.4729 23.3416L33.5967 55.3087M43.4729 23.3416L68.3831 51.4708L33.5967 55.3087M43.4729 23.3416L30.6805 9.58502" stroke="white" strokeWidth="5" />
            </svg>
         ),
         // Placeholder icon for 'library'
         library: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M4 3H20V21H4V3ZM6 5V19H18V5H6Z" stroke="currentColor" strokeWidth="2" />
               <path d="M9 7H15" stroke="currentColor" strokeWidth="2" />
               <path d="M9 11H15" stroke="currentColor" strokeWidth="2" />
               <path d="M9 15H15" stroke="currentColor" strokeWidth="2" />
            </svg>
         ),
         story: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M4 4H14L20 10V20H4V4Z" stroke="currentColor" strokeWidth="2" />
               <path d="M14 4V10H20" stroke="currentColor" strokeWidth="2" />
               <path d="M6 12H12" stroke="currentColor" strokeWidth="2" />
               <path d="M6 16H12" stroke="currentColor" strokeWidth="2" />
            </svg>
         ),
      };
      return icons[name] || <path />;
   };

   return (
      <nav role="navigation" id="navbar" className="flex items-center justify-between z-80  bg-black fixed w-full z-50 h-auto">
         <div className="ml-2 relative z-80 logo">
            <a href="/" className="flex-cols z-80 p-2 items-center flex">
               {getIcon('logo')}
            </a>
         </div>
         <a href="/" className="flex lg:flex text-white pt-2 pb-2 flex-col">
            <span className="text-sm font-mono font-bold tracking-wide leading-none">raymondreamer</span>
         </a>

         <div className="flex relative">
            <button id="nav-toggle" className="flex items-center justify-center items-center relative pl-2 pt-3 pr-2 z-20" aria-label="Toggle Menu" onClick={toggleNav}>
               <svg className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d={getMenuIconPath()} stroke="#fff" strokeWidth="2"></path>
               </svg>
            </button>
         </div>

         <div id="nav-content" role="menu" className={`absolute right-2 top-2 rounded-2xl border border-gray-200/20 bg-black/50 lg:w-1/3 sm:w-2/3 w-[96vw] h-[97vh] overflow-y-auto flex-grow flex items-center ${isNavOpen ? 'flex' : 'hidden'}`}>
            <div className="w-full h-full backdrop-blur-xl p-2 relative ">
               <div className="w-full h-[250px]">
                  <a href="/">
                     <spline-viewer url="https://prod.spline.design/HeD0BAam-X2SBMf3/scene.splinecode"></spline-viewer>
                  </a>
               </div>

               <ul class="flex font-bold relative  p-2 gap-2 h-auto lg:h-auto flex-col  lg:justify-end uppercase text-black text-3xl lg:text-4xl">
                  <li>
                     <a href="/" className="block flex items-center px-3 py-1 text-white hover:bg-gray-200/30 rounded-lg">
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                           {getIcon('library')}
                        </svg>
                        Projects
                     </a>
                  </li>
                  <li>
                     <a href="/" className="block flex items-center px-3 py-1 text-white hover:bg-gray-200/30 rounded-lg">
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                           {getIcon('story')}
                        </svg>
                        About
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}
