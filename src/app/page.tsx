import Link from 'next/link'
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Onboarding = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="relative w-[300px] h-[600px] bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="absolute top-4 left-4 text-gray-500 font-semibold">Onboarding - 01</div>
        
        <div className="relative w-full h-2/3">
          <Image 
            src="/image/vrmale.png"
            alt="VR Experience" 
            layout="fill" 
            objectFit="cover" 
          />
        </div>
        
        <div className="absolute bottom-0 w-full bg-white p-6 rounded-t-3xl shadow-md">
          <div className="text-sm text-gray-400 flex space-x-1 mb-2">
            <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>
          <h2 className="text-2xl font-bold text-green-600">Get ready to be Excited</h2>
          <p className="text-gray-500 text-sm mt-2">Millions of people have proven it, now it's your turn!</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-gray-400 text-sm">SKIP</span>
            <Link href="/listevents">
            <button className="bg-green-500 p-3 rounded-full text-white">
              <ArrowRight size={20} />
            </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
