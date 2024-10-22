import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-between min-h-screen overflow-hidden">
     
      <Header />
      <section className="flex flex-1 items-center justify-center z-50">
        <div className="text-center max-w-screen-lg px-4">
          <h1 className="mb-4 text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white">
            Your Personal AI Interview Coach
          </h1>
          <p className="mb-8 text-lg md:text-xl text-gray-500 dark:text-gray-400">
            Double your chances of landing that job offer with our AI-powered interview prep
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a 
              href="/dashboard" 
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white rounded-lg bg-black hover:bg-black focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get Started for Free
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
