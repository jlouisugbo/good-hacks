'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/context/AuthContext';
import { MOCK_PROGRAMS } from '@/lib/mock-data/programs';
import { getUserProgress, enrollInProgram } from '@/lib/mock-data/userProgress';
import { ProgramCard } from '@/components/shared/ProgramCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';

export default function LMSPage() {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');

  if (!user) return null;

  const userProgressData = getUserProgress(user.id);
  const enrolledProgramIds = new Set(userProgressData.map(p => p.programId));

  const enrolledPrograms = userProgressData.map(p => {
    const program = MOCK_PROGRAMS.find(prog => prog.id === p.programId);
    return program ? { ...program, progress: p.completionPercentage } : null;
  }).filter(Boolean);

  const availablePrograms = MOCK_PROGRAMS.filter(p => !enrolledProgramIds.has(p.id));

  const handleEnroll = (programId: string) => {
    enrollInProgram(user.id, programId);
    toast.success('Successfully enrolled!');
    setTimeout(() => window.location.reload(), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-2">Learning Center</h1>
          <p className="text-iga-text-gray">Explore programs and continue your learning journey</p>
        </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="mb-8"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-iga-text-gray" />
          <Input
            type="text"
            placeholder="Search programs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 backdrop-blur-sm bg-white/50 border-white/60 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl"
          />
        </div>
      </motion.div>

      {enrolledPrograms.length > 0 && (
        <section className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-6"
          >
            Continue Where You Left Off
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {enrolledPrograms.map((program: any) => (
              <motion.div key={program.id} variants={fadeInUp}>
                <ProgramCard program={program} progress={program.progress} enrolled />
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      <section>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-6"
        >
          Discover New Programs
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {availablePrograms.map(program => (
            <motion.div key={program.id} variants={fadeInUp}>
              <ProgramCard program={program} enrolled={false} onEnroll={() => handleEnroll(program.id)} />
            </motion.div>
          ))}
        </motion.div>
      </section>
      </div>
    </div>
  );
}
