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
  <div class="arr border rounded mt-2 grid p-2 gap-2 grid-cols-1 overflow-auto" v-if="valL && valR">
    <div v-for="(item, index) in valL" :key="index" class="border flex w-full py-4 relative items-center justify-center flex-col">
      <code class="bg-gray-100 top-0 left-0 index absolute">{{ index }}</code>
      <code class="val flex text-center w-full items-center justify-center whitespace-nowrap" :class="{'text-red-500': !isSame(item, valR[index])}">{{ item }}</code>
      <code class="val flex text-center w-full items-center justify-center whitespace-nowrap" :class="{'text-red-500': !isSame(item, valR[index])}">{{ valR?.[index] }}</code>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.arr {
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));;
}
code.val {
  display: block;
  width: 100%;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
