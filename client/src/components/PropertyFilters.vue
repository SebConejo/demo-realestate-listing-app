<template>
  <div class="bg-white rounded-lg shadow-md p-6 mb-6">
    <h2 class="text-xl font-bold text-gray-900 mb-4">Filter Properties</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
      <!-- Search -->
      <div class="lg:col-span-2">
        <label class="block text-sm font-medium text-gray-700 mb-2">Search</label>
        <input
          v-model="localFilters.search"
          type="text"
          placeholder="Search properties..."
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      
      <!-- City -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">City</label>
        <select
          v-model="localFilters.city"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="">All Cities</option>
          <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
        </select>
      </div>
      
      <!-- Bedrooms -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
        <select
          v-model="localFilters.bedrooms"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option :value="null">Any</option>
          <option :value="1">1+</option>
          <option :value="2">2+</option>
          <option :value="3">3+</option>
          <option :value="4">4+</option>
        </select>
      </div>
      
      <!-- Min Price -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Min Price</label>
        <input
          v-model.number="localFilters.minPrice"
          type="number"
          placeholder="Min"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      
      <!-- Max Price -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Max Price</label>
        <input
          v-model.number="localFilters.maxPrice"
          type="number"
          placeholder="Max"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
    </div>
    
    <div class="mt-4 flex gap-2">
      <button
        @click="clearFilters"
        class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
      >
        Clear Filters
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';
import type { PropertyFilters } from '../types/Property';

interface Props {
  filters: PropertyFilters;
  cities: string[];
}

const props = defineProps<Props>();
const emit = defineEmits<{
  'update-filters': [filters: PropertyFilters];
}>();

const localFilters = reactive<PropertyFilters>({
  minPrice: props.filters.minPrice,
  maxPrice: props.filters.maxPrice,
  city: props.filters.city,
  bedrooms: props.filters.bedrooms,
  search: props.filters.search
});

watch(localFilters, () => {
  emit('update-filters', { ...localFilters });
}, { deep: true });

const clearFilters = () => {
  localFilters.minPrice = null;
  localFilters.maxPrice = null;
  localFilters.city = '';
  localFilters.bedrooms = null;
  localFilters.search = '';
};
</script>