
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  isManager: boolean;
  isSupervisor: boolean;
  registrationDate: string;
  companies: number[];
}

export interface Company {
  id: number;
  name: string;
  vehicles: number[];
}

export interface Vehicle {
  id: number;
  licensePlate: string;
  passSerialNumber: string;
  passNumber: string;
  passStartDate: string;
  passEndDate: string;
  isActive: boolean;
  companyId: number;
}
