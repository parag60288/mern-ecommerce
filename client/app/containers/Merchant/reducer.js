/*
 *
 * Merchant reducer
 *
 */

import {
  FETCH_MERCHANTS,
  SELL_FORM_CHANGE,
  SET_SELL_FORM_ERRORS,
  SELL_FORM_RESET
} from './constants';

const initialState = {
  merchants: [],
  sellFormData: {
    name: '',
    email: '',
    phoneNumber: '',
    brand: '',
    business: ''
  },
  formErrors: {},
  columns: [
    {
      hidden: true,
      dataField: '_id',
      text: ''
    },
    {
      dataField: 'name',
      text: 'Name'
    },
    {
      dataField: 'phoneNumber',
      text: 'Phone Number'
    },
    {
      dataField: 'status',
      text: 'Status'
    },
    {
      dataField: 'brand',
      text: 'Brand'
    },
    {
      dataField: 'business',
      text: 'Business Description'
    }
  ]
};

const merchantReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MERCHANTS:
      return {
        ...state,
        merchants: action.payload
      };
    case SELL_FORM_CHANGE:
      return {
        ...state,
        sellFormData: { ...state.sellFormData, ...action.payload }
      };
    case SET_SELL_FORM_ERRORS:
      return {
        ...state,
        formErrors: action.payload
      };
    case SELL_FORM_RESET:
      return {
        ...state,
        sellFormData: {
          name: '',
          email: '',
          phoneNumber: '',
          brand: '',
          business: ''
        },
        formErrors: {}
      };
    default:
      return state;
  }
};

export default merchantReducer;
