export const selectAutos = (state) => state.autos.autos;
export const selectFilter = (state) => state.filters;

export const selectVisibleContacts = ({ autos: { autos }, filters }) => {
  if (!filters) {
    return autos;
  }

  return autos.filter((auto) => auto.name.includes(filters));
};
