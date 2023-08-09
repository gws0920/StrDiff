<script lang="ts" setup>
import DiffInput from '../../components/DiffInput.vue'

const valL = ref<any>()
const valR = ref<any>()
const diffCount = ref(0)
const submit = (l: any[][], r: any[][]) => {
  valL.value = l
  valR.value = r
  let count = 0
  l.forEach((row, i) => {
    row.forEach((item, j) => {
      if (!isSame(item, r?.[i]?.[j])) count++
    })
  })
  diffCount.value = count
}

const isSame = (valL: any, valR: any) => {
  if (typeof valL === 'object' || typeof valR === 'object') {
    return JSON.stringify(valL) === JSON.stringify(valR)
  }
  if (typeof valL === 'string' || typeof valR === 'string') {
    return `${valL}`.toLocaleLowerCase() === `${valR}`.toLocaleLowerCase()
  }
  
  return +valL === +valR
}
</script>

<template>
  <DiffInput :is-array="false" @submit="submit"/>
  <code v-if="valL && valR" class="mt-2 w-full flex items-center">存在{{ diffCount }}处差异</code>
  <div class="border rounded mt-2 grid p-2 gap-2 grid-cols-1 overflow-auto" v-if="valL && valR">
    <div class="grid gap-2" :style="{gridTemplateColumns: `repeat(${row.length}, 1fr)`}" v-for="(row, index) in valL" :key="index">
      <div v-for="(item, j) in row" :key="j" class="border flex w-full py-4 relative items-center justify-center min-w-100px">
        <code class="bg-gray-100 top-0 left-0 index absolute">{{ index }}, {{ j }}</code>
        <code class="flex text-center w-full max-w-80px val items-center justify-center whitespace-nowrap" :class="{'text-red-500': !isSame(item, valR?.[index]?.[j])}">{{ item }} / {{ valR?.[index]?.[j] }}</code>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
code.index {
  @apply px-2;
  font-size: 12px;
}
code.val {
  transform: translateY(4px);
}
</style>
