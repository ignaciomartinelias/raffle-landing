import CardSection from "@/components/sections/CardSection";
import HeroSection from "@/components/sections/HeroSection";
import TopHeader from "@/components/navigation/TopHeader";
import ValuePropSection from "@/components/sections/ValuePropSection";
import ProductSection from "@/components/sections/ProductSection";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen font-(family-name:--font-geist-sans) max-w-screen ">
      <header className="flex z-50 border-b border-neutral-300 border-dotted bg-linear-to-b from-neutral-50 to-neutral-50/80 backdrop-blur-sm sticky top-0 flex-col gap-8 items-center justify-center min-w-[300px] mx-auto p-4">
        <TopHeader />
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center min-w-[300px] mx-auto">
        <div className="flex flex-col relative items-center overflow-y-auto justify-center w-full">
          <HeroSection
            title="The best self-service solution for your audience"
            subtitle="Build your own self-service solution with our easy-to-use framework. No more waiting for support tickets."
          />
          <CardSection
            title="Next-Gen Tooling for Self-Service"
            subtitle="Take advantage of the full power of Raffle AI. We provide an entire platform that handles your search, LLM assistants, and knowledge base."
          />
          <ProductSection
            title="Accelerate your content"
            subtitle="With Raffle embedded throughout your digital presence, your audience will never miss vital information. "
          />
          <ValuePropSection
            title="When data security meets user experience"
            subtitle="Up your self-service game with our plug-and-play solution. Make your entire knowledge base available to your users, and let them find the answers they need."
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
