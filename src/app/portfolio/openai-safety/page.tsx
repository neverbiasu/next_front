'use client';

import Image from 'next/image';
import { useEffect } from 'react';

const SafetyPage = () => {
  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate-fadeInDown');
    animateElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.remove('motion-safe:opacity-0', 'motion-safe:translate-y-10');
        el.classList.add('opacity-100', 'translate-y-0');
      }, index * 200); // 依次延迟触发动画
    });
  }, []);

  return (
    <main className="relative outline-none transition-opacity transform filter ease-out duration-[400]">
      {/* Hero Section */}
      <section className="m:h-[calc(100vh-50px)] -mt-2xl flex min-h-[500px] items-center justify-center">
        <div className="max-w-screen-sm text-center">
          <div className="m:text-[min(131px,11.5vw)] m:mb-[0.1em] relative top-[-50px] mb-[-0.2em] font-serif text-[58px] leading-[1.15] tracking-[-0.025em]">
            <div className="opacity-0 hidden motion-safe:translate-y-10">Safety at every step</div>
            <div className="motion-reduce:hidden block" aria-hidden="true">
              <span className="inline-block motion-safe:opacity-0 motion-safe:translate-y-10 animate-fadeInDown">
                Safety
              </span>
              &nbsp;
              <span className="inline-block motion-safe:opacity-0 motion-safe:translate-y-10 animate-fadeInDown">
                at
              </span>
              &nbsp;
              <span className="inline-block motion-safe:opacity-0 motion-safe:translate-y-10 animate-fadeInDown">
                every
              </span>
              &nbsp;
              <span className="inline-block motion-safe:opacity-0 motion-safe:translate-y-10 animate-fadeInDown">
                step
              </span>
            </div>
          </div>
          <p className="text-[24px] leading-[1.2] tracking-[-0.02em] mx-auto max-w-[600px] transition-opacity duration-500 md:text-[32px] lg:text-[38px] motion-safe:opacity-0 motion-safe:translate-y-10 animate-fadeInDown">
            We believe in AI&apos;s potential to make life better for everyone, which means making
            it safe for everyone.
          </p>
        </div>
      </section>

      {/* Teach, Test, Share Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-16">
        {/* Card 1 */}
        <div className="bg-gray-800 rounded-lg p-6 text-center">
          <div className="h-20 flex items-center justify-center mb-4">
            <div className="w-10 h-10 bg-white rounded-full" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Teach</h3>
          <p className="text-gray-400 text-sm">
            We actively train our AI systems to avoid harmful behaviors based on careful reviews and
            feedback.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-gray-800 rounded-lg p-6 text-center">
          <div className="h-20 flex items-center justify-center mb-4">
            <div className="w-10 h-6 bg-white rounded-md" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Test</h3>
          <p className="text-gray-400 text-sm">
            We test our systems extensively to understand their capabilities and weaknesses.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-gray-800 rounded-lg p-6 text-center">
          <div className="h-20 flex items-center justify-center mb-4">
            <div className="flex space-x-2">
              <div className="w-4 h-4 bg-white rounded-full" />
              <div className="w-4 h-4 bg-white rounded-full" />
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-2">Share</h3>
          <p className="text-gray-400 text-sm">
            We share findings and tools to help others advance safety.
          </p>
        </div>
      </section>

      {/* Safety Doesn’t Stop Section */}
      <section className="text-center py-16 px-6">
        <h2 className="text-4xl font-bold mb-8">Safety doesn’t stop</h2>
        <div className="flex justify-center gap-6">
          <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-lg font-semibold">Teach</span>
          </div>
          <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-lg font-semibold">Test</span>
          </div>
          <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-lg font-semibold">Share</span>
          </div>
        </div>
      </section>

      {/* Leading the Way */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Leading the way in Safety</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Child Safety</h4>
            <p className="text-gray-400">Ensuring our systems are safe for all ages.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Prevent Misinformation</h4>
            <p className="text-gray-400">Reducing harmful content at scale.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Bias</h4>
            <p className="text-gray-400">Reducing bias and promoting fairness.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Deep Fakes</h4>
            <p className="text-gray-400">Improving AI detection of fake content.</p>
          </div>
        </div>
      </section>

      {/* Conversations Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Conversations with OpenAI researchers
        </h2>
        <div className="flex justify-center">
          <Image
            src="/images/placeholder.jpg"
            alt="Video thumbnail"
            width={600}
            height={350}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Latest news on Safety</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-700 rounded-lg h-48" />
          <div className="bg-gray-700 rounded-lg h-48" />
          <div className="bg-gray-700 rounded-lg h-48" />
        </div>
      </section>

      {/* Go Deeper */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Go deeper on Safety</h2>
        <ul className="space-y-4">
          <li className="flex justify-between text-gray-400">
            <span>GPT-4 System Card</span>
            <a href="#" className="text-blue-500">
              Learn more
            </a>
          </li>
          <li className="flex justify-between text-gray-400">
            <span>GPT-3 System Card</span>
            <a href="#" className="text-blue-500">
              Learn more
            </a>
          </li>
          <li className="flex justify-between text-gray-400">
            <span>Fine-tuning Methods</span>
            <a href="#" className="text-blue-500">
              Learn more
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default SafetyPage;
