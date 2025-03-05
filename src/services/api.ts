
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

export const apiService = {
  // Пользователи
  async getUsers(): Promise<User[]> {
    // Мок-данные
    await delay(500);
    return mockUsers;

    // Реальный запрос к API
    /*
    try {
      const response = await api.get('/users');
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
    */
  },

  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    // Мок-данные
    await delay(500);
    const newUser = { ...userData, id: mockUsers.length + 1 };
    mockUsers.push(newUser);
    return newUser;

    /*
    try {
      const response = await api.post('/users', userData);
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
    */
  },

  async updateUser(id: number, userData: Partial<User>): Promise<User> {
    /*
    try {
      const response = await api.put(`/users/${id}`, userData);
      return response.data;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
    */
    await delay(500);
    const index = mockUsers.findIndex(user => user.id === id);
    if (index === -1) throw new Error('User not found');
    mockUsers[index] = { ...mockUsers[index], ...userData };
    return mockUsers[index];
  },

  async deleteUser(id: number): Promise<void> {
    /*
    try {
      await api.delete(`/users/${id}`);
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
    */
    await delay(500);
    const index = mockUsers.findIndex(user => user.id === id);
    if (index !== -1) {
      mockUsers.splice(index, 1);
    }
  },

  // Компании
  async getCompanies(): Promise<Company[]> {
    /*
    try {
      const response = await api.get('/companies');
      return response.data;
    } catch (error) {
      console.error('Error fetching companies:', error);
      throw error;
    }
    */
    await delay(500);
    return mockCompanies;
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
  async getVehicles(): Promise<Vehicle[]> {
    /*
    try {
      const response = await api.get('/vehicles');
      return response.data;
    } catch (error) {
      console.error('Error fetching vehicles:', error);
      throw error;
    }
    */
    await delay(500);
    return mockVehicles;
  },

  async getCompanyVehicles(companyId: number): Promise<Vehicle[]> {
    /*
    try {
      const response = await api.get(`/companies/${companyId}/vehicles`);
      return response.data;
    } catch (error) {
      console.error('Error fetching company vehicles:', error);
      throw error;
    }
    */
    await delay(500);
    return mockVehicles.filter(vehicle => vehicle.companyId === companyId);
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

export { api };
