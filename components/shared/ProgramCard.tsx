import Link from 'next/link';
import Image from 'next/image';
import { Program } from '@/lib/mock-data/programs';
import { MOCK_LESSONS } from '@/lib/mock-data/lessons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface ProgramCardProps {
  program: Program;
  progress?: number;
  enrolled?: boolean;
  onEnroll?: () => void;
}

export function ProgramCard({ program, progress, enrolled, onEnroll }: ProgramCardProps) {
  const categoryColors: Record<string, string> = {
    music: 'bg-purple-100 text-purple-700',
    business: 'bg-blue-100 text-blue-700',
    'niyum-saba': 'bg-pink-100 text-pink-700'
  };

  const difficultyColors: Record<string, string> = {
    beginner: 'bg-green-100 text-green-700',
    intermediate: 'bg-yellow-100 text-yellow-700',
    advanced: 'bg-red-100 text-red-700'
  };

  return (
    <div className="backdrop-blur-xl bg-white/30 rounded-2xl border border-white/40 overflow-hidden hover:bg-white/40 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="aspect-video relative bg-gray-200">
        <Image
          src={program.thumbnail}
          alt={program.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <div className="flex gap-2 mb-3">
          <Badge className={`${categoryColors[program.category]} text-xs`}>
            {program.category.replace('-', ' ')}
          </Badge>
          <Badge className={`${difficultyColors[program.difficulty]} text-xs`}>
            {program.difficulty}
          </Badge>
        </div>

        <h3 className="text-lg font-bold text-iga-text-dark mb-2 line-clamp-2">
          {program.title}
        </h3>

        <p className="text-sm text-iga-text-gray mb-4 line-clamp-2">
          {program.description}
        </p>

        <div className="flex items-center justify-between text-sm text-iga-text-gray mb-4">
          <span>{program.totalLessons} lessons</span>
          <span>{program.estimatedHours}h</span>
        </div>

        {enrolled && typeof progress === 'number' && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-iga-text-gray">Progress</span>
              <span className="text-iga-primary font-semibold">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        {enrolled ? (
          <Link href={`/student/lms/${program.id}/${MOCK_LESSONS.find(l => l.programId === program.id)?.id || ''}`}>
            <Button className="w-full bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-500 hover:to-teal-500 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              {progress === 100 ? 'Review' : 'Continue'}
            </Button>
          </Link>
        ) : (
          <Button
            onClick={onEnroll}
            variant="outline"
            className="w-full backdrop-blur-sm bg-white/50 border-cyan-400 text-cyan-600 hover:bg-white/70"
          >
            Enroll Now
          </Button>
        )}
      </div>
    </div>
  );
}
