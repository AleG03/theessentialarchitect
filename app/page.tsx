import Link from "next/link";
import Rooster from "./components/Rooster";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
      <header className="mb-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16 mb-12">
          <div className="flex-1 w-full md:w-auto">
            <div className="flex flex-col items-start">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-wider main-title">
                THE<br />
                SIMPLE<br />
                ARCHITECT
              </h1>
              <div className="w-[95%] h-px bg-black my-8"></div>
              <p className="text-lg md:text-xl text-gray-600">
                Simple laws for sustainable architectures.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
              <Rooster className="w-full h-full text-black" />
            </div>
          </div>
        </div>
      </header>

      <section className="grid gap-8 max-w-2xl mx-auto">
        <Link href="/law1" className="block">
          <div className="law-card text-center">
            <div className="flex flex-col items-center">
              <h2 className="text-xl md:text-2xl font-normal">LAW 1.</h2>
              <div className="w-1/2 h-px bg-black/10 my-4"></div>
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-normal">
                  No tool can be more complicated than the action it performs
                </h3>
                <p className="text-gray-600 text-base">
                  When designing and developing a system, balance the effort to implement the tool with the complexity of the action it must execute.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
