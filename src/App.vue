<script setup lang="ts">
import { h } from 'vue'
import { RouterLink } from 'vue-router'

const route = useRoute()
const active = computed(() => {
  return route.name
})
const menuOptions = [
  {
    label: () =>
      h(RouterLink, { to: { name: 'Array' } }, { default: () => '一维数组' }),
    key: 'Array'
  },
  {
    label: () =>
      h(RouterLink, { to: { name: 'Array2D' } }, { default: () => '二维数组' }),
    key: 'Array2D'
  }
]
</script>

<template>
  <div class="flex flex-col h-full w-full p-4">
    <div class="border-b">
      <n-menu :value="active" mode="horizontal" :options="menuOptions" />
    </div>
    <div class="flex flex-col flex-1 h-0 mt-2 overflow-hidden">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
#app {
  @apply h-full w-full;
}
</style>
