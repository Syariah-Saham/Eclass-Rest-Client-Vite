export const formatRp = (number: number) => {
  return "Rp" + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
