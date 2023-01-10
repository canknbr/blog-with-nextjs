import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../utils/urlFor';

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            src={urlFor(value).url()}
            alt={'lorem'}
            fill
            className="object-contain"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => {
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>;
    },
    number: ({ children }: any) => {
      <ol className="ml-10 py-5 list-decimal space-y-5">{children}</ol>;
    },
  },
  block: {
    h1: ({ children }: any) => {
      <h1 className="text-5xl py-10 font-bold">{children}</h1>;
    },
    h2: ({ children }: any) => {
      <h2 className="text-4xl py-10 font-bold">{children}</h2>;
    },
    h3: ({ children }: any) => {
      <h3 className="text-3xl py-10 font-bold">{children}</h3>;
    },
    h4: ({ children }: any) => {
      <h4 className="text-2xl py-10 font-bold">{children}</h4>;
    },
    blockquote: ({ children }: any) => {
      <blockquote className="border-l-4 border-l-[#8B1C3A] pl-5 py-5 my-5">
        {children}
      </blockquote>;
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noopener noreferrer'
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#8b1c3a]"
        >
          {children}
        </Link>
      );
    },
  },
};
