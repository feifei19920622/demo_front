import request from './request'
import type { UserInfo } from '../types/api'

// 获取用户信息接口
export const getUserInfo = (): Promise<UserInfo> => {
  return request.get('/api/user/info')
} 