<template>
  <div class="container">
    <!-- Show loading state -->
    <div v-if="isLoading">
      <div class="card flex justify-center">
        <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent" animationDuration=".5s"
          aria-label="Custom ProgressSpinner" />
      </div>
    </div>

    <!-- Show error state (if any) -->
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

    <!-- Show records once loaded -->
    <div v-if="!isLoading && records && records.length">
      <ul class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <li v-for="(item, index) in paginatedRecords" :key="index">
          <Card style="width: 25rem; overflow: hidden" class="shadow">
            <template #header>
              <router-link :to="`/product/${item.id}`">
                <img alt="user header" :src="item.image" class="aspect-square object-fill w-[100%]" />
              </router-link>
            </template>
            <template #title>
              <h2 class="truncate text-primary">{{ item.title }}</h2>
            </template>
            <template #subtitle>{{ item.price }}</template>
            <template #content>
              <p class="m-0 truncate">
                {{ item.description }}
              </p>
            </template>
            <template #footer>
              <div class="flex gap-4 mt-1">
                <Button label="Cancel" severity="secondary" outlined class="w-full" />
                <Button label="Save" class="w-full" />
              </div>
            </template>
          </Card>
        </li>
      </ul>

      <!-- Paginator -->
      <Paginator :rows="rowsPerPage" :totalRecords="records.length" :rowsPerPageOptions="[10, 20, 30]"
        v-model:page="currentPage" v-model:rows="rowsPerPage" @page-change="onPageChange" />
    </div>

    <!-- Show empty state if no records are available -->
    <div v-if="!isLoading && (!records || records.length === 0)">
      No records found.
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import Card from 'primevue/card';
import Paginator from 'primevue/paginator';
import ProgressSpinner from 'primevue/progressspinner';
import { useSettingsStore } from '@/stores/Settings/setting.store';

// Access Pinia store
const settingsStore = useSettingsStore();

// Reactively track loading and error state
const isLoading = computed(() => settingsStore.uiFlags.isLoading);
const errorMessage = ref(null);
const records = computed(() => settingsStore.records);

// Pagination state
const currentPage = ref(1); // Start at page 1
const rowsPerPage = ref(10); // Set default rows per page

// Computed property for paginated records
const paginatedRecords = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage.value;
  const end = start + rowsPerPage.value;
  return records.value.slice(start, end);
});

// Fetch settings when the component is mounted
onMounted(async () => {
  try {
    await settingsStore.get(); // Fetch the settings from the API
  } catch (error) {
    errorMessage.value = 'Failed to load settings. Please try again later.';
  }
});

// Watch for changes in currentPage and rowsPerPage
watch([currentPage, rowsPerPage], () => {
  console.log('Updated pagination:', currentPage.value, rowsPerPage.value);
});
</script>

<style scoped>
.container {
  padding: 20px;
}

.error-message {
  color: red;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin: 10px 0;
}
</style>
