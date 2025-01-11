import avatar from "@/assets/avatar.png";
import {
  ActiveBooking,
  bookPopularLabTestType,
  clinicLocationDetailsType,
} from "./typeDefinition";
import clinicLoc1 from "@/assets/lab-location-2.jpg";

export const ActiveBookingsList: ActiveBooking[] = [
  {
    id: 1,
    avatar: avatar,
    name: "Mr. Suresh Gaikwad",
    status: "SUCCESS",
    date: "20 Mar'25",
    day: "Monday",
    time: "09:30 - 10:30AM",
    service: "Home Sample Collection",
    noOfTest: "03 Lab Tests",
  },
  {
    id: 2,
    avatar: avatar,
    name: "Mr. Suresh Gaikwad",
    status: "SUCCESS",
    date: "20 Mar'25",
    day: "Monday",
    time: "09:30 - 10:30AM",
    service: "Home Sample Collection",
    noOfTest: "03 Lab Tests",
  },
  {
    id: 3,
    avatar: avatar,
    name: "Mr. Suresh Gaikwad",
    status: "SUCCESS",
    date: "20 Mar'25",
    day: "Monday",
    time: "09:30 - 10:30AM",
    service: "Home Sample Collection",
    noOfTest: "03 Lab Tests",
  },
  {
    id: 4,
    avatar: avatar,
    name: "Mr. Suresh Gaikwad",
    status: "SUCCESS",
    date: "20 Mar'25",
    day: "Monday",
    time: "09:30 - 10:30AM",
    service: "Home Sample Collection",
    noOfTest: "03 Lab Tests",
  },
];

export const bookPopularLabTabs = [
  "For Amazon Employees",
  "Center Visit",
  "Full Body Check",
];

export const bookPopularLabTestList: bookPopularLabTestType[] = [
  {
    id: 1,
    name: "Complete Blood Count (CBC) - EDTA Whole Blood",
    cashless: true,
    discount: "55%",
    finalPrice: 500,
    price: 800,
    reports: "Reports in 10-12 hrs",
    isHome: true,
    isLab: true,
  },
  {
    id: 2,
    name: "Complete Blood Count (CBC) - EDTA Whole Blood",
    cashless: true,
    discount: "55%",
    finalPrice: 500,
    price: 800,
    reports: "Reports in 10-12 hrs",
    isHome: true,
    isLab: false,
  },
  {
    id: 3,
    name: "Complete Blood Count (CBC) - EDTA Whole Blood",
    cashless: true,
    discount: "55%",
    finalPrice: 500,
    price: 800,
    reports: "Reports in 10-12 hrs",
    isHome: true,
    isLab: true,
  },
  {
    id: 4,
    name: "Complete Blood Count (CBC) - EDTA Whole Blood",
    cashless: true,
    discount: "55%",
    finalPrice: 500,
    price: 800,
    reports: "Reports in 10-12 hrs",
    isHome: false,
    isLab: true,
  },
  {
    id: 5,
    name: "Complete Blood Count (CBC) - EDTA Whole Blood",
    cashless: true,
    discount: "55%",
    finalPrice: 500,
    price: 800,
    reports: "Reports in 10-12 hrs",
    isHome: true,
    isLab: false,
  },
];

export const clinicLocations: clinicLocationDetailsType[] = [
  {
    id: 1,
    clinicImg: clinicLoc1,
    clinicName: "Apollo Diagnostics",
    location: "Kormanganala, Bangalore",
    nextSlot: "Next slot - 7:30AM, Tomorrow",
  },
  {
    id: 2,
    clinicImg: clinicLoc1,
    clinicName: "Apollo Medical Center",
    location: "HSR Layout, Bangalore",
    nextSlot: "Next slot - 10:30AM, After two days",
  },
];
