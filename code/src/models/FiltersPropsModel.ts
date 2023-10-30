import { FilterStateModel } from "./FilterStateModel";

export default interface FiltersPropsModel {
  setFilters: (filters: Partial<FilterStateModel>) => void;
}
