<template>
  <div class="account-container">
    <el-card class="account-card">
      <template #header>
        <div class="card-header">
          <h2>账号中心</h2>
        </div>
      </template>
      <div v-if="loading" class="loading-container">
        <el-skeleton :rows="4" animated />
      </div>
      <div v-else class="user-info">
        <div class="avatar-section">
          <el-avatar :size="100" :src="userInfo.avatar">
            <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
          </el-avatar>
          <el-button class="mt-2" type="primary" size="small">更换头像</el-button>
        </div>
        <div class="info-section">
          <el-descriptions :column="1" border>
            <el-descriptions-item label="用户名">
              {{ userInfo.username }}
            </el-descriptions-item>
            <el-descriptions-item label="手机号码">
              {{ userInfo.phone }}
            </el-descriptions-item>
            <el-descriptions-item label="邮箱地址">
              {{ userInfo.email }}
            </el-descriptions-item>
            <el-descriptions-item label="注册时间">
              {{ formatDate(userInfo.createTime) }}
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { getUserInfo } from '../api/user'

const loading = ref(true)
const userInfo = reactive({
  userId: 0,
  username: '',
  phone: '',
  email: '',
  createTime: '',
  avatar: ''
})

// 格式化日期
const formatDate = (dateStr: string) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString()
}

// 获取用户信息
const fetchUserInfo = async () => {
  try {
    loading.value = true
    const data = await getUserInfo()
    userInfo.userId = data.userId
    userInfo.username = data.username
    userInfo.email = data.email
    userInfo.createTime = data.createTime
    // 处理可能缺失的数据
    userInfo.phone = userInfo.phone || '未设置'
  } catch (error) {
    console.error('获取用户信息失败:', error)
    ElMessage.error('获取用户信息失败')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchUserInfo()
})
</script>

<style scoped>
.account-container {
  padding: 20px;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.account-card {
  max-width: 800px;
  margin: 0 auto;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header h2 {
  margin: 0;
  color: #409EFF;
}

.user-info {
  display: flex;
  gap: 40px;
  padding: 20px 0;
}

.avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.info-section {
  flex: 1;
}

.mt-2 {
  margin-top: 8px;
}

.loading-container {
  padding: 40px 20px;
}
</style>