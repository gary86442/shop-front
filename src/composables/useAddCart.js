import axios from 'axios'
import { ref } from 'vue'
export default function useFetchCard() {
  const newCart = ref([])
  const message = ref('')
  const addCart = async url => {
    try {
      const res = await axios.post(url, body)
      if (res.data.status === 'success') {
        newCart.value = res.data.data
      }
    } catch (err) {
      errorMassage.value = 'api 發生錯誤'
    }
  }
  return { newCart, addCart, message }
}
