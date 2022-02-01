import { ShopActionTypes } from './shop.types';

export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UDPDATE_COLLECTIONS,
  payload: collectionsMap,
});
