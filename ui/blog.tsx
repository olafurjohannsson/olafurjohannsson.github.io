import React, { useState } from 'react';

export function Blog() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const blogPosts = [
        {
            id: 1,
            title: "Building Scalable React Applications",
            excerpt: "Learn best practices for structuring large React applications with proper state management and component architecture.",
            content: "Full article content would go here...",
            date: "2024-12-15",
            readTime: "5 min read",
            category: "React",
            tags: ["React", "JavaScript", "Architecture", "Best Practices"],
            featured: true
        },
        {
            id: 2,
            title: "Performance Optimization in Node.js",
            excerpt: "Comprehensive guide to improving your Node.js application performance through various optimization techniques.",
            content: "Full article content would go here...",
            date: "2024-12-10",
            readTime: "8 min read",
            category: "Backend",
            tags: ["Node.js", "Performance", "Backend", "Optimization"],
            featured: false
        },
        {
            id: 3,
            title: "Modern CSS Techniques for 2024",
            excerpt: "Explore the latest CSS features including container queries, cascade layers, and advanced grid techniques.",
            content: "Full article content would go here...",
            date: "2024-12-05",
            readTime: "6 min read",
            category: "CSS",
            tags: ["CSS", "Web Development", "Frontend", "Modern CSS"],
            featured: false
        },
        {
            id: 4,
            title: "Air Traffic Control Systems: A Developer's Perspective",
            excerpt: "Insights into building mission-critical software for air traffic management systems and the challenges involved.",
            content: "Full article content would go here...",
            date: "2024-11-28",
            readTime: "10 min read",
            category: "Industry",
            tags: ["Air Traffic Control", "Critical Systems", "C++", "Real-time"],
            featured: true
        },
        {
            id: 5,
            title: "Getting Started with Machine Learning in Python",
            excerpt: "A practical introduction to machine learning concepts and implementation using Python and popular libraries.",
            content: "Full article content would go here...",
            date: "2024-11-20",
            readTime: "12 min read",
            category: "Machine Learning",
            tags: ["Python", "Machine Learning", "Data Science", "Beginner"],
            featured: false
        }
    ];

    const categories = ['all', 'React', 'Backend', 'CSS', 'Industry', 'Machine Learning'];

    const filteredPosts = selectedCategory === 'all' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === selectedCategory);

    const featuredPosts = blogPosts.filter(post => post.featured);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-primary-blue text-white">
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        Thoughts, insights, and experiences from my journey in software development
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-12">
                
                {/* Featured Posts */}
                {selectedCategory === 'all' && (
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Posts</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {featuredPosts.map(post => (
                                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    <div className="p-6">
                                        <div className="flex items-center text-sm text-gray-500 mb-3">
                                            <time>{new Date(post.date).toLocaleDateString()}</time>
                                            <span className="mx-2">•</span>
                                            <span>{post.readTime}</span>
                                            <span className="ml-auto bg-primary-red text-white px-2 py-1 rounded text-xs font-medium">
                                                Featured
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-blue cursor-pointer">
                                            {post.title}
                                        </h3>
                                        
                                        <p className="text-gray-700 mb-4 leading-relaxed">{post.excerpt}</p>
                                        
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.slice(0, 3).map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        <button className="text-primary-blue hover:text-blue-700 font-medium text-sm flex items-center">
                                            Read More
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                )}

                {/* Category Filter */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-primary-blue text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                {category === 'all' ? 'All Posts' : category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* All Posts */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">
                        {selectedCategory === 'all' ? 'All Posts' : `${selectedCategory} Posts`}
                    </h2>
                    
                    <div className="grid gap-6">
                        {filteredPosts.map(post => (
                            <article key={post.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex flex-col md:flex-row md:items-start gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center text-sm text-gray-500 mb-3">
                                            <time>{new Date(post.date).toLocaleDateString()}</time>
                                            <span className="mx-2">•</span>
                                            <span>{post.readTime}</span>
                                            <span className="mx-2">•</span>
                                            <span className="text-primary-blue font-medium">{post.category}</span>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-blue cursor-pointer">
                                            {post.title}
                                        </h3>
                                        
                                        <p className="text-gray-700 mb-4 leading-relaxed">{post.excerpt}</p>
                                        
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        <button className="text-primary-blue hover:text-blue-700 font-medium text-sm flex items-center">
                                            Read More
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Newsletter Signup */}
                <section className="mt-16 bg-primary-blue rounded-lg p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Get notified when I publish new articles about software development, technology insights, and industry experiences.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input 
                            type="email" 
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                        />
                        <button className="px-6 py-3 bg-primary-red text-white rounded-lg font-medium hover:bg-red-600 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}