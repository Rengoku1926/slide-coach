export interface Author {
  id: string
  name: string
  avatarUrl: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  imageUrl: string
  publishedAt: string
  author: Author
  tags: string[]
}

const authors: Author[] = [
  {
    id: "author-1",
    name: "Emma Johnson",
    avatarUrl: "/testImage.png",
  },
  {
    id: "author-2",
    name: "Michael Chen",
    avatarUrl: "/testImage.png",
  },
  {
    id: "author-3",
    name: "Sophia Rodriguez",
    avatarUrl: "/testImage.png",
  },
  {
    id: "author-4",
    name: "David Kim",
    avatarUrl: "/testImage.png",
  },
  {
    id: "author-5",
    name: "Olivia Taylor",
    avatarUrl: "/testImage.png",
  },
]

export const blogData: BlogPost[] = [
  {
    id: "blog-1",
    title: "Employee Benefits UK: What to Offer in 2025 (20+ Examples)",
    excerpt: "Discover the most competitive employee benefits packages in the UK market for 2025.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishedAt: "2025-04-17T10:30:00Z",
    author: authors[0],
    tags: ["HR", "Benefits", "UK", "Employment"],
  },
  {
    id: "blog-2",
    title: "Helios Launches Local Health Benefits powered by Kota Embed",
    excerpt: "New health benefits platform revolutionizes local healthcare access for employees.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishedAt: "2025-04-17T14:15:00Z",
    author: authors[1],
    tags: ["Healthcare", "Benefits", "Technology"],
  },
  {
    id: "blog-3",
    title: "Global Employee Benefits: How to Attract & Retain Talent in 2025",
    excerpt: "Strategic approaches to building competitive benefits packages for international teams.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishedAt: "2025-03-20T09:45:00Z",
    author: authors[2],
    tags: ["Global HR", "Talent", "Retention"],
  },
  {
    id: "blog-4",
    title: "The Future of Remote Work Benefits in Tech Companies",
    excerpt: "How leading tech firms are adapting benefits for distributed workforces.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishedAt: "2025-05-02T11:20:00Z",
    author: authors[3],
    tags: ["Remote Work", "Tech", "Benefits"],
  },
  {
    id: "blog-5",
    title: "Mental Health Benefits: The New Essential for 2025",
    excerpt: "Why companies are prioritizing mental wellbeing in their benefits packages.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    publishedAt: "2025-02-15T13:10:00Z",
    author: authors[4],
    tags: ["Mental Health", "Wellness", "Benefits"],
  },
  {
    id: "blog-6",
    title: "Financial Wellness Programs: Beyond the 401(k)",
    excerpt: "Innovative approaches to supporting employee financial health and literacy.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    publishedAt: "2025-01-28T15:45:00Z",
    author: authors[0],
    tags: ["Finance", "Wellness", "Benefits"],
  },
  {
    id: "blog-7",
    title: "Sustainable Benefits: Eco-Friendly Perks Employees Love",
    excerpt: "How green benefits are becoming a competitive advantage in recruitment.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    publishedAt: "2025-03-05T10:00:00Z",
    author: authors[1],
    tags: ["Sustainability", "Environment", "Benefits"],
  },
  {
    id: "blog-8",
    title: "Personalized Benefits Packages: The End of One-Size-Fits-All",
    excerpt: "How AI and data are enabling truly customized employee benefits solutions.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    publishedAt: "2025-04-22T09:30:00Z",
    author: authors[2],
    tags: ["Personalization", "AI", "Benefits"],
  },
  {
    id: "blog-9",
    title: "Benefits Administration Technology: 2025 Trends",
    excerpt: "The latest platforms and tools streamlining benefits management for HR teams.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    publishedAt: "2025-02-10T14:00:00Z",
    author: authors[3],
    tags: ["Technology", "HR Tech", "Administration"],
  },
  {
    id: "blog-10",
    title: "Family-Friendly Benefits for the Modern Workforce",
    excerpt: "How companies are supporting employees with caregiving responsibilities.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    publishedAt: "2025-01-15T11:45:00Z",
    author: authors[4],
    tags: ["Family", "Parental Leave", "Benefits"],
  },
  {
    id: "blog-11",
    title: "Healthcare Benefits Innovation: Beyond Traditional Insurance",
    excerpt: "New models disrupting how companies provide healthcare coverage to employees.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    publishedAt: "2025-05-10T13:30:00Z",
    author: authors[0],
    tags: ["Healthcare", "Insurance", "Innovation"],
  },
  {
    id: "blog-12",
    title: "Learning & Development Benefits That Drive Retention",
    excerpt: "How investing in employee growth creates loyalty and reduces turnover.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    publishedAt: "2025-03-18T10:15:00Z",
    author: authors[1],
    tags: ["Learning", "Development", "Retention"],
  },
  {
    id: "blog-13",
    title: "Sabbatical Programs: The Ultimate Retention Tool",
    excerpt: "Why leading companies are offering extended paid leave to prevent burnout.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    imageUrl: "/placeholder.svg?height=400&width=600&text=Sabbatical+Programs",
    publishedAt: "2025-02-25T09:00:00Z",
    author: authors[2],
    tags: ["Sabbatical", "Retention", "Burnout"],
  },
  {
    id: "blog-14",
    title: "Benefits Equity: Ensuring Fairness Across Global Teams",
    excerpt: "Strategies for providing comparable value to employees in different regions.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    imageUrl: "/placeholder.svg?height=400&width=600&text=Benefits+Equity",
    publishedAt: "2025-04-05T16:20:00Z",
    author: authors[3],
    tags: ["Equity", "Global", "Fairness"],
  },
  {
    id: "blog-15",
    title: "The ROI of Comprehensive Benefits: Making the Business Case",
    excerpt: "How to measure and demonstrate the return on investment in employee benefits.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    imageUrl: "/placeholder.svg?height=400&width=600&text=Benefits+ROI",
    publishedAt: "2025-01-05T08:45:00Z",
    author: authors[4],
    tags: ["ROI", "Business", "Strategy"],
  },
]
