import axios from 'axios'
import { ref } from 'vue'
export default function useAddCart() {
  const newCart = ref({})
  const message = ref('')
  const addCart = async (url, body, token) => {
    try {
      console.log(token)
      const res = await axios.post(url, body, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (res.data.status === 'success') {
        newCart.value = res.data.data
        window.alert('商品已成功加入購物車！')
      }
    } catch (err) {
      message.value = 'api 發生錯誤'
    }
  }
  return { newCart, addCart, message }
}
