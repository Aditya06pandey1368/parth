import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ProjectsLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <div className="bg-white border-b border-gray-200 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="h-8 bg-gray-200 rounded-md w-64 mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-md w-96 mb-6 animate-pulse"></div>

          {/* Search and Filters Skeleton */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 h-10 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="flex gap-2">
              <div className="w-32 h-10 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="w-32 h-10 bg-gray-200 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid Skeleton */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="h-4 bg-gray-200 rounded-md w-48 mb-6 animate-pulse"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="aspect-video bg-gray-200 animate-pulse"></div>
              <CardHeader className="pb-3">
                <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded-md w-full mb-1 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded-md w-5/6 animate-pulse"></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-4 bg-gray-200 rounded-md w-2/3 animate-pulse"></div>
                <div className="flex gap-2">
                  <div className="h-6 bg-gray-200 rounded-full w-16 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded-full w-20 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded-full w-14 animate-pulse"></div>
                </div>
                <div className="flex gap-4">
                  <div className="h-4 bg-gray-200 rounded-md w-12 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-12 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-16 animate-pulse"></div>
                </div>
                <div className="flex gap-2">
                  <div className="h-8 bg-gray-200 rounded-md flex-1 animate-pulse"></div>
                  <div className="h-8 bg-gray-200 rounded-md flex-1 animate-pulse"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
