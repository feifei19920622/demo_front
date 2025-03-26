import request from './request'
import type { LoginRequest, LoginResponse } from '../types/api'

// 登录接口
export const login = (data: LoginRequest): Promise<LoginResponse> => {
  return request.post('/api/auth/login', data)
}