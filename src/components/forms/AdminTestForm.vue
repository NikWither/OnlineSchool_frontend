<script setup lang="ts">
import { reactive } from 'vue'
import { api } from '../../api/api'

const props = defineProps<{
  onToggleModal: () => void
}>();

const test = reactive({
  title: '',
  file: null as File | null,
})

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files?.length) {
    test.file = target.files[0]
    console.log('Файл выбран: ', test.file)
  }
}

const submit = async () => {
  if (!test.title.trim() || !test.file) {
    alert('Заполните все поля')
    return
  }

  const formData = new FormData()
  formData.append('title', test.title)
  formData.append('file', test.file)
  formData.append('type', 'test')

  try {
    await api.post('/api/v1/admin/tests', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    alert('Файл загружен успешно')

    test.title = ''
    test.file = null
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
                v-model="test.title"
                placeholder="Название"
                aria-label="Название теста"
                />
            </CInputGroup>

            <CFormInput type="file" @change="handleFileChange" />
            <p v-if="test.file">Выбран файл: {{ test.file.name }}</p>

            <CButton type="submit" color="primary">Загрузить</CButton>
        </div>
    </form>
</template>
