import React from 'react';

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl font-bold">Lorem ipsum dolor</h1>
        <h2 className="mt-5 md:mt-0">
          Lorem ipsum dolor sit amet{' '}
          <span className="underline decoration-4 decoration-[#BB2649]">
            consectetur adipisicing elit. Quisquam
          </span>
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Lorem ipsum dolor | sit amet consectetur | adipisicing elit. | Quisquam
      </p>
    </div>
  );
}

export default Banner;
