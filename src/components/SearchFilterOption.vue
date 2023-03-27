<template>
  <div class="search-filter">
    
  </div>
</template>


<script setup lang="ts">
  defineProps<{
    msg: string
  }>()
</script>

<style scoped lang="scss">
.search-filter{
  width: 300px;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
</style>
