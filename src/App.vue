<template>
  <header>

    <nav class="navbar">
      <RouterLink to="/explore">Explore</RouterLink>
      <RouterLink to="/new-challenge">New Challenge</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped lang="scss">
main{
  margin: auto;
  padding: 16px;
  max-width: 1500px;
}

.navbar{
  width: 100%;
  height: 50px;
  background-color: var(--menus-color);
  display: flex;
  justify-content: center;
  align-items: center;

  & *{
    margin: 4px 12px;
    padding: 4px;
  }

  

}
</style>
