import http from './_axios'
import {IUser} from '@/interface'

export async function getAllUser(): Promise<IUser[]> {
  return await http({
    method: 'get',
    url: '/user/all'
  })
}