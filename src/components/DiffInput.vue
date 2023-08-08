<script lang="ts" setup>
const props = defineProps<{
  isArray: boolean
}>()
const emits = defineEmits<{
  (e: 'submit', valL: any[], valR: any[]):void
}>()
const valL = ref()
const valR = ref()

const getDiff = () => {
  let l: any[]
  try {
    l = JSON.parse(valL.value)
  } catch (error) {
    if (props.isArray) {
      l = valL.value.trim().split(/[\n|\s]+/)
    } else {
      l = valL.value.trim().split('\n').map((item: string) => item.trim().split(/\s+/))
    }
  }
  
  let r: any[]
  try {
    r = JSON.parse(valR.value)
  } catch (error) {
    if (props.isArray) {
      r = valR.value.trim().split(/[\n|\s]+/)
    } else {
      r = valR.value.trim().split('\n').map((item: string) => item.trim().split(/\s+/))
    }
  }
  emits('submit', l, r)
}
</script>

<template>
  <div class="w-full grid gap-2 grid-cols-2">
    <n-input
      v-model:value="valL"
      type="textarea"
      placeholder="json字符串或其他"
    />
    <n-input
      v-model:value="valR"
      type="textarea"
      placeholder="json字符串或其他"
    />
  </div>
  <div class="flex mt-2 items-center">
    <n-button type="primary" :disabled="!valL || !valR" @click="getDiff">
      比较
    </n-button>
  </div>
</template>

<style lang="scss" scoped>
</style>
