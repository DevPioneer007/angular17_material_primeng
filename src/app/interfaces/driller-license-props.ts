interface BusinessDetail {
  companyBusinessBrief: string;
  hydronetDrillerId: number | null;
  mobileNumber: string | null;
  zipCode: string | null;
  email: string | null;
}

export interface DrillerLicenseProps {
  id: number;
  hydronetDrillerBusiness: BusinessDetail[] | [];
  drillerCompanyName: string | null;
  companyLogo: string | null;
  companyAddress: string | null;
}
