import type { Store } from 'pinia'

export type AuthGettersAdaptor<GettersType, StoreType extends Store> = {
  [Key in keyof GettersType]: (
    this: StoreType,
    state: StoreType['$state']
  ) => GettersType[Key];
}

export interface AuthState {
  name: string
  isLoggedIn: boolean
}

export interface AuthGetters {
  message: string
}

export interface AuthActions {
  login: (name: string) => void
  logout: () => void
}

export type AuthStore = Store<'', AuthState, AuthGetters, AuthActions>
