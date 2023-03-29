import type { AxiosInstance } from "axios";
import axios from "axios";

export abstract class ApiClient{
  
  public readonly client: AxiosInstance
  public abstract baseRoute: string

  constructor(public readonly baseApi: string = 'http://localhost:3000/api/', ){

    this.client = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-type' : 'application/json'
      }
    })
  }

  public get baseUrl(): string{
    return this.baseApi + this.baseRoute
  }
  


}