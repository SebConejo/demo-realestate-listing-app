import type { Property } from '../types/Property'

export const properties: Property[] = [
  {
    id: 1,
    title: 'Modern Downtown Apartment',
    description:
      'Beautiful modern apartment in the heart of downtown with stunning city views. Features include hardwood floors, granite countertops, and stainless steel appliances.',
    price: 450000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    city: 'New York',
    address: '123 Main St, New York, NY 10001',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    propertyType: 'Apartment',
    yearBuilt: 2020,
    features: [
      'City View',
      'Hardwood Floors',
      'Granite Countertops',
      'Stainless Steel Appliances',
    ],
    agent: {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@realestate.com',
      phone: '(555) 123-4567',
      photo:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  },
  {
    id: 2,
    title: 'Spacious Family Home',
    description:
      'Perfect family home with large backyard, updated kitchen, and excellent school district. Move-in ready with recent renovations throughout.',
    price: 650000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2400,
    city: 'Los Angeles',
    address: '456 Oak Ave, Los Angeles, CA 90210',
    images: [
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    propertyType: 'House',
    yearBuilt: 2015,
    features: [
      'Large Backyard',
      'Updated Kitchen',
      'Excellent School District',
      'Recent Renovations',
    ],
    agent: {
      name: 'Michael Chen',
      email: 'michael.chen@realestate.com',
      phone: '(555) 234-5678',
      photo:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  },
  {
    id: 3,
    title: 'Luxury Penthouse Suite',
    description:
      'Stunning penthouse with panoramic city views, premium finishes, and private rooftop terrace. The epitome of luxury living.',
    price: 1200000,
    bedrooms: 3,
    bathrooms: 3,
    area: 1800,
    city: 'Miami',
    address: '789 Beach Blvd, Miami, FL 33139',
    images: [
      'https://images.pexels.com/photos/1396125/pexels-photo-1396125.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1454802/pexels-photo-1454802.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2029541/pexels-photo-2029541.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    propertyType: 'Penthouse',
    yearBuilt: 2022,
    features: [
      'Panoramic City Views',
      'Premium Finishes',
      'Private Rooftop Terrace',
      'Luxury Living',
    ],
    agent: {
      name: 'Emma Rodriguez',
      email: 'emma.rodriguez@realestate.com',
      phone: '(555) 345-6789',
      photo:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  },
  {
    id: 4,
    title: 'Cozy Studio Loft',
    description:
      'Charming studio loft in trendy neighborhood. Perfect for young professionals or investors. Great walkability score.',
    price: 320000,
    bedrooms: 1,
    bathrooms: 1,
    area: 800,
    city: 'Portland',
    address: '321 Industrial Way, Portland, OR 97201',
    images: [
      'https://images.pexels.com/photos/1396123/pexels-photo-1396123.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1454809/pexels-photo-1454809.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    propertyType: 'Loft',
    yearBuilt: 2018,
    features: [
      'Trendy Neighborhood',
      'Great Walkability',
      'Perfect for Professionals',
      'Investment Opportunity',
    ],
    agent: {
      name: 'David Thompson',
      email: 'david.thompson@realestate.com',
      phone: '(555) 456-7890',
      photo:
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  },
  {
    id: 5,
    title: 'Suburban Dream Home',
    description:
      'Beautiful suburban home with swimming pool, double garage, and mature landscaping. Perfect for families seeking comfort and space.',
    price: 520000,
    bedrooms: 3,
    bathrooms: 2,
    area: 2000,
    city: 'Austin',
    address: '654 Maple Dr, Austin, TX 78701',
    images: [
      'https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1475937/pexels-photo-1475937.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2121120/pexels-photo-2121120.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    propertyType: 'House',
    yearBuilt: 2017,
    features: [
      'Swimming Pool',
      'Double Garage',
      'Mature Landscaping',
      'Family Friendly',
    ],
    agent: {
      name: 'Lisa Park',
      email: 'lisa.park@realestate.com',
      phone: '(555) 567-8901',
      photo:
        'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  },
  {
    id: 6,
    title: 'Waterfront Condo',
    description:
      'Exclusive waterfront condominium with private beach access, marina views, and resort-style amenities. A rare opportunity.',
    price: 850000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    city: 'San Diego',
    address: '987 Harbor View, San Diego, CA 92101',
    images: [
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1454803/pexels-photo-1454803.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2029715/pexels-photo-2029715.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    propertyType: 'Condo',
    yearBuilt: 2019,
    features: [
      'Private Beach Access',
      'Marina Views',
      'Resort-Style Amenities',
      'Rare Opportunity',
    ],
    agent: {
      name: 'Robert Kim',
      email: 'robert.kim@realestate.com',
      phone: '(555) 678-9012',
      photo:
        'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  },
]
