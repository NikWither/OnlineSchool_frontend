<script setup lang="ts">
import { reactive } from 'vue'
import { api } from '../../api/api'

const props = defineProps<{
  onToggleModal: () => void
}>();

const book = reactive({
  title: '',
  file: null as File | null,
})

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files?.length) {
    book.file = target.files[0]
  }
}

const submit = async () => {
  if (!book.title.trim() || !book.file) {
    alert('Заполните все поля')
    return
  }

  const formData = new FormData()
  formData.append('title', book.title)
  formData.append('file', book.file)
  formData.append('type', 'book')

  try {
    await api.post('/api/v1/admin/books', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    alert('Файл загружен успешно')

    book.title = ''
    book.file = null
  } catch (err) {
    console.error('Ошибка при отправке:', err)
    alert('Ошибка при загрузке файла')
  }

  props.onToggleModal();
}

defineExpose({submit});


</script>

<template>
    <form @submit.prevent="submit">
        <div class="homework_element">
            <CInputGroup class="mb-3">
                <CFormInput
                v-model="book.title"
                placeholder="Название"
                aria-label="Название конспекта"
                />
            </CInputGroup>

            <CFormInput type="file" @change="handleFileChange" />
            <p v-if="book.file">Выбран файл: {{ book.file.name }}</p>

            <CButton type="submit" color="primary">Загрузить</CButton>
        </div>
    </form>
</template>
