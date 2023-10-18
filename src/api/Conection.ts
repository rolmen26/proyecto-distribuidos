import axios, { type AxiosInstance } from 'axios'

abstract class Conection {

  protected readonly baseClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL
  })

  protected clientInstance (): AxiosInstance {
    return this.baseClient
  }
}

export default Conection