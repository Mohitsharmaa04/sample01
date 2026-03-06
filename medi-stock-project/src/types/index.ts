// This file exports TypeScript types or interfaces used throughout the application for type safety. 

export interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'staff' | 'patient';
}

export interface InventoryItem {
    id: number;
    name: string;
    quantity: number;
    unit: string;
    expirationDate: Date;
}

export interface Appointment {
    id: number;
    patientId: number;
    doctorId: number;
    date: Date;
    status: 'scheduled' | 'completed' | 'canceled';
}

export interface Notification {
    id: number;
    message: string;
    type: 'info' | 'warning' | 'error';
    timestamp: Date;
}