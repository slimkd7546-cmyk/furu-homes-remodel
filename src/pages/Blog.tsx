import React, { useState } from "react";
import { Calendar, User, ArrowRight, Search, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingQuoteButton from "@/components/FloatingQuoteButton";
import { Helmet } from "react-helmet";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "10 Kitchen Remodeling Trends for 2024",
      excerpt:
        "Discover the latest kitchen design trends that are transforming homes this year, from smart appliances to sustainable materials.",
      category: "Kitchen",
      author: "Sarah Holmes",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "photo-1721322800607-8c38375eef04",
      slug: "kitchen-remodeling-trends-2024",
    },
    {
      id: 2,
      title: "Maximizing Small Bathroom Spaces",
      excerpt:
        "Learn expert tips and tricks for making the most of your small bathroom renovation, including storage solutions and design hacks.",
      category: "Bathroom",
      author: "John Furu",
      date: "March 10, 2024",
      readTime: "4 min read",
      image: "photo-1472396961693-142e6e269027",
      slug: "maximizing-small-bathroom-spaces",
    },
    {
      id: 3,
      title: "The ROI of Home Renovations: What Projects Pay Off",
      excerpt:
        "Understanding which home improvement projects offer the best return on investment and add the most value to your property.",
      category: "Investment",
      author: "Mike Rodriguez",
      date: "March 5, 2024",
      readTime: "6 min read",
      image: "photo-1483058712412-4245e9b90334",
      slug: "roi-home-renovations-projects",
    },
    {
      id: 4,
      title: "Sustainable Materials for Eco-Friendly Remodeling",
      excerpt:
        "Explore environmentally conscious material choices that don't compromise on style or durability for your next renovation project.",
      category: "Sustainability",
      author: "Sarah Holmes",
      date: "February 28, 2024",
      readTime: "7 min read",
      image: "photo-1487958449943-2429e8be8625",
      slug: "sustainable-materials-eco-friendly-remodeling",
    },
    {
      id: 5,
      title: "Open Floor Plans: Pros, Cons, and Design Tips",
      excerpt:
        "Everything you need to know about open concept living, including when it works best and how to design functional spaces.",
      category: "Design",
      author: "John Furu",
      date: "February 20, 2024",
      readTime: "5 min read",
      image: "photo-1721322800607-8c38375eef04",
      slug: "open-floor-plans-design-tips",
    },
    {
      id: 6,
      title: "Budgeting for Your Home Renovation: A Complete Guide",
      excerpt:
        "Learn how to create a realistic renovation budget, avoid common pitfalls, and get the most value from your investment.",
      category: "Planning",
      author: "Mike Rodriguez",
      date: "February 15, 2024",
      readTime: "8 min read",
      image: "photo-1472396961693-142e6e269027",
      slug: "budgeting-home-renovation-guide",
    },
  ];

  const categories = [
    "all",
    "Kitchen",
    "Bathroom",
    "Design",
    "Investment",
    "Sustainability",
    "Planning",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <>
      <Helmet>
        <title>Blog | Furu Holmes LLC</title>
        <meta
          name="description"
          content="Expert home remodeling tips, trends, and insights from Furu Holmes LLC. Learn about kitchen renovations, bathroom remodels, and more."
        />
        <meta property="og:title" content="Blog - Furu Holmes LLC" />
        <meta
          property="og:description"
          content="Expert home remodeling tips, trends, and insights from Furu Holmes LLC. Learn about kitchen renovations, bathroom remodels, and more."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        />
        <meta property="og:url" content="https://furuholmes.com/blog" />
      </Helmet>

      <div className="min-h-screen brand-gradient text-primary-foreground">
        <Header />

        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground drop-shadow-lg">
                Remodeling Insights
              </h1>
              <p className="text-xl text-accent">
                Expert tips, trends, and case studies to help you make informed
                decisions about your home renovation
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="capitalize"
                    >
                      {category === "all" ? "All Topics" : category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Featured Article
              </h2>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={`https://images.unsplash.com/${featuredPost.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <Button className="w-fit">
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Latest Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(1).map((post) => (
                  <Card
                    key={post.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow duration-300 fade-in"
                  >
                    <div className="relative">
                      <img
                        src={`https://images.unsplash.com/${post.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {post.readTime}
                        </span>
                        <Button size="sm" variant="outline">
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No articles found matching your search criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter for the latest remodeling tips,
                trends, and project inspiration delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingQuoteButton />
      </div>
    </>
  );
};

export default Blog;
