import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { type } from 'os';
import React from 'react';
import { urlFor } from '../utils/urlFor';
import ClientSide from './ClientSide';
type Props = {
  posts: Post[];
};
function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="border-[#8B1C3A] mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map(post => (
          <ClientSide key={post._id} route={`/post/${post.slug.current}`}>
            <div className="flex flex-col group cursor-pointer rounded-sm">
              <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-in-out">
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  className="object-cover object-left lg:object-center"
                  fill
                />
                <div className="absolute w-full bottom-0 bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between items-center">
                  <div>
                    <p className="font-bold">{post.title}</p>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                    {post.categories.map(category => (
                      <div className="bg-[#8b1c3a] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex-1">
                <p className="underline text-lg font-bold">{post.title}</p>
                <p className=" line-clamp-2 text-gray-500">
                  {post.categories.map(category => category.description)}
                </p>
              </div>
              <p className="flex items-center mt-5 group-hover:underline">
                Read Post
                <ArrowUpRightIcon className="h-5 w-5 ml-2 text-[#8b1c3a]" />
              </p>
            </div>
          </ClientSide>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
