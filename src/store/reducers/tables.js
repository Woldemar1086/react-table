import { DELETE_ITEM } from '../types';
import { cloneDeep } from 'lodash';
import data from '../../data/data.json';
import names from '../../data/names.json';

const tablesState = {
  data: cloneDeep(data),
  names: cloneDeep(names)
};

const tableData = (state = {...tablesState}, action) => {
  switch (action.type) {
    case DELETE_ITEM:
      return {
        ...state,
        id: Number.isNaN(+action.payload) ? action.payload : Number(action.payload),
      };
    default:
      return state;
  }
};

export default tableData;
