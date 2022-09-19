const CART_SAVE_PAYMENT_METHOD = "CART_SAVE_PAYMENT_METHOD";
// SAVE PAYMENT METHOD
export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
      type: CART_SAVE_PAYMENT_METHOD,
      payload: data,
    });
  
    localStorage.setItem("paymentMethod", JSON.stringify(data));
  };
  