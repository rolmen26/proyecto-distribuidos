import { type GameInfo, type Filters } from './GameInfo'

export interface BaseResponse {
  count: number
  next: string
  previous: any
  results: GameInfo[]
  seo_title: string
  seo_description: string
  seo_keywords: string
  seo_h1: string
  noindex: boolean
  nofollow: boolean
  description: string
  filters: Filters
  nofollow_collections: string[]
}
