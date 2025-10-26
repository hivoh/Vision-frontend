import { Link } from 'react-router-dom'
import { Shield, Eye, MapPin, Bell, Play } from 'lucide-react'

const Landing = () => {
  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Real-time Detection',
      description: 'Advanced AI-powered human detection with instant alerts'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Smart Geofencing',
      description: 'Create virtual boundaries and get notified of intrusions'
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: 'Instant Alerts',
      description: 'Email and push notifications for immediate response'
    }
  ]

  return (
    <div className="min-h-screen bg-dark-gray1">
      {/* Header */}
      <header className="bg-dark-gray2 border-b border-dark-gray3">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-primary-orange" />
              <span className="text-xl font-bold text-white">SecureVision</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-dark-gray4 hover:text-white transition">Features</a>
              <a href="#demo" className="text-dark-gray4 hover:text-white transition">Demo</a>
              <a href="#testimonials" className="text-dark-gray4 hover:text-white transition">Testimonials</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-dark-gray4 hover:text-white transition">Login</Link>
              <Link 
                to="/signup" 
                className="bg-primary-orange text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark-gray1 to-dark-gray2 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Intelligent Surveillance
              <span className="text-primary-orange"> Reimagined</span>
            </h1>
            <p className="text-xl text-dark-gray4 mb-8 max-w-2xl mx-auto">
              Advanced AI-powered security system with real-time human detection, 
              geofencing, and instant alert management for modern security needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/signup" 
                className="bg-primary-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition"
              >
                Start Free Trial
              </Link>
              <button className="border border-primary-orange text-primary-orange px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-orange hover:bg-opacity-10 transition flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-dark-gray2">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-dark-gray4 text-xl max-w-2xl mx-auto">
              Everything you need for comprehensive security monitoring and management
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-dark-gray1 p-8 rounded-xl border border-dark-gray3 hover:border-primary-orange transition group">
                <div className="text-primary-orange mb-4 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-dark-gray4">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-dark-gray1">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Interactive Dashboard</h2>
              <p className="text-dark-gray4 text-xl">
                Experience our powerful monitoring interface
              </p>
            </div>
            <div className="bg-dark-gray2 rounded-2xl p-8 border border-dark-gray3">
              <div className="aspect-video bg-dark-gray1 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-dark-gray4">Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-orange">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your Premises?
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using SecureVision for their security needs
          </p>
          <Link 
            to="/signup" 
            className="bg-white text-primary-orange px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-gray2 border-t border-dark-gray3 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="w-6 h-6 text-primary-orange" />
              <span className="text-lg font-bold text-white">SecureVision</span>
            </div>
            <div className="text-dark-gray4">
              © 2024 SecureVision. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing