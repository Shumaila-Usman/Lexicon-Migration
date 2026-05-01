import {
  Globe2,
  Briefcase,
  Plane,
  GraduationCap,
  Luggage,
  type LucideIcon,
} from "lucide-react";

export const SERVICE_ICONS = {
  globe2: Globe2,
  briefcase: Briefcase,
  plane: Plane,
  graduationCap: GraduationCap,
  luggage: Luggage,
} as const;

export type ServiceIconKey = keyof typeof SERVICE_ICONS;

export function getServiceIcon(key: ServiceIconKey): LucideIcon {
  return SERVICE_ICONS[key];
}
