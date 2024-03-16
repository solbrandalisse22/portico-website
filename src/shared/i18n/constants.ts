import { type CourtItem } from "@/types/types";

interface ILanguages {
  [key: string]: string
}

export const LANGUAGES = {
  EN: 'en',
  ES: 'es',
  FR: 'fr',
  IT: 'it',
  DEFAULT: 'en',
} as ILanguages

export const courtsGrid = (i18n: any) => {
  return [
    {
      title: i18n.PAGES.COURTS.MOBILE_COURT.TITLE,
      description: i18n.PAGES.COURTS.MOBILE_COURT.LITTLE_DESCRIPTION,
      url: i18n.PAGES.COURTS.MOBILE_COURT.ROUTE.URL,
      label: i18n.PAGES.COURTS.MOBILE_COURT.ROUTE.LABEL,
      image: {
        src: i18n.PAGES.COURTS.MOBILE_COURT.CONTACT_SECTION.IMAGE,
        alt: i18n.PAGES.COURTS.MOBILE_COURT.NAME,
      }
    },
    {
      title: i18n.PAGES.COURTS.PANORAMIC_FLOW_COURT.TITLE,
      description: i18n.PAGES.COURTS.PANORAMIC_FLOW_COURT.LITTLE_DESCRIPTION,
      url: i18n.PAGES.COURTS.PANORAMIC_FLOW_COURT.ROUTE.URL,
      label: i18n.PAGES.COURTS.PANORAMIC_FLOW_COURT.ROUTE.LABEL,
      image: {
        src: i18n.PAGES.COURTS.PANORAMIC_FLOW_COURT.CONTACT_SECTION.IMAGE,
        alt: i18n.PAGES.COURTS.PANORAMIC_FLOW_COURT.NAME,
      }
    },
    {
      title: i18n.PAGES.COURTS.PANORAMIC_COURT.TITLE,
      description: i18n.PAGES.COURTS.PANORAMIC_COURT.LITTLE_DESCRIPTION,
      url: i18n.PAGES.COURTS.PANORAMIC_COURT.ROUTE.URL,
      label: i18n.PAGES.COURTS.PANORAMIC_COURT.ROUTE.LABEL,
      image: {
        src: i18n.PAGES.COURTS.PANORAMIC_COURT.CONTACT_SECTION.IMAGE,
        alt: i18n.PAGES.COURTS.PANORAMIC_COURT.NAME,
      }
    },
    {
      title: i18n.PAGES.COURTS.CLUB_COURT.TITLE,
      description: i18n.PAGES.COURTS.CLUB_COURT.LITTLE_DESCRIPTION,
      url: i18n.PAGES.COURTS.CLUB_COURT.ROUTE.URL,
      label: i18n.PAGES.COURTS.CLUB_COURT.ROUTE.LABEL,
      image: {
        src: i18n.PAGES.COURTS.CLUB_COURT.CONTACT_SECTION.IMAGE,
        alt: i18n.PAGES.COURTS.CLUB_COURT.NAME,
      }
    },
    {
      title: i18n.PAGES.COURTS.CLUB_PLUS_COURT.TITLE,
      description: i18n.PAGES.COURTS.CLUB_PLUS_COURT.LITTLE_DESCRIPTION,
      url: i18n.PAGES.COURTS.CLUB_PLUS_COURT.ROUTE.URL,
      label: i18n.PAGES.COURTS.CLUB_PLUS_COURT.ROUTE.LABEL,
      image: {
        src: i18n.PAGES.COURTS.CLUB_PLUS_COURT.CONTACT_SECTION.IMAGE,
        alt: i18n.PAGES.COURTS.CLUB_PLUS_COURT.NAME,
      }
    },
    {
      title: i18n.PAGES.COURTS.FORCE_80_COURT.TITLE,
      description: i18n.PAGES.COURTS.FORCE_80_COURT.LITTLE_DESCRIPTION,
      url: i18n.PAGES.COURTS.FORCE_80_COURT.ROUTE.URL,
      label: i18n.PAGES.COURTS.FORCE_80_COURT.ROUTE.LABEL,
      image: {
        src: i18n.PAGES.COURTS.FORCE_80_COURT.CONTACT_SECTION.IMAGE,
        alt: i18n.PAGES.COURTS.FORCE_80_COURT.NAME,
      }
    },
    {
      title: i18n.PAGES.COURTS.SINGLE_COURT.TITLE,
      description: i18n.PAGES.COURTS.SINGLE_COURT.LITTLE_DESCRIPTION,
      url: i18n.PAGES.COURTS.SINGLE_COURT.ROUTE.URL,
      label: i18n.PAGES.COURTS.SINGLE_COURT.ROUTE.LABEL,
      image: {
        src: i18n.PAGES.COURTS.SINGLE_COURT.CONTACT_SECTION.IMAGE,
        alt: i18n.PAGES.COURTS.SINGLE_COURT.NAME,
      }
    },
    {
      title: i18n.PAGES.COURTS.MINI_COURT.TITLE,
      description: i18n.PAGES.COURTS.MINI_COURT.LITTLE_DESCRIPTION,
      url: i18n.PAGES.COURTS.MINI_COURT.ROUTE.URL,
      label: i18n.PAGES.COURTS.MINI_COURT.ROUTE.LABEL,
      image: {
        src: i18n.PAGES.COURTS.MINI_COURT.CONTACT_SECTION.IMAGE,
        alt: i18n.PAGES.COURTS.MINI_COURT.NAME,
      }
    }
  ] as CourtItem[];
}