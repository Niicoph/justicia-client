import { Skeleton } from '@/components/ui/skeleton';

export default function DashboardSkeleton() {
  return (
    <div className="min-h-screen flex flex-col overflow-y-scroll bg-Jbackground animate-fade-in p-4">
      <Skeleton className="h-16 w-full" />
      <main className="w-full h-full flex flex-col px-4 py-6 gap-4">
        <div>
          <Skeleton className="h-6 w-48 mb-2" />
          <Skeleton className="h-4 w-64" />
        </div>

        <section className="grid grid-cols-2 grid-rows-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} className="h-[125px] w-full rounded-xl" />
          ))}
        </section>

        <div>
          <Skeleton className="h-6 w-48 mb-2" />
          <Skeleton className="h-4 w-64" />
        </div>

        <section className="flex flex-col gap-4">
          {[...Array(4)].map((_, index) => (
            <Skeleton key={index} className="h-20 w-full rounded-xl" />
          ))}
        </section>
      </main>
    </div>
  );
}
