import { ref, readonly } from 'vue'

export function useSetData(val) {
  const data = ref(val)
  const setData = (val) => {
    data.value = val
  }
  return { data: readonly(data), setData }
}
