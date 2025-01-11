export interface PageConfig {
  id: string;
  title?: string;
  heading?: string;
  categories?: {
    "10386": string[];
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
