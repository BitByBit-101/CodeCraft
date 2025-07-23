
import Particles from "./reactbits/Backgrounds/Particles/Particles";

const TestParticles = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Particles */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-black">
        <Particles count={100} color={[1, 1, 1]} size={1.5} opacity={0.8} />
      </div>

      {/* Arrow Section */}
      <section className="min-h-screen flex flex-col items-center justify-center">
        <img
          src="/images/down-arrow-orange.png"
          alt="Down Arrow"
          className="w-10 md:w-20 lg:w-25 h-auto object-contain"
        />
      </section>
    </div>
  );
};

export default TestParticles;
