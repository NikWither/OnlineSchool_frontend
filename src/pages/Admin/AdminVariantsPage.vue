<script setup lang="ts">
import VariantsList from '../../components/admin/lists/VariantsList.vue';
import { api } from '../../api/api';
import { onMounted, ref } from 'vue';
import ModalWin from '../../ui/ModalWin.vue';
import AdminVariantForm from '../../components/forms/AdminVariantForm.vue';

const variants = ref([]);

const indexVariant = async () => {
  try {
    const response = await api.get(`/api/v1/admin/variants`);
    variants.value = response.data;
    console.log("variants", variants.value);
  } catch(err) {
    console.error(err);
  }
}

onMounted(() => {
  indexVariant();
});
</script>

<template>
  <div class="variants">
    <ModalWin 
      modal-title="Добавление варианта"
      modal-btn="Добавить вариант"
      :form="AdminVariantForm"
    />

    <VariantsList :variants="variants" />
  </div>
</template>
