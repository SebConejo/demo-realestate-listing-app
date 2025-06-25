export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  city: string;
  address: string;
  images: string[];
  propertyType: string;
  yearBuilt: number;
  features: string[];
  agent: {
    name: string;
    email: string;
    phone: string;
    photo: string;
  };
}

export interface PropertyFilters {
  minPrice: number | null;
  maxPrice: number | null;
  city: string;
  bedrooms: number | null;
  search: string;
}