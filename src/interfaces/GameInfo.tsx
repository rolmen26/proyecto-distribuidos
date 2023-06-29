export interface GameInfo {
    readonly id: number
    readonly slug: string
    readonly name: string
    readonly released: string
    readonly tba: boolean
    readonly background_image: string
    readonly rating: number
    readonly rating_top: number
    readonly ratings: Rating[]
    readonly ratings_count: number
    readonly reviews_text_count: number
    readonly added: number
    readonly added_by_status: AddedByStatus
    readonly metacritic: number
    readonly playtime: number
    readonly suggestions_count: number
    readonly updated: string
    readonly user_game: any
    readonly reviews_count: number
    readonly saturated_color: string
    readonly dominant_color: string
    readonly platforms: Platform[]
    readonly parent_platforms: ParentPlatform[]
    readonly genres: Genre[]
    readonly stores: Store[]
    readonly clip: any
    readonly tags: Tag[]
    readonly esrb_rating: EsrbRating
    readonly short_screenshots: ShortScreenshot[]
  }
  
  export interface Rating {
    readonly id: number
    readonly title: string
    readonly count: number
    readonly percent: number
  }
  
  export interface AddedByStatus {
    readonly yet: number
    readonly owned: number
    readonly beaten: number
    readonly toplay: number
    readonly dropped: number
    readonly playing: number
  }
  
  export interface Platform {
    platform: Platform2
    released_at: string
    requirements_en?: RequirementsEn
    requirements_ru: any
  }
  
  export interface Platform2 {
    id: number
    name: string
    slug: string
    image: any
    year_end: any
    year_start?: number
    games_count: number
    image_background: string
  }
  
  export interface RequirementsEn {
    minimum: string
    recommended: string
  }
  
  export interface ParentPlatform {
    platform: Platform3
  }
  
  export interface Platform3 {
    id: number
    name: string
    slug: string
  }
  
  export interface Genre {
    id: number
    name: string
    slug: string
    games_count: number
    image_background: string
  }
  
  export interface Store {
    id: number
    store: Store2
  }
  
  export interface Store2 {
    id: number
    name: string
    slug: string
    domain: string
    games_count: number
    image_background: string
  }
  
  export interface Tag {
    id: number
    name: string
    slug: string
    language: string
    games_count: number
    image_background: string
  }
  
  export interface EsrbRating {
    id: number
    name: string
    slug: string
  }
  
  export interface ShortScreenshot {
    id: number
    image: string
  }
  

  export interface Filters {
    years: Year[]
  }
  
  export interface Year {
    from: number
    to: number
    filter: string
    decade: number
    years: Year2[]
    nofollow: boolean
    count: number
  }
  
  export interface Year2 {
    year: number
    count: number
    nofollow: boolean
  }