// 登录请求参数类型
export interface LoginRequest {
  phone: string
  password: string
}

// 登录响应数据类型
export interface LoginResponse {
  code: number
  message: string
  data: {
    token: string
    userId: number
  }
}