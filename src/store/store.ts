import { configureStore } from '@reduxjs/toolkit';
import { reducer as tenantsReducer } from './TenantSlice';

export const store = configureStore({
  reducer: {
    tenants: tenantsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
