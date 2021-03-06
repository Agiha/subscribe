import axios, { AxiosRequestConfig } from 'axios'

const BASEURL = 'http://34.135.184.222:8899'
export async function getCalendarList(obj: any) {
  return await axios.get(`${BASEURL}/get-drop`, {
    params: obj,
  })
}
export async function getEmailStatus(obj: any) {
  return await axios.post(`${BASEURL}/mail/isBound`, obj)
}
export async function sendEmailCode(obj: any) {
  return await axios.post(`${BASEURL}/mail/setMailCode`, obj)
}
export async function verifyEmailCode(obj: any) {
  return await axios.post(
    `${BASEURL}/mail/verifyMailCode
  `,
    obj
  )
}
export async function getKeyWord(obj: any) {
  return await axios.get(`${BASEURL}/take/getHotspotAntistop`, {
    params: obj,
  })
}

export async function getNews(obj: any) {
  return await axios.get(`${BASEURL}/take/getHotspotAntistopNewS`, {
    params: obj,
  })
}

export async function subscribeByKeyword(obj: any) {
  return await axios.post(
    `${BASEURL}/take/subscribeByAntistop
      `,
    obj
  )
}
