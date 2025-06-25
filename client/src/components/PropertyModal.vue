<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
      <div class="flex justify-between items-center p-6 border-b">
        <h2 class="text-2xl font-bold text-gray-900">{{ property.title }}</h2>
        <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        <!-- Property Details -->
        <div class="lg:col-span-2">
          <!-- Image Gallery -->
          <div class="mb-6">
            <img 
              :src="property.images[0]" 
              :alt="property.title"
              class="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div class="grid grid-cols-2 gap-2">
              <img 
                v-for="(image, index) in property.images.slice(1)" 
                :key="index"
                :src="image" 
                :alt="`${property.title} ${index + 2}`"
                class="w-full h-32 object-cover rounded-lg"
              />
            </div>
          </div>
          
          <!-- Price and Basic Info -->
          <div class="mb-6">
            <div class="flex items-center justify-between mb-4">
              <span class="text-3xl font-bold text-primary-600">${{ formatPrice(property.price) }}</span>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold">
                {{ property.propertyType }}
              </span>
            </div>
            
            <div class="grid grid-cols-4 gap-4 text-center">
              <div class="bg-gray-50 p-3 rounded-lg">
                <div class="text-2xl font-bold text-gray-900">{{ property.bedrooms }}</div>
                <div class="text-sm text-gray-600">Bedrooms</div>
              </div>
              <div class="bg-gray-50 p-3 rounded-lg">
                <div class="text-2xl font-bold text-gray-900">{{ property.bathrooms }}</div>
                <div class="text-sm text-gray-600">Bathrooms</div>
              </div>
              <div class="bg-gray-50 p-3 rounded-lg">
                <div class="text-2xl font-bold text-gray-900">{{ property.area }}</div>
                <div class="text-sm text-gray-600">Sq Ft</div>
              </div>
              <div class="bg-gray-50 p-3 rounded-lg">
                <div class="text-2xl font-bold text-gray-900">{{ property.yearBuilt }}</div>
                <div class="text-sm text-gray-600">Year Built</div>
              </div>
            </div>
          </div>
          
          <!-- Description -->
          <div class="mb-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3">Description</h3>
            <p class="text-gray-700 leading-relaxed">{{ property.description }}</p>
          </div>
          
          <!-- Features -->
          <div class="mb-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3">Features</h3>
            <div class="grid grid-cols-2 gap-2">
              <div v-for="feature in property.features" :key="feature" class="flex items-center gap-2">
                <svg class="w-4 h-4 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">{{ feature }}</span>
              </div>
            </div>
          </div>
          
          <!-- Location -->
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Location</h3>
            <p class="text-gray-700">{{ property.address }}</p>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="lg:col-span-1">
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Contact Agent</h3>
            
            <!-- Agent Info -->
            <div class="flex items-center gap-3 mb-6">
              <img 
                :src="property.agent.photo" 
                :alt="property.agent.name"
                class="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div class="font-semibold text-gray-900">{{ property.agent.name }}</div>
                <div class="text-sm text-gray-600">{{ property.agent.phone }}</div>
              </div>
            </div>
            
            <!-- Contact Form -->
            <form @submit.prevent="submitForm" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  v-model="form.message"
                  rows="4"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                class="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
            
            <div class="mt-4 pt-4 border-t">
              <div class="text-sm text-gray-600">
                <div class="flex items-center gap-2 mb-2">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  {{ property.agent.email }}
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  {{ property.agent.phone }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { Property } from '../types/Property';

interface Props {
  property: Property;
}

const props = defineProps<Props>();
defineEmits<{
  'close': [];
}>();

const form = reactive({
  name: '',
  email: '',
  message: `Hi, I'm interested in ${props.property.title}. Could you please provide more information?`
});

const formatPrice = (price: number): string => {
  return price.toLocaleString();
};

const submitForm = () => {
  // In a real app, this would send the form data to a server
  alert('Thank you for your interest! Your message has been sent to the agent.');
  
  // Reset form
  form.name = '';
  form.email = '';
  form.message = `Hi, I'm interested in ${props.property.title}. Could you please provide more information?`;
};
</script>