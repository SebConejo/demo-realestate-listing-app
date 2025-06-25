<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div class="relative">
      <img 
        :src="property.images[0]" 
        :alt="property.title"
        class="w-full h-48 object-cover"
      />
      <div class="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
        {{ property.propertyType }}
      </div>
    </div>
    
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-900 mb-2">{{ property.title }}</h3>
      <p class="text-gray-600 mb-3 line-clamp-2">{{ property.description }}</p>
      
      <div class="flex items-center justify-between mb-4">
        <span class="text-2xl font-bold text-primary-600">${{ formatPrice(property.price) }}</span>
        <span class="text-sm text-gray-500">{{ property.city }}</span>
      </div>
      
      <div class="flex items-center gap-4 mb-4 text-sm text-gray-600">
        <div class="flex items-center gap-1">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 3.5a1.5 1.5 0 00-3 0V4a1 1 0 00-1 1v4a1 1 0 001 1h1.5a1.5 1.5 0 003 0V5a1 1 0 00-1-1V3.5z"/>
          </svg>
          {{ property.bedrooms }} bed
        </div>
        <div class="flex items-center gap-1">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
          </svg>
          {{ property.bathrooms }} bath
        </div>
        <div class="flex items-center gap-1">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
          </svg>
          {{ property.area }} sqft
        </div>
      </div>
      
      <button 
        @click="$emit('view-details', property)"
        class="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
      >
        View Details
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Property } from '../types/Property';

interface Props {
  property: Property;
}

defineProps<Props>();
defineEmits<{
  'view-details': [property: Property];
}>();

const formatPrice = (price: number): string => {
  return price.toLocaleString();
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>