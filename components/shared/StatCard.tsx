import { Video as LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: string;
  label: string;
  value: string | number;
  bgColor?: string;
}

export function StatCard({ icon, label, value, bgColor = 'bg-white' }: StatCardProps) {
  return (
    <div className={`${bgColor} rounded-xl p-6 border border-iga-border shadow-sm hover:shadow-md transition-shadow`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-iga-text-gray mb-1">{label}</p>
          <p className="text-2xl font-bold text-iga-text-dark">{value}</p>
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
    </div>
  );
}
