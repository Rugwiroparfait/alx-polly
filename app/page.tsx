import { ArrowRight, BarChart3, CheckCircle, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-texture">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero"></div>
        <div className="relative container-max py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white/90 text-sm font-medium">Professional Polling Platform</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-6 tracking-wide">
              Professional Polling
              <span className="block bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto text-center leading-relaxed">
              Create, share, and analyze polls with our modern, minimalistic platform. 
              Built for professionals who value clarity and efficiency.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="px-8 bg-white text-navy-900 hover:bg-white/90 shadow-lg">
                Create Your First Poll
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="secondary" size="lg" className="px-8 glass text-white border-white/30 hover:bg-white/10">
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container-max py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4 tracking-wide">
              Why Choose ALX Polly?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
              Experience the perfect blend of professional design and powerful functionality
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center card-gradient hover:shadow-card-hover group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-brand-lg mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl">Professional Design</CardTitle>
                <CardDescription className="text-base text-left">
                  Clean, minimalistic interface that reflects professionalism and builds trust with your audience.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center card-gradient hover:shadow-card-hover group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-brand-lg mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Lightning Fast</CardTitle>
                <CardDescription className="text-base text-left">
                  Create and share polls in seconds. Get instant results and real-time analytics.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center card-gradient hover:shadow-card-hover group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-navy-100 to-navy-200 rounded-brand-lg mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-navy-600" />
                </div>
                <CardTitle className="text-xl">Rich Analytics</CardTitle>
                <CardDescription className="text-base text-left">
                  Detailed insights and visualizations to help you understand your audience better.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 py-16">
        <div className="container-max px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="glass-dark rounded-brand-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">10K+</div>
                <div className="text-white/80">Active Polls</div>
              </div>
              <div className="glass-dark rounded-brand-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">50K+</div>
                <div className="text-white/80">Total Votes</div>
              </div>
              <div className="glass-dark rounded-brand-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-white/80">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-max py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="card-gradient shadow-card-hover">
            <CardContent className="py-16">
              <h2 className="text-4xl font-bold text-navy-900 mb-6 tracking-wide">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                Join thousands of professionals who trust ALX Polly for their polling needs. 
                Start creating engaging polls in minutes.
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="px-8">
                  Start Creating Polls
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="secondary" size="lg" className="px-8">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
