export type NavView =
  | 'inicio'
  | 'quienes-somos'
  | 'infraestructura'
  | 'responsabilidad-social'
  | 'productos'
  | 'cadena-frio'
  | 'trazabilidad'
  | 'certificaciones'
  | 'logistica'
  | 'contacto';

export interface SubCategory {
  id: NavView;
  title: string;
  description: string;
}

export interface NavCategory {
  id: string;
  title: string;
  subcategories?: SubCategory[];
}
