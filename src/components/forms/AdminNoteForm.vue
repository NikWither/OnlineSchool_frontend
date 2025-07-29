<script setup lang="ts">
import { reactive } from 'vue'
import { api } from '../../api/api'

const props = defineProps<{
  onToggleModal: () => void
}>();

const note = reactive({
  title: '',
  file: null as File | null,
})

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files?.length) {
    note.file = target.files[0]
  }
}

const submit = async () => {
  if (!note.title.trim() || !note.file) {
    alert('Заполните все поля')
    return
  }

  const formData = new FormData()
  formData.append('title', note.title)
  formData.append('file', note.file)
  formData.append('type', 'note')

  try {
    await api.post('/api/v1/admin/notes', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    alert('Файл загружен успешно')

    note.title = ''
    note.file = null
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
                v-model="note.title"
                placeholder="Название"
                aria-label="Название конспекта"
                />
            </CInputGroup>

            <CFormInput type="file" @change="handleFileChange" />
            <p v-if="note.file">Выбран файл: {{ note.file.name }}</p>

            <CButton type="submit" color="primary">Загрузить</CButton>
        </div>
    </form>
</template>
