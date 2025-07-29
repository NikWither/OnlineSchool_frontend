<script setup lang="ts">

import PageTitle from '../../ui/PageTitle.vue';
import { onMounted } from 'vue';
import { useVariantsStore } from '../../stores/VariantsStore';
import VariantsList from '../../components/admin/lists/VariantsList.vue';

const variantStore = useVariantsStore();

onMounted(() => {
    variantStore.fetchVariants();
    console.log('variants', variantStore.variants);
});

</script>

<template>
    <div class="variants">
        <PageTitle title="Варианты"/>

        <div class="section">
            <div class="section__title">Сборник вариантов за последние годы</div>

            <p v-if="!variantStore.isLoading">
                <CSpinner/>
            </p>

            <div class="list" v-else>
                <VariantsList :variants="variantStore.variants" />
            </div>
        </div>
        
    </div>
</template>