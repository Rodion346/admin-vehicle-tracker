import axios from 'axios';
import { User, Company, Vehicle } from '@/types';
import { mockUsers, mockCompanies, mockVehicles } from '@/mocks/data';

// Создаем instance axios с базовым URL
const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Замените на ваш реальный URL
  timeout: 5000,
});

// Добавляем перехватчик для добавления токена авторизации
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Имитация задержки сети для мок-данных
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const apis = {
  // Пользователи
  getUsers: (): Promise<User[]> => {
    return Promise.resolve(mockUsers);
    // Реальный запрос:
    // return api.get('/users').then(response => response.data);
  },

  createUser: (userData: Omit<User, 'id'>): Promise<User> => {
    const newUser = { ...userData, id: mockUsers.length + 1 };
    mockUsers.push(newUser);
    return Promise.resolve(newUser);
    // return api.post('/users', userData).then(response => response.data);
  },

  updateUser: (id: number, userData: Partial<User>): Promise<User> => {
    const index = mockUsers.findIndex(user => user.id === id);
    if (index === -1) throw new Error('User not found');
    mockUsers[index] = { ...mockUsers[index], ...userData };
    return Promise.resolve(mockUsers[index]);
    // return api.put(`/users/${id}`, userData).then(response => response.data);
  },

  deleteUser: (id: number): Promise<void> => {
    const index = mockUsers.findIndex(user => user.id === id);
    if (index !== -1) {
      mockUsers.splice(index, 1);
    }
    return Promise.resolve();
    // return api.delete(`/users/${id}`).then(() => undefined);
  },

  // Компании
  getCompanies: (): Promise<Company[]> => {
    return Promise.resolve(mockCompanies);
    // return api.get('/companies').then(response => response.data);
  },

  async createCompany(companyData: Omit<Company, 'id'>): Promise<Company> {
    /*
    try {
      const response = await api.post('/companies', companyData);
      return response.data;
    } catch (error) {
      console.error('Error creating company:', error);
      throw error;
    }
    */
    await delay(500);
    const newCompany = { ...companyData, id: mockCompanies.length + 1 };
    mockCompanies.push(newCompany);
    return newCompany;
  },

  async updateCompany(id: number, companyData: Partial<Company>): Promise<Company> {
    /*
    try {
      const response = await api.put(`/companies/${id}`, companyData);
      return response.data;
    } catch (error) {
      console.error('Error updating company:', error);
      throw error;
    }
    */
    await delay(500);
    const index = mockCompanies.findIndex(company => company.id === id);
    if (index === -1) throw new Error('Company not found');
    mockCompanies[index] = { ...mockCompanies[index], ...companyData };
    return mockCompanies[index];
  },

  async deleteCompany(id: number): Promise<void> {
    /*
    try {
      await api.delete(`/companies/${id}`);
    } catch (error) {
      console.error('Error deleting company:', error);
      throw error;
    }
    */
    await delay(500);
    const index = mockCompanies.findIndex(company => company.id === id);
    if (index !== -1) {
      mockCompanies.splice(index, 1);
    }
  },

  // Транспортные средства
  getVehicles: (): Promise<Vehicle[]> => {
    return Promise.resolve(mockVehicles);
    // return api.get('/vehicles').then(response => response.data);
  },

  getCompanyVehicles: (companyId: number): Promise<Vehicle[]> => {
    return Promise.resolve(mockVehicles.filter(vehicle => vehicle.companyId === companyId));
    // return api.get(`/companies/${companyId}/vehicles`).then(response => response.data);
  },

  async createVehicle(vehicleData: Omit<Vehicle, 'id'>): Promise<Vehicle> {
    /*
    try {
      const response = await api.post('/vehicles', vehicleData);
      return response.data;
    } catch (error) {
      console.error('Error creating vehicle:', error);
      throw error;
    }
    */
    await delay(500);
    const newVehicle = { ...vehicleData, id: mockVehicles.length + 1 };
    mockVehicles.push(newVehicle);
    return newVehicle;
  },

  async updateVehicle(id: number, vehicleData: Partial<Vehicle>): Promise<Vehicle> {
    /*
    try {
      const response = await api.put(`/vehicles/${id}`, vehicleData);
      return response.data;
    } catch (error) {
      console.error('Error updating vehicle:', error);
      throw error;
    }
    */
    await delay(500);
    const index = mockVehicles.findIndex(vehicle => vehicle.id === id);
    if (index === -1) throw new Error('Vehicle not found');
    mockVehicles[index] = { ...mockVehicles[index], ...vehicleData };
    return mockVehicles[index];
  },

  async deleteVehicle(id: number): Promise<void> {
    /*
    try {
      await api.delete(`/vehicles/${id}`);
    } catch (error) {
      console.error('Error deleting vehicle:', error);
      throw error;
    }
    */
    await delay(500);
    const index = mockVehicles.findIndex(vehicle => vehicle.id === id);
    if (index !== -1) {
      mockVehicles.splice(index, 1);
    }
  }
};
