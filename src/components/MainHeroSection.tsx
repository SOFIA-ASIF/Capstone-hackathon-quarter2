import Link from 'next/link';
import React from 'react';
import Arrow from './Icons/arrow';

const MainHeroSection = ({ title, path }: { title: string; path: string }) => {
  return (
    <section className="relative flex flex-col items-center h-80 justify-center">
      {/* Blurred background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{ backgroundImage: `url('/shop_background.jpeg')` }}
      ></div>

      {/* Content */}
      <article className="relative z-10 flex flex-col gap-5 justify-center">
        <h1 className="text-5xl">{title}</h1>

        <span className="flex flex-row gap-2 items-center justify-center">
          <Link className="font-medium hover:underline" href="/">
            Home
          </Link>{' '}
          <Arrow /> <p className="font-light">{path}</p>
        </span>
      </article>
    </section>
  );
};

export default MainHeroSection;