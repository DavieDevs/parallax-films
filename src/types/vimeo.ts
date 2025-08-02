export type VimeoVideo = {
  uri: string;
  name: string;
  description: string;
  tags: { tag: string }[];
  pictures?: {
    sizes: { link: string }[];
  };
  files?: {
    link: string;
  }[];
};
