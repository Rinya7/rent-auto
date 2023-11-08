export const selectAutos = (state) => state.autos.autos;
export const selectFilter = (state) => state.filters;
export const selectIsLoading = (state) => state.autos.isLoading;
export const selectError = (state) => state.autos.error;

export const selectVisibleAutos = ({ autos: { autos }, filters }) => {
  if (!filters) {
    return autos;
  }

  return autos.filter((auto) => auto.name.includes(filters));
};
