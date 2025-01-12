export interface PageConfig {
  id: string;
  title?: string;
  heading?: string;
  categories?: {
    [key: string]: string[];
  };
  props: [];
}

export interface LabProps {
  id: string;
  title: string;
  props: {
    iconUrl: string;
    iconText: string;
  }[];
}

export interface BannerCard {
  bannerUrl: string;
}

export interface BannerProps {
  id: string;
  title: string;
  props: BannerCard[];
}

export type PageConfigResponse = {
  page_config: PageConfig;
};

export interface ActiveBooking {
  id: number;
  avatar: string;
  name: string;
  status: string;
  date: string;
  day: string;
  time: string;
  service: string;
  noOfTest: string;
}

export interface bookPopularLabTestType {
  id: number;
  name: string;
  cashless: boolean;
  discount: string;
  finalPrice: number;
  price: number;
  reports: string;
  isHome: boolean;
  isLab: boolean;
  subCategories: string[];
}

export interface clinicLocationDetailsType {
  id: number;
  clinicImg: string;
  clinicName: string;
  location: string;
  nextSlot: string;
}
