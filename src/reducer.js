import * as types from './action-types'

const initialState = {
  data: [],
  isFetching: false,
  isSuccess: true
}

const reducer = (state = initialState, action) => {
  let { type, payload } = action
  switch (type) {
    case types.FETCH_DATA:
      return {
        ...state,
        isFetching: true,
        data: []
      }
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: payload.data,
        isFetching: false,
        isSuccess: true
      }
    case types.FETCH_DATA_FAILED:
      return {
        ...state,
        isFetching: false,
        isSuccess: false
      }
    default:
      return state
  }
}
export default reducer
