import { createSelector } from 'reselect'

const selectShop = state => state.collections

export const selectShopCollections = createSelector(
  [selectShop],
  collection => collection.collections
)