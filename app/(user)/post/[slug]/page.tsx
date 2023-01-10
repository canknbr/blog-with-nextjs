import { groq } from 'next-sanity';
import Image from 'next/image';
import React from 'react';
import { client } from '../../../../utils/sanity.client';
import { urlFor } from '../../../../utils/urlFor';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '../../../../components/RichTextComponents';
type Props = {
  params: {
    slug: string;
  };
};
export const revalidate = 60;

async function Page({ params: { slug } }: Props) {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
        ...,
        author->,
        categories[]->,
    }
    `;
  const post = await client.fetch(query, { slug });

  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 border border-[#8B1C3A]  text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute w-full top-0 h-full opacity-10 blur-sm p-10">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              className="object-cover object-center mx-auto"
              fill
            />
          </div>
          <section className="p-5 w-full bg-[#8b1c3a]">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div className="">
                <h1 className="font-bold text-4xl">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  className="rounded-full"
                  height={40}
                  width={40}
                />
                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                </div>
              </div>
            </div>
            <div>
              <h2 className="italic pt-10">{post.description}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map(
                  (category: {
                    _id: React.Key | null | undefined;
                    title:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | React.ReactFragment
                      | React.ReactPortal
                      | null
                      | undefined;
                  }) => (
                    <p
                      key={category._id}
                      className="bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold mt-4"
                    >
                      {category.title}
                    </p>
                  )
                )}
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="mt-10 leading-6">
        <PortableText value={post.body} />
      </section>
    </article>
  );
}

export default Page;
