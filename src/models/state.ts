import { user } from 'md/user'

export type State = {
  user: user | null,
  paginatorHp: number,
  nextBtn: boolean,
  previousBtn: boolean,
  
}