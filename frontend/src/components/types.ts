// types.ts
export interface Car {
    id: string;
    name: string;
    brand: string;
    imageUrl: string;
    pricePerDay: number; 
    seats: number;
    bags?: number;
    transmission: 'Automatic' | 'Manual';
  }
  