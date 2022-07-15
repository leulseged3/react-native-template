import { createModel } from '@rematch/core';
import type { RootModel } from './index';

interface IBlogs {
  title: string;
  author: string;
  tags: string[];
}

export const Blog = createModel<RootModel>()({
  state: {
    blogs: {
      author: '',
      tags: [],
      title: ''
    } as IBlogs,
  },
  reducers: {
    setBlogs(state, payload: IBlogs) {
      return {
        ...state,
        blogs: {
          title: payload.title,
          author: payload.author,
          tags: payload.tags
        }
      }
    },
  },
});
