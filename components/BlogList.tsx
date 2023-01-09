import { type } from 'os';
import React from 'react';
type Props = {
  posts: Post[];
};
function BlogList({ posts }: Props) {
  return <div>{posts.length}</div>;
}

export default BlogList;
