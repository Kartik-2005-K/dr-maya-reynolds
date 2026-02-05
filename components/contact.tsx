"use client"

import React from "react"

import { useState } from "react"
import { Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to an API
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
            Schedule a Consultation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Taking the first step can feel daunting. I offer a free 15-minute phone consultation 
            so we can discuss your needs and determine if we&apos;re a good fit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a 
                      href="tel:+15125551234" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      (512) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href="mailto:hello@drmayareynolds.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      hello@drmayareynolds.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Office Hours</p>
                    <p className="text-muted-foreground">Monday &ndash; Thursday: 9am &ndash; 5pm</p>
                    <p className="text-muted-foreground">Friday: 9am &ndash; 12pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card border border-border">
              <h3 className="font-serif text-lg font-medium text-foreground mb-4">
                Fees & Insurance
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">Individual Session (50 min):</span> $200
                </p>
                <p>
                  <span className="font-medium text-foreground">Initial Assessment (80 min):</span> $275
                </p>
                <p className="text-sm pt-2 border-t border-border mt-4">
                  I am an out-of-network provider. I can provide superbills for insurance reimbursement. 
                  Sliding scale available for qualifying clients.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="p-8 bg-card border border-primary/30 text-center">
                <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                  Thank You
                </h3>
                <p className="text-muted-foreground">
                  I&apos;ve received your message and will respond within 1-2 business days. 
                  I look forward to connecting with you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell me a little about what brings you to therapy..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide uppercase text-sm hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>

                <p className="text-sm text-muted-foreground text-center">
                  Your information is confidential and will only be used to respond to your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
