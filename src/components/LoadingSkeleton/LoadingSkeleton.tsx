import { Skeleton } from '@/components/ui/skeleton';

type LoadingSkeletonProps = {
  noteLength?: number;
};

export default function LoadingSkeleton({ noteLength }: LoadingSkeletonProps) {
  if (!noteLength) {
    return null;
  }

  return (
    <div className="w-full h-full border border-blue-500">
      <main className="w-full h-full flex flex-col gap-4">
        {[...Array(Math.min(noteLength, 4))].map((_, index) => (
          <Skeleton className="w-full h-20 rounded-md " key={index} />
        ))}
      </main>
    </div>
  );
}
