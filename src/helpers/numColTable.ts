export const numColTable = (perPage: number, current: number, i: number) => {
  return (current - 1) * perPage + i + 1;
};
