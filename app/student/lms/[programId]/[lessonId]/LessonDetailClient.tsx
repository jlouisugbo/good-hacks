'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { MOCK_LESSONS } from '@/lib/mock-data/lessons';
import { MOCK_PROGRAMS } from '@/lib/mock-data/programs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, CirclePlay as PlayCircle, FileText, CircleCheck as CheckCircle, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';

export default function LessonDetailClient() {
  const params = useParams();
  const router = useRouter();
  const [currentSection, setCurrentSection] = useState<'video' | 'exercises' | 'resources'>('video');
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});

  const lesson = MOCK_LESSONS.find(l => l.id === params.lessonId);
  const program = MOCK_PROGRAMS.find(p => p.id === params.programId);

  if (!lesson || !program) {
    return <div>Lesson not found</div>;
  }

  const allLessonsForProgram = MOCK_LESSONS.filter(l => l.programId === params.programId);
  const currentLessonIndex = allLessonsForProgram.findIndex(l => l.id === lesson.id);
  const nextLesson = allLessonsForProgram[currentLessonIndex + 1];
  const prevLesson = allLessonsForProgram[currentLessonIndex - 1];

  const progress = lesson.exercises
    ? (completedExercises.length / lesson.exercises.length) * 100
    : 0;

  const handleExerciseSubmit = (exerciseId: string, answer: string) => {
    const exercise = lesson.exercises?.find(ex => ex.id === exerciseId);
    if (exercise && answer === exercise.correctAnswer) {
      setCompletedExercises([...completedExercises, exerciseId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <button
            onClick={() => router.push('/student/lms')}
            className="flex items-center text-iga-text-gray hover:text-iga-primary transition-colors mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Learning Center
          </button>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-iga-text-gray mb-1">{program.title}</p>
              <h1 className="text-3xl font-bold text-iga-text-dark">{lesson.title}</h1>
              <p className="text-iga-text-gray mt-2">{lesson.description}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-iga-text-gray">Lesson {lesson.lessonNumber}</p>
              <p className="text-2xl font-bold text-iga-primary">{lesson.duration} min</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex gap-4 border-b border-iga-border">
            <button
              onClick={() => setCurrentSection('video')}
              className={`pb-3 px-4 font-medium transition-colors ${
                currentSection === 'video'
                  ? 'text-iga-primary border-b-2 border-iga-primary'
                  : 'text-iga-text-gray hover:text-iga-primary'
              }`}
            >
              <PlayCircle className="inline h-5 w-5 mr-2" />
              Video
            </button>
            {lesson.exercises && lesson.exercises.length > 0 && (
              <button
                onClick={() => setCurrentSection('exercises')}
                className={`pb-3 px-4 font-medium transition-colors ${
                  currentSection === 'exercises'
                    ? 'text-iga-primary border-b-2 border-iga-primary'
                    : 'text-iga-text-gray hover:text-iga-primary'
                }`}
              >
                <CheckCircle className="inline h-5 w-5 mr-2" />
                Exercises
                {lesson.exercises.length > 0 && (
                  <span className="ml-2 text-xs bg-iga-primary text-white px-2 py-1 rounded-full">
                    {completedExercises.length}/{lesson.exercises.length}
                  </span>
                )}
              </button>
            )}
            {lesson.resources.length > 0 && (
              <button
                onClick={() => setCurrentSection('resources')}
                className={`pb-3 px-4 font-medium transition-colors ${
                  currentSection === 'resources'
                    ? 'text-iga-primary border-b-2 border-iga-primary'
                    : 'text-iga-text-gray hover:text-iga-primary'
                }`}
              >
                <FileText className="inline h-5 w-5 mr-2" />
                Resources
                <span className="ml-2 text-xs bg-gray-200 text-iga-text-dark px-2 py-1 rounded-full">
                  {lesson.resources.length}
                </span>
              </button>
            )}
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 gap-6"
        >
          <div className="lg:col-span-2">
            {currentSection === 'video' && (
              <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="aspect-video bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={lesson.videoUrl}
                    title={lesson.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-iga-text-dark mb-2">About this lesson</h2>
                  <p className="text-iga-text-gray">{lesson.description}</p>
                </div>
              </motion.div>
            )}

            {currentSection === 'exercises' && lesson.exercises && (
              <motion.div variants={fadeInUp} className="space-y-4">
                {lesson.exercises.map((exercise, index) => (
                  <div key={exercise.id} className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-iga-text-dark">
                        Question {index + 1}
                      </h3>
                      {completedExercises.includes(exercise.id) && (
                        <span className="flex items-center text-iga-success text-sm font-medium">
                          <CheckCircle className="h-5 w-5 mr-1" />
                          Correct!
                        </span>
                      )}
                    </div>
                    <p className="text-iga-text-dark mb-4">{exercise.question}</p>

                    {exercise.type === 'multiple-choice' && exercise.options && (
                      <div className="space-y-2">
                        {exercise.options.map((option) => (
                          <button
                            key={option}
                            onClick={() => {
                              setSelectedAnswers({ ...selectedAnswers, [exercise.id]: option });
                              handleExerciseSubmit(exercise.id, option);
                            }}
                            disabled={completedExercises.includes(exercise.id)}
                            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                              selectedAnswers[exercise.id] === option
                                ? completedExercises.includes(exercise.id)
                                  ? 'border-iga-success bg-green-50'
                                  : 'border-iga-primary bg-teal-50'
                                : 'border-iga-border hover:border-iga-primary'
                            } ${
                              completedExercises.includes(exercise.id) ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}

                    {exercise.hint && !completedExercises.includes(exercise.id) && (
                      <p className="mt-4 text-sm text-iga-text-gray italic">
                        Hint: {exercise.hint}
                      </p>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

            {currentSection === 'resources' && (
              <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-iga-text-dark mb-4">Learning Resources</h2>
                <div className="space-y-3">
                  {lesson.resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      className="flex items-center justify-between p-4 border border-iga-border rounded-lg hover:border-iga-primary hover:bg-teal-50 transition-all"
                    >
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-iga-primary mr-3" />
                        <div>
                          <p className="font-medium text-iga-text-dark">{resource.name}</p>
                          <p className="text-sm text-iga-text-gray uppercase">{resource.type}</p>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-iga-text-gray" />
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <div className="space-y-4">
            <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-iga-text-dark mb-4">Your Progress</h3>
              {lesson.exercises && lesson.exercises.length > 0 ? (
                <>
                  <Progress value={progress} className="mb-2" />
                  <p className="text-sm text-iga-text-gray">
                    {completedExercises.length} of {lesson.exercises.length} exercises completed
                  </p>
                </>
              ) : (
                <p className="text-sm text-iga-text-gray">Watch the video to complete this lesson</p>
              )}
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-iga-text-dark mb-4">Navigation</h3>
              <div className="space-y-2">
                {prevLesson && (
                  <Button
                    onClick={() => router.push(`/student/lms/${params.programId}/${prevLesson.id}`)}
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous Lesson
                  </Button>
                )}
                {nextLesson && (
                  <Button
                    onClick={() => router.push(`/student/lms/${params.programId}/${nextLesson.id}`)}
                    className="w-full justify-start bg-iga-primary hover:bg-iga-secondary text-white"
                  >
                    Next Lesson
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                )}
                {!nextLesson && (
                  <Button
                    onClick={() => router.push('/student/lms')}
                    className="w-full bg-iga-success hover:bg-green-600 text-white"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Complete Program
                  </Button>
                )}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl shadow-sm p-6 border border-iga-primary/20">
              <h3 className="font-semibold text-iga-text-dark mb-2">Keep Learning!</h3>
              <p className="text-sm text-iga-text-gray mb-4">
                Complete all lessons to earn your certificate
              </p>
              <div className="flex items-center text-sm">
                <span className="text-2xl font-bold text-iga-primary mr-2">
                  {currentLessonIndex + 1}
                </span>
                <span className="text-iga-text-gray">/ {allLessonsForProgram.length} lessons</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
