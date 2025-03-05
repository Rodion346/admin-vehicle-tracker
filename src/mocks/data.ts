
import { User, Company, Vehicle } from '@/types';

export const mockUsers: User[] = [
  {
    id: 1,
    firstName: "Иван",
    lastName: "Петров",
    email: "ivan@example.com",
    isManager: true,
    isSupervisor: false,
    registrationDate: "2024-01-01",
    companies: [1]
  },
  {
    id: 2,
    firstName: "Анна",
    lastName: "Сидорова",
    email: "anna@example.com",
    isManager: false,
    isSupervisor: true,
    registrationDate: "2024-01-02",
    companies: [1, 2]
  }
];

export const mockCompanies: Company[] = [
  {
    id: 1,
    name: "ООО Транспорт",
    vehicles: [1, 2]
  },
  {
    id: 2,
    name: "ИП Перевозки",
    vehicles: [3]
  }
];

export const mockVehicles: Vehicle[] = [
  {
    id: 1,
    licensePlate: "А123БВ777",
    passSerialNumber: "АБ",
    passNumber: "123456",
    passStartDate: "2024-01-01",
    passEndDate: "2024-12-31",
    isActive: true,
    companyId: 1
  },
  {
    id: 2,
    licensePlate: "В321ГД777",
    passSerialNumber: "ВГ",
    passNumber: "654321",
    passStartDate: "2024-02-01",
    passEndDate: "2024-06-30",
    isActive: true,
    companyId: 1
  },
  {
    id: 3,
    licensePlate: "Е456ЖЗ777",
    passSerialNumber: "ДЕ",
    passNumber: "789012",
    passStartDate: "2024-01-15",
    passEndDate: "2024-03-15",
    isActive: false,
    companyId: 2
  }
];
