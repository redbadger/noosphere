declare module '*.mdx' {
  const MDXComponent: (props: any) => JSX.Element[];
  export const notes: (props: any) => JSX.Element[];
  export default MDXComponent;
}
