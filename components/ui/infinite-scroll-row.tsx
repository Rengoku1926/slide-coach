import { InfiniteSlider } from "../motion-primitives/infinite-slider"
import { TestimonialCard } from "./testimonial-card"

type Testimonial = {
  id: number
  name: string
  role: string
  content: string
  avatar: string
}

interface InfiniteScrollRowProps {
  testimonials: Testimonial[]
  direction: "left" | "right"
  speed?: number
  className?: string
}

export function InfiniteScrollRow({ testimonials, direction, speed = 50, className }: InfiniteScrollRowProps) {
  return (
    <div className="py-4">
      <InfiniteSlider speed={speed} gap={24} reverse={direction === "right"} speedOnHover={20} className={className}>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </InfiniteSlider>
    </div>
  )
}
