export enum InterestedIn {
  privateHouse = "Private house",
  flat = "Flat",
  default = "Interested In",
}

export interface IFormData {
  name: string;
  email: string;
  phoneNumber: number;
  interestedIn: InterestedIn;
  message: string;
}
