'use client';

import { useAuth } from '@/lib/context/AuthContext';
import { MOCK_EVENTS } from '@/lib/mock-data/events';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function VolunteerDashboard() {
  const { user } = useAuth();
  if (!user) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="bg-gradient-to-r from-iga-primary to-iga-accent rounded-2xl p-8 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome, {user.displayName.split(' ')[0]}! 👋</h1>
        <p className="text-pink-100 text-lg">Thank you for being part of our volunteer community</p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-iga-text-dark mb-6">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {MOCK_EVENTS.slice(0, 4).map(event => (
            <div key={event.id} className="bg-white rounded-xl border border-iga-border p-6">
              <div className="flex items-start justify-between mb-3">
                <Badge className="bg-iga-surface text-iga-primary text-xs">{event.type}</Badge>
                <span className="text-xs text-iga-text-gray">
                  {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
              </div>
              <h3 className="font-semibold text-iga-text-dark mb-2">{event.title}</h3>
              <p className="text-sm text-iga-text-gray mb-4 line-clamp-2">{event.description}</p>
              <Button size="sm" className="w-full bg-gradient-to-r from-iga-primary to-iga-accent text-white">
                {event.registrationRequired ? 'Register' : 'Join'}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
