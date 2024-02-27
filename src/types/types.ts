import CourtItem from "@/shared/components/CourtItem.astro";

export interface CourtItem {
  title: string;
  description: string;
  url: string;
  images: Photo[];
}

export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
  imgAlt?: string;
  id?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Route {
  label: string;
  href: string;
}

export interface Court {
  id: string;
  name: string;
  description: string;
  images: Photo[];
  features: Feature[];
  title: string;
  subtitle: string;
  littleDescription: string;
  route?: Route;
}