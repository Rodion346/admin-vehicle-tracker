
import { User, Company, Vehicle } from '@/types';
import { mockUsers, mockCompanies, mockVehicles } from '@/mocks/data';

// Имитация задержки сети
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // Пользователи
  async getUsers(): Promise<User[]> {
    await delay(500);
    return mockUsers;
  },

  async createUser(user: Omit<User, 'id'>): Promise<User> {
    await delay(500);
    const newUser = { ...user, id: mockUsers.length + 1 };
    mockUsers.push(newUser);
    return newUser;
  },

  // Компании
  async getCompanies(): Promise<Company[]> {
    await delay(500);
    return mockCompanies;
  },

  async getCompany(id: number): Promise<Company | undefined> {
    await delay(500);
    return mockCompanies.find(company => company.id === id);
  },

  async createCompany(company: Omit<Company, 'id'>): Promise<Company> {
    await delay(500);
    const newCompany = { ...company, id: mockCompanies.length + 1 };
    mockCompanies.push(newCompany);
    return newCompany;
  },

  async updateCompany(id: number, data: Partial<Company>): Promise<Company> {
    await delay(500);
    const index = mockCompanies.findIndex(company => company.id === id);
    if (index === -1) throw new Error('Company not found');
    
    mockCompanies[index] = { ...mockCompanies[index], ...data };
    return mockCompanies[index];
  },

  async deleteCompany(id: number): Promise<void> {
    await delay(500);
    const index = mockCompanies.findIndex(company => company.id === id);
    if (index !== -1) {
      mockCompanies.splice(index, 1);
    }
  },

  // Транспортные средства
  async getVehicles(): Promise<Vehicle[]> {
    await delay(500);
    return mockVehicles;
  },

  async getCompanyVehicles(companyId: number): Promise<Vehicle[]> {
    await delay(500);
    return mockVehicles.filter(vehicle => vehicle.companyId === companyId);
  },

  async createVehicle(vehicle: Omit<Vehicle, 'id'>): Promise<Vehicle> {
    await delay(500);
    const newVehicle = { ...vehicle, id: mockVehicles.length + 1 };
    mockVehicles.push(newVehicle);
    return newVehicle;
  },

  async updateVehicle(id: number, data: Partial<Vehicle>): Promise<Vehicle> {
    await delay(500);
    const index = mockVehicles.findIndex(vehicle => vehicle.id === id);
    if (index === -1) throw new Error('Vehicle not found');
    
    mockVehicles[index] = { ...mockVehicles[index], ...data };
    return mockVehicles[index];
  },

  async deleteVehicle(id: number): Promise<void> {
    await delay(500);
    const index = mockVehicles.findIndex(vehicle => vehicle.id === id);
    if (index !== -1) {
      mockVehicles.splice(index, 1);
    }
  }
};
