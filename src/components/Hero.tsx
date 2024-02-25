const Hero = () => {
  return (
    <div className="w-full h-[35rem] relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/1920/1080"
          className="w-full object-cover h-full"
        />
      </div>
      <div className="absolute bg-gradient-to-tr from-black/70 to-blue-500/70 uppercase leading-3 text-white pt-20 h-full w-full flex flex-col justify-center gap-2 px-4 md:px-16">
        <span className="text-center md:text-left text-xl md:text-4xl md:tracking-widest">Pasukan Khusus</span>
        <span className="text-center md:text-left text-2xl font-black md:tracking-widest md:text-5xl">SMA Negeri 2 Palembang</span>
        <span className="text-center md:text-left md:tracking-[0.5rem] text-sm md:text-xl">
          Mandiri Menuju Prestasi
        </span>
      </div>
    </div>
  );
};

export default Hero;
