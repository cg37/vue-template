<template>
    <div class="not-found-page">
        <h1>404</h1>
        <p>页面不存在</p>
        <RouterLink to="/home" class="back-link">返回首页</RouterLink>
    </div>
</template>

<script setup lang="ts">
// 404 页面
</script>

<style scoped>
.not-found-page {
    padding: 4rem 2rem;
    text-align: center;
}

h1 {
    font-size: 4rem;
    color: #646cff;
    margin-bottom: 0.5rem;
}

p {
    color: #888;
    font-size: 1.1rem;
    margin-bottom: 2rem;
}

.back-link {
    color: #646cff;
    text-decoration: underline;
}
</style>
