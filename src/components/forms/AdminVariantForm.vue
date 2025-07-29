<script setup lang="ts">
import { reactive } from 'vue'
import { api } from '../../api/api'

const props = defineProps<{
  onToggleModal: () => void
}>();

const variant = reactive({
  title: '',
  file: null as File | null,
})

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files?.length) {
    variant.file = target.files[0]
    console.log('Файл выбран: ', variant.file)
  }
}

const submit = async () => {
  if (!variant.title.trim() || !variant.file) {
    alert('Заполните все поля')
    return
  }

  const formData = new FormData()
  formData.append('title', variant.title)
  formData.append('file', variant.file)
  formData.append('type', 'variant')

  try {
    await api.post('/api/v1/admin/variants', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    alert('Файл загружен успешно')

    variant.title = ''
    variant.file = null
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
                v-model="variant.title"
                placeholder="Название"
                aria-label="Название варианта"
                />
            </CInputGroup>

            <CFormInput type="file" @change="handleFileChange" />
            <p v-if="variant.file">Выбран файл: {{ variant.file.name }}</p>

            <CButton type="submit" color="primary">Загрузить</CButton>
        </div>
    </form>
</template>
