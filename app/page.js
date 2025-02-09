"use client";
import CardComponent from "./CardComponent";
import Carousel from "./Carousel";
import { useEffect } from "react";
// useEffect(() => {
//   if (!isPaused) {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000); // Adjust speed here (milliseconds)
//     return () => clearInterval(interval);
//   }
// }, [isPaused, currentIndex]);


export default function Home() {
  return (
    <div>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-customBlue3">Tech Vitals</h1>
            <p className="mt-4 text-gray-700">
              At Tech Vitals, we bridge the gap between pharmaceutical companies
              and groundbreaking research by providing secure access to
              volunteer data for drug testing. Our platform serves as a
              centralized repository where registered pharmaceutical companies
              can obtain crucial trial data to enhance their drug development
              processes.
            </p>
            <button className="mt-6 bg-customBlue text-white px-4 py-2 rounded-lg shadow hover:bg-customBlue3">
              Volunteers' list
            </button>
          </div>
          <div className="flex-1">
            <img
              src="/clinical-trial.jpg"
              alt="Clinical Trial"
              className="rounded-lg shadow"
            />
          </div>
        </div>

        {/* How to Register Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-customBlue">How to Register</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Create an Account",
                description:
                  "Sign up on our platform and complete the company verification process.",
                icon: "👤",
              },
              {
                title: "Submit Credentials",
                description:
                  "Provide necessary regulatory documents and compliance information.",
                icon: "📋",
              },
              {
                title: "Access Data",
                description:
                  "Once approved, gain secure access to our repository of volunteer data for drug testing.",
                icon: "🔑",
              },
            ].map((step, index) => (
              <CardComponent
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
              
              />
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div id="benefits" className="mt-16">
          <h2 className="text-2xl font-bold text-customBlue text-center">
            Benefits
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Clinical Data Access",
                description:
                  "Secure access to volunteer data for registered pharmaceutical companies.",
                icon: "💊",
              },
              {
                title: "Reduced Trial Losses",
                description:
                  "Minimizes trial failures by providing reliable data.",
                icon: "📉",
              },
              {
                title: "Enhanced Patient Monitoring",
                description:
                  "Ensures safety and enhances monitoring with reliable datasets.",
                icon: "👩‍⚕️",
              },
              {
                title: "Easy Integration",
                description:
                  "Integrates seamlessly with existing healthcare systems.",
                icon: "🔗",
              },
            ].map((benefit, index) => (
              // <div
              //   key={index}
              //   className="flex items-start bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105"
              // >
              <div
  key={index}
  className="flex items-start bg-white rounded-lg p-6 
             drop-shadow-[0_4px_6px_rgba(39,93,99,0.5)] 
             hover:drop-shadow-[0_6px_8px_rgba(39,93,99,0.7)] 
             transition-transform transform hover:scale-105"
>

                <div className="text-blue-600 text-4xl mr-4">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-customBlue">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div id="learn-more" className="mt-16 flex justify-center">
            <button className="bg-customBlue text-white px-6 py-2 rounded-lg shadow hover:bg-customBlue3">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-customBlue3 py-16">
        <Carousel />
      </div>
    
  </div>
  );
}
