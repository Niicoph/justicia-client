export default function PageLoading() {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white z-50">
      <div className="animate-spin rounded-full h-5 w-5 border-black border-t border-l border-r border-r-transparent "></div>
    </div>
  );
}
