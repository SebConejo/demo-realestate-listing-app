<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex items-center justify-between">
          <h1 class="text-3xl font-bold text-gray-900">Premium Real Estate</h1>
          <div class="flex items-center gap-4">
            <span class="text-sm text-gray-600">{{ filteredProperties.length }} properties found</span>
          </div>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Filters -->
      <PropertyFilters 
        :filters="filters"
        :cities="cities"
        @update-filters="updateFilters"
      />

      <!-- Properties Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PropertyCard
          v-for="property in filteredProperties"
          :key="property.id"
          :property="property"
          @view-details="openModal"
        />
      </div>

      <!-- No Results -->
      <div v-if="filteredProperties.length === 0" class="text-center py-12">
        <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No properties found</h3>
        <p class="text-gray-600">Try adjusting your search criteria to see more results.</p>
      </div>
    </main>

    <!-- Modal -->
    <PropertyModal
      v-if="selectedProperty"
      :property="selectedProperty"
      @close="selectedProperty = null"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import PropertyCard from './components/PropertyCard.vue';
import PropertyFilters from './components/PropertyFilters.vue';
import PropertyModal from './components/PropertyModal.vue';
import { properties } from './data/properties';
import type { Property as PropertyType, PropertyFilters as PropertyFiltersType } from './types/Property';

const selectedProperty = ref<PropertyType | null>(null);

const filters = ref<PropertyFiltersType>({
  minPrice: null,
  maxPrice: null,
  city: '',
  bedrooms: null,
  search: ''
});

const cities = computed(() => {
  const uniqueCities = [...new Set(properties.map(p => p.city))];
  return uniqueCities.sort();
});

const filteredProperties = computed(() => {
  return properties.filter(property => {
    // Search filter
    if (filters.value.search) {
      const searchTerm = filters.value.search.toLowerCase();
      const matchesSearch = 
        property.title.toLowerCase().includes(searchTerm) ||
        property.description.toLowerCase().includes(searchTerm) ||
        property.city.toLowerCase().includes(searchTerm) ||
        property.address.toLowerCase().includes(searchTerm);
      
      if (!matchesSearch) return false;
    }

    // Price filters
    if (filters.value.minPrice && property.price < filters.value.minPrice) {
      return false;
    }
    if (filters.value.maxPrice && property.price > filters.value.maxPrice) {
      return false;
    }

    // City filter
    if (filters.value.city && property.city !== filters.value.city) {
      return false;
    }

    // Bedrooms filter
    if (filters.value.bedrooms && property.bedrooms < filters.value.bedrooms) {
      return false;
    }

    return true;
  });
});

const updateFilters = (newFilters: PropertyFiltersType) => {
  filters.value = { ...newFilters };
};

const openModal = (property: PropertyType) => {
  selectedProperty.value = property;
};
</script>