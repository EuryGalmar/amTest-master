

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: "",
  };
  
export const FavoritosReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          data:  [...state.data, action.payload]
        };
  
      case "LOADING":
        return { ...state, loading: true };
      case "ERROR":
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };


  
