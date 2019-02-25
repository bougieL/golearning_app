import http from './_axios'

export async function getAllContainer(): Promise<any> {
  return await http({
    method: 'get',
    url: '/docker/container/all'
  })
}