import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '../../utils/sanity.client';
import PreviewSuspense from '../../components/PreviewSuspense';
import PreviewBlogList from '../../components/PreviewBlogList';
import BlogList from '../../components/BlogList';
const query = groq`
*[_type == "post"] {
  ...,
  author-> ,
  categories[]-> ,
} | order(_createdAt desc)
`;

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense fallback="Loading preview...">
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);

  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
}
