<script setup lang="ts">
import { reactive } from 'vue'
import { api } from '../../api/api'

const props = defineProps<{
  onToggleModal: () => void
}>();

const task = reactive({
  title: '',
  file: null as File | null,
})

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files?.length) {
    task.file = target.files[0]
  }
}

const submit = async () => {
  if (!task.title.trim() || !task.file) {
    alert('Заполните все поля')
    return
  }

  const formData = new FormData()
  formData.append('title', task.title)
  formData.append('file', task.file)
  formData.append('type', 'task')

  try {
    await api.post('/api/v1/admin/tasks', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    alert('Файл загружен успешно')

    task.title = ''
    task.file = null
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
                v-model="task.title"
                placeholder="Название"
                aria-label="Название задания"
                />
            </CInputGroup>

            <CFormInput type="file" @change="handleFileChange" />
            <p v-if="task.file">Выбран файл: {{ task.file.name }}</p>

            <CButton type="submit" color="primary">Загрузить</CButton>
        </div>
    </form>
</template>
