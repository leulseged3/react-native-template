import { Models } from '@rematch/core';
import { Blog } from './blogs'
import { Language } from './language'
export interface RootModel extends Models<RootModel> {
  Blog: typeof Blog;
  Language: typeof Language
}

export const models: RootModel = {
  Blog,
  Language
};
