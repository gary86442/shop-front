import axios from 'axios'
import { ref } from 'vue'
export default function useFetchCard() {
  const data = ref([])
  const errorMessage = ref('')
  const fetchInit = async url => {
    try {
      const res = await axios.get(url)
      data.value = res.data.data
    } catch (err) {
      errorMassage.value = 'api 發生錯誤'
    }
  }
  return { data, fetchInit, errorMessage }
}
