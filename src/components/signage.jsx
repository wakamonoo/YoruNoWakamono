export default function Signage() {
  return (
    <div className="flex justify-center align-center w-full">
      <div className="relative">
        <p className="absolute text-center font-tall text-[5rem] md:text-[7rem] lg:text-[9rem] text-header opacity-40 leading-[4.5rem] md:leading-[6.5rem] lg:leading-[8.5rem] whitespace-nowrap">
          YORU NO <br />
          WAKAMONO
        </p>
        <p className="relative text-center font-tall text-[5rem] md:text-[7rem] lg:text-[9rem] text-transparent stroke-text pointer-events-none z-40 leading-[4.5rem] md:leading-[6.5rem] lg:leading-[8.5rem] whitespace-nowrap">
          YORU NO <br />
          WAKAMONO
        </p>
      </div>
    </div>
  );
}
