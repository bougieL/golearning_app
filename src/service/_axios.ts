import axios from 'axios';

const baseUrl = 'http://localhost:8001/api'

interface IParam {
  data?: any,
  method: string,
  params?: object,
  url: string,
}

export interface IBase {
  code: number,
  data: any,
  message: string
}

export default async function http(param: IParam) {
  param.url = baseUrl + param.url
  const {data: {code, data, message }} = await axios(param)
  if (code !== 200) {
    // console.error(data)
    alert(message)
    return
  }
  return data
}