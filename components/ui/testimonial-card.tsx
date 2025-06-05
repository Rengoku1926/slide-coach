import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Testimonial = {
  id: number
  name: string
  role: string
  content: string
  avatar: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const initials = testimonial.name
    .split(" ")
    .map((name) => name[0])
    .join("")

  return (
    <Card
      className={cn(
        "w-[320px] bg-white/80 backdrop-blur-sm border border-gray-100 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className,
      )}
    >
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar className="h-10 w-10 border border-gray-200">
          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 leading-relaxed">&quot;{testimonial.content}&quot;</p>
      </CardContent>
    </Card>
  )
}
