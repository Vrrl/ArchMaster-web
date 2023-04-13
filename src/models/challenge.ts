import type { User } from "./user"


export interface Challenge{
  id?: string
  title?: string
  description?: string
  tags?: string[]
  creatorId?: string
  verified?: string
  createdAt?: string
  deactivatedAt?: string
  disabledAt?: string
  editedAt?: string
  creator?: User
}