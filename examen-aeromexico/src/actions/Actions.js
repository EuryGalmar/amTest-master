import axios from "axios";

export const loadData = () => async (dispatch) => {
    dispatch({
      type: "LOADING",
    });
  
    try {
      const response = await axios.get("");
  
      dispatch({
        type: "LOAD_DATA",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: "Algo salió mal",
      });
    }
  };
  