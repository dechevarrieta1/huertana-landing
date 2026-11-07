export type BranchType = "centro_distribucion" | "punto_venta" | "taller_central";

export interface Branch {
  id: string;
  name: string;
  type: BranchType;
  typeLabel: string;
  province: string;
  provinceId: string;
  locality: string;
  address: string;
  latitude: number;
  longitude: number;
  phone?: string;
  whatsapp?: string;
  whatsappUrl?: string;
  openingHours?: string;
  description?: string;
  isHeadquarters?: boolean;
  mapPosition: {
    x: number; // Porcentaje normalizado 0-100
    y: number; // Porcentaje normalizado 0-100
  };
  svgCoords: {
    x: number;
    y: number;
  };
}

export type BranchFilter = "all" | "centro_distribucion" | "punto_venta";
