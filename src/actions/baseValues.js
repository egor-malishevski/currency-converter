
import { SET_BASE_PRIMARY_TYPE, SET_BASE_SECONDARY_TYPE, SET_BASE_PRIMARY_VALUE, SET_BASE_SECONDARY_VALUE, SWAP_BASE_VALUES } from '@/constants'

export const setBasePrimaryType = (value) => ({
  type: SET_BASE_PRIMARY_TYPE,
  payload: value,
})

export const setBaseSecondaryType = (value) => ({
  type: SET_BASE_SECONDARY_TYPE,
  payload: value,
})

export const setBasePrimaryValue = (value) => ({
  type: SET_BASE_PRIMARY_VALUE,
  payload: value,
})

export const setBaseSecondaryValue = (value) => ({
  type: SET_BASE_SECONDARY_VALUE,
  payload: value,
})

export const swapBaseValues = () => ({
  type: SWAP_BASE_VALUES,
})