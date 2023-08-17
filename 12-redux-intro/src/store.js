import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./features/accounts/accountSlice";
import accountSlice from "./features/customers/customerSlice";

const store = configureStore({
  reducer: { account: customerSlice, customer: accountSlice },
});

export default store;
