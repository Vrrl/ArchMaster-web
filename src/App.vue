<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/explore">Explore</RouterLink>
        <RouterLink to="/new-challenge">New Challenge</RouterLink>
      </nav>
    </div>
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
  max-width: 1200px;
}
</style>
