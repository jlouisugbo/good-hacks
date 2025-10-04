'use client';

import { useAuth } from '@/lib/context/AuthContext';
import { getUserProgress } from '@/lib/mock-data/userProgress';
import { MOCK_EVENTS } from '@/lib/mock-data/events';
import { MOCK_SCHOLARSHIPS } from '@/lib/mock-data/scholarships';
import { MOCK_PROGRAMS } from '@/lib/mock-data/programs';
import { MOCK_LESSONS } from '@/lib/mock-data/lessons';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';
import { CirclePlay as PlayCircle, TrendingUp, Award, Calendar as CalendarIcon, BookOpen, Clock, ChevronRight, Flame } from 'lucide-react';
import { useState } from 'react';

export default function StudentDashboard() {
  const { user } = useAuth();
  const [date, setDate] = useState<Date | undefined>(new Date());

  if (!user) return null;

  const userProgressData = getUserProgress(user.id);
  const enrolledPrograms = userProgressData.map(progress => {
    const program = MOCK_PROGRAMS.find(p => p.id === progress.programId);
    if (!program) return null;

    const lessons = MOCK_LESSONS.filter(l => l.programId === program.id);
    const currentLesson = lessons[progress.currentLesson - 1] || lessons[0];

    return {
      ...program,
      progress: progress.completionPercentage,
      currentLesson
    };
  }).filter(Boolean) as Array<typeof MOCK_PROGRAMS[0] & { progress: number; currentLesson: typeof MOCK_LESSONS[0] }>;

  const upcomingEvents = MOCK_EVENTS.slice(0, 3);
  const recentScholarships = MOCK_SCHOLARSHIPS.slice(0, 2);

  const eventDates = MOCK_EVENTS.map(event => new Date(event.date));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-iga-text-dark mb-2">
            Welcome back, {user.displayName}!
          </h1>
          <p className="text-iga-text-gray">Continue your learning journey</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 gap-6 mb-8"
        >
          <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 shadow-sm border border-iga-border">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-iga-text-gray">Current Streak</p>
              <Flame className="h-5 w-5 text-orange-500" />
            </div>
            <p className="text-3xl font-bold text-iga-text-dark">{user.streak.current} days</p>
            <p className="text-xs text-iga-text-gray mt-1">Longest: {user.streak.longest} days</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 shadow-sm border border-iga-border">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-iga-text-gray">Programs Completed</p>
              <Award className="h-5 w-5 text-iga-primary" />
            </div>
            <p className="text-3xl font-bold text-iga-text-dark">{user.stats.programsCompleted}</p>
            <p className="text-xs text-iga-text-gray mt-1">{enrolledPrograms.length} in progress</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 shadow-sm border border-iga-border">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-iga-text-gray">Badges Earned</p>
              <TrendingUp className="h-5 w-5 text-iga-purple" />
            </div>
            <p className="text-3xl font-bold text-iga-text-dark">{user.stats.badgesEarned}</p>
            <p className="text-xs text-iga-text-gray mt-1">Keep learning to earn more!</p>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-iga-text-dark">Continue Learning</h2>
                <Link href="/student/lms">
                  <Button variant="ghost" size="sm" className="text-iga-primary">
                    View All
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>

              {enrolledPrograms.length > 0 ? (
                <div className="space-y-4">
                  {enrolledPrograms.slice(0, 3).map((program) => (
                    <motion.div
                      key={program.id}
                      whileHover={{ scale: 1.01 }}
                      className="bg-white rounded-xl p-6 shadow-sm border border-iga-border hover:border-iga-primary transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              program.category === 'music'
                                ? 'bg-purple-100 text-purple-700'
                                : program.category === 'business'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-teal-100 text-teal-700'
                            }`}>
                              {program.category.replace('-', ' ')}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-iga-text-dark mb-1">
                            {program.title}
                          </h3>
                          <p className="text-sm text-iga-text-gray mb-3">{program.description}</p>

                          <div className="flex items-center gap-4 text-sm text-iga-text-gray">
                            <span className="flex items-center">
                              <BookOpen className="h-4 w-4 mr-1" />
                              {program.totalLessons} lessons
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {program.estimatedHours}h
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="w-16 h-16 rounded-full border-4 border-iga-primary/20 flex items-center justify-center">
                            <span className="text-lg font-bold text-iga-primary">
                              {Math.round(program.progress)}%
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex-1 bg-gray-100 rounded-full h-2 mr-4">
                          <div
                            className="bg-gradient-to-r from-iga-primary to-iga-secondary h-2 rounded-full transition-all"
                            style={{ width: `${program.progress}%` }}
                          />
                        </div>
                        {program.currentLesson && (
                          <Link href={`/student/lms/${program.id}/${program.currentLesson.id}`}>
                            <Button size="sm" className="bg-iga-primary hover:bg-iga-secondary text-white">
                              <PlayCircle className="h-4 w-4 mr-2" />
                              Continue
                            </Button>
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-iga-border">
                  <BookOpen className="h-12 w-12 text-iga-text-gray mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-iga-text-dark mb-2">
                    Start Your Learning Journey
                  </h3>
                  <p className="text-iga-text-gray mb-4">
                    Explore our programs and enroll in your first course
                  </p>
                  <Link href="/student/lms">
                    <Button className="bg-iga-primary hover:bg-iga-secondary text-white">
                      Browse Programs
                    </Button>
                  </Link>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-xl font-bold text-iga-text-dark mb-4">Scholarships</h2>
              <div className="space-y-3">
                {recentScholarships.map((scholarship) => (
                  <div
                    key={scholarship.id}
                    className="bg-white rounded-xl p-4 shadow-sm border border-iga-border hover:border-iga-primary transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-iga-text-dark mb-1">
                          {scholarship.name}
                        </h3>
                        <p className="text-sm text-iga-text-gray mb-2">
                          {scholarship.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-iga-text-gray">
                          <span className="font-semibold text-iga-primary">
                            {scholarship.amount}
                          </span>
                          <span>Deadline: {new Date(scholarship.deadline).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="ml-4">
                        Learn More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-iga-border"
            >
              <h2 className="text-lg font-bold text-iga-text-dark mb-4">Calendar</h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md"
                modifiers={{
                  event: eventDates,
                }}
                modifiersStyles={{
                  event: {
                    backgroundColor: '#A855F7',
                    color: 'white',
                    borderRadius: '50%',
                  },
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-iga-border"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-iga-text-dark">Upcoming Events</h2>
                <CalendarIcon className="h-5 w-5 text-iga-primary" />
              </div>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="pb-3 border-b border-iga-border last:border-0 last:pb-0">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-iga-primary to-iga-secondary flex flex-col items-center justify-center text-white mr-3">
                        <span className="text-xs font-medium">
                          {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                        </span>
                        <span className="text-lg font-bold leading-none">
                          {new Date(event.date).getDate()}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-iga-text-dark text-sm mb-1 truncate">
                          {event.title}
                        </p>
                        <p className="text-xs text-iga-text-gray">
                          {event.time} - {event.type}
                        </p>
                        <p className="text-xs text-iga-text-gray mt-1">{event.duration} minutes</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" size="sm" className="w-full mt-4 text-iga-primary">
                View All Events
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
