import axios, { type AxiosInstance } from 'axios'
import type { components } from './generated/schema'
import { MeshokAPIError } from './errors'

type S = components['schemas']

interface BaseResponse {
  success: number
  account: number
  cost: number
  balance: number
  expire: number
  error?: string | null
  errorDetails?: { [key: string]: unknown } | null
}

const DEFAULT_BASE_URL = 'https://meshok.net/sAPIv2'
const DEFAULT_TIMEOUT = 15000

export interface MeshokAPIConfig {
  token: string
  baseURL?: string
  timeout?: number
}

export class MeshokAPI {
  private readonly http: AxiosInstance

  constructor(config: MeshokAPIConfig) {
    this.http = axios.create({
      baseURL: config.baseURL ?? DEFAULT_BASE_URL,
      timeout: config.timeout ?? DEFAULT_TIMEOUT,
      headers: {
        Authorization: `Bearer ${config.token}`,
        'Content-Type': 'application/json',
      },
    })
  }

  private async request<T extends BaseResponse>(path: string, params: object = {}): Promise<T> {
    const { data } = await this.http.post<T>(path, params)
    if (data.success < 0) {
      throw new MeshokAPIError(
        data.error ?? 'Unknown error',
        data.success,
        (data.errorDetails as Record<string, unknown> | null) ?? null,
        data.account,
        data.cost,
        data.balance,
        data.expire,
      )
    }
    return data
  }

  getAccountInfo(): Promise<S['GetAccountInfoResponse']> {
    return this.request('/getAccountInfo')
  }

  getCategoryInfo(params: S['GetCategoryInfoRequest']): Promise<S['GetCategoryInfoResponse']> {
    return this.request('/getCategoryInfo', params)
  }

  getCitiesList(params: S['GetCitiesListRequest']): Promise<S['GetCitiesListResponse']> {
    return this.request('/getCitiesList', params)
  }

  getCountryList(): Promise<S['GetCountryListResponse']> {
    return this.request('/getCountryList')
  }

  getCurencyList(): Promise<S['GetCurrencyListResponse']> {
    return this.request('/getCurencyList')
  }

  getSubCategory(params: S['GetSubCategoryRequest']): Promise<S['GetSubCategoryResponse']> {
    return this.request('/getSubCategory', params)
  }

  getItemList(): Promise<S['GetItemListResponse']> {
    return this.request('/getItemList')
  }

  getFinishedItemList(): Promise<S['GetFinishedItemListResponse']> {
    return this.request('/getFinishedItemList')
  }

  getSoldFinishedItemList(): Promise<S['GetSoldFinishedItemListResponse']> {
    return this.request('/getSoldFinishedItemList')
  }

  getUnsoldFinishedItemList(): Promise<S['GetUnsoldFinishedItemListResponse']> {
    return this.request('/getUnsoldFinishedItemList')
  }

  getItemInfo(params: S['GetItemInfoRequest']): Promise<S['GetItemInfoResponse']> {
    return this.request('/getItemInfo', params)
  }

  getCommonDescriptionList(): Promise<S['GetCommonDescriptionListResponse']> {
    return this.request('/getCommonDescriptionList')
  }

  listItem(params: S['ListItemRequest']): Promise<S['ListItemResponse']> {
    return this.request('/listItem', params)
  }

  updateItem(params: S['UpdateItemRequest']): Promise<S['UpdateItemResponse']> {
    return this.request('/updateItem', params)
  }

  deleteItem(params: S['DeleteItemRequest']): Promise<S['DeleteItemResponse']> {
    return this.request('/deleteItem', params)
  }

  relistItem(params: S['RelistItemRequest']): Promise<S['RelistItemResponse']> {
    return this.request('/relistItem', params)
  }

  stopSale(params: S['StopSaleRequest']): Promise<S['StopSaleResponse']> {
    return this.request('/stopSale', params)
  }
}
