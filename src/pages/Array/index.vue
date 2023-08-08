<script lang="ts" setup>
import DiffInput from '../../components/DiffInput.vue'

const valL = ref<any>()
const valR = ref<any>()

const submit = (l: any[], r: any[]) => {
  valL.value = l
  valR.value = r
}

const isSame = (valL: any, valR: any) => {
  if (isNaN(valL) || isNaN(valR)) {
    return JSON.stringify(valL).toLocaleLowerCase() === JSON.stringify(valR).toLocaleLowerCase()
  }
  return +valL === +valR
}
</script>

<template>
  <DiffInput :is-array="true" @submit="submit"/>
  <n-grid x-gap="4" y-gap="4" cols="4 s:5 m:6 l:7 xl:8 2xl:9" responsive="screen" class="border rounded mt-2 p-2" v-if="valL && valR">
    <n-gi v-for="(item, index) in valL" :key="index" class="flex items-center">
      <code class="rounded bg-gray-100 mr-2 px-1">{{ index }}</code>
      <code :class="{'text-red-500': !isSame(item, valR[index])}">
        {{ item }} / {{ valR[index] }}
      </code>
    </n-gi>
   
  </n-grid>
</template>

<style lang="scss" scoped>

</style>
