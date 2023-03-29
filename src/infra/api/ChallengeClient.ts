import type { Challenge } from '@/models/challenge'
import { ApiClient } from './ApiClient'

export class ChallengeClient extends ApiClient{

  // constructor(){
  //   super();
  // }
  public baseRoute: string = 'v1/challenges/'
  

  public async list(): Promise<Challenge[]>{
    const res = await this.client.get<Challenge[]>(this.baseUrl)
    console.log(res)
    return res.data
  }

}