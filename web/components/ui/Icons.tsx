import {
  Church,
  Compass,
  Home,
  Users,
  Wallet,
  BookOpen,
  Heart,
  MessageCircle,
  HandHeart,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export const Icons = {
  church: Church,
  compass: Compass,
  home: Home,
  users: Users,
  wallet: Wallet,
  bookOpen: BookOpen,
  heart: Heart,
  messageCircle: MessageCircle,
  handHeart: HandHeart,
  checkCircle: CheckCircle,
  arrowRight: ArrowRight,
  menu: Menu,
  x: X,
  chevronDown: ChevronDown,
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
};

export function getProjectIcon(iconName: string) {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    church: Church,
    compass: Compass,
    home: Home,
    users: Users,
    wallet: Wallet,
  };

  const Icon = iconMap[iconName] || BookOpen;
  return <Icon className="h-7 w-7" />;
}
