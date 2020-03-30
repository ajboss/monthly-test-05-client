import {ADD_ITEM} from './types';

export function AddItemAction(data) {  
    return({
      type:ADD_ITEM,
      payload: {
        id: data.id,
        ItemName: data.ItemName,
        CuisineName: data.CuisineName,
        VegEggNonVeg: data.VegEggNonVeg,
        ItemPrice: data.ItemPrice,
      }
    });
}