// eslint-disable-next-line react/prop-types
export default function NavLinkHeader({ text }) {
   return (
      <>
         <a href="#" className="py-8 relative group">
            <span className="">{text}</span>
            <span className=" absolute bottom-0 block scale-0 group-hover:scale-100 transition-all duration-300 group-hover:bg-orange-primary w-full h-1"></span>
         </a>
      </>
   );
}
