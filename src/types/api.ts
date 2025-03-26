// 登录请求参数类型
export interface LoginRequest {
  phone: string
  password: string
}

// 登录响应数据类型
export interface LoginResponse {
  code: number
  message: string
  token: string
  userId: number
}

// 用户信息类型
export interface UserInfo {
  userId: number
  username: string
  email: string
  createTime: string
}
