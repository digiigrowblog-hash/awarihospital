export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  avatarUrl: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  imageUrl: string;
  title: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  imageUrl: string;
  experience: string;
}

