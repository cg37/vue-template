<template>
  <nav class="nav-bar">
    <RouterLink to="/home" class="nav-link">主页</RouterLink>
    <RouterLink to="/about" class="nav-link">关于</RouterLink>
  </nav>
  <main class="main-content">
    <RouterView />
  </main>
</template>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
}

.nav-link {
  font-weight: 500;
  color: #646cff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.25s;
}

.nav-link:hover {
  background-color: #e0e0e0;
}

.nav-link.router-link-active {
  color: #fff;
  background-color: #646cff;
}

.main-content {
  padding: 1rem;
}
</style>
