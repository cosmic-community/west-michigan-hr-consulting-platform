'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, Clock, Send, Heart, Sparkles, Star } from 'lucide-react'
import WhimsicalElements from '@/components/WhimsicalElements'
import { ContactFormData } from '@/types'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitError('')

    try {
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock successful submission
      setSubmitSuccess(true)
      reset()
    } catch (error) {
      setSubmitError('Oops! Our magic wand malfunctioned. Please try again! 🪄')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-whimsy py-20 relative">
        <WhimsicalElements />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="text-handwriting text-6xl text-accent-600 mb-6">
              Let's chat about
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-secondary-900 mb-8 font-whimsy">
              Your Magic Needs
            </h1>
            <p className="text-xl text-secondary-700 max-w-4xl mx-auto font-whimsy leading-relaxed">
              Ready to transform your workplace? We'd love to hear about your HR challenges 
              and dreams! Schedule your completely free, no-pressure consultation and let's 
              discover what magic we can create together ✨
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 section-warm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-whimsy p-10 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 text-2xl opacity-20 floating-element">✨</div>
              <div className="absolute bottom-6 left-6 text-xl opacity-30 floating-element animation-delay-400">💜</div>
              
              <div className="text-center mb-8">
                <div className="text-handwriting text-3xl text-accent-600 mb-2">
                  Your magical journey starts here
                </div>
                <h2 className="text-2xl font-bold text-secondary-900 font-whimsy">
                  Schedule Your Free Magic Session
                </h2>
              </div>

              {submitSuccess && (
                <div className="mb-6 p-6 bg-green-50 border-2 border-green-200 rounded-2xl text-center">
                  <div className="text-4xl mb-2">🎉</div>
                  <p className="text-green-800 font-whimsy">
                    Hooray! Your message has been sent! We'll get back to you within 24 hours 
                    with some serious HR magic. Can't wait to chat! ✨
                  </p>
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-6 bg-red-50 border-2 border-red-200 rounded-2xl text-center">
                  <div className="text-4xl mb-2">😅</div>
                  <p className="text-red-800 font-whimsy">{submitError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2 font-whimsy">
                      Your Magical Name ✨
                    </label>
                    <input
                      {...register('name', { required: 'We need to know what to call you!' })}
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border-2 border-warm-300 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-300 font-whimsy"
                      placeholder="Your wonderful name"
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1 font-whimsy">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2 font-whimsy">
                      Email Address 📧
                    </label>
                    <input
                      {...register('email', { 
                        required: 'How else can we send you magic?',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Hmm, that email looks a bit wonky!'
                        }
                      })}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border-2 border-warm-300 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-300 font-whimsy"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1 font-whimsy">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2 font-whimsy">
                      Your Amazing Company 🏢
                    </label>
                    <input
                      {...register('company', { required: 'Tell us about your business!' })}
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 border-2 border-warm-300 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-300 font-whimsy"
                      placeholder="Your company name"
                    />
                    {errors.company && (
                      <p className="text-red-600 text-sm mt-1 font-whimsy">{errors.company.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2 font-whimsy">
                      Phone Number 📞
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border-2 border-warm-300 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-300 font-whimsy"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service_interest" className="block text-sm font-medium text-secondary-700 mb-2 font-whimsy">
                    What Kind of Magic Do You Need? 🪄
                  </label>
                  <select
                    {...register('service_interest')}
                    id="service_interest"
                    className="w-full px-4 py-3 border-2 border-warm-300 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-300 font-whimsy"
                  >
                    <option value="">Choose your magic potion (optional)</option>
                    <option value="hr-strategy">HR Strategy & Planning Magic</option>
                    <option value="employee-relations">Employee Relations Wizardry</option>
                    <option value="compliance">Compliance & Risk Shield</option>
                    <option value="organizational-development">Culture Transformation</option>
                    <option value="other">Something Totally Different</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2 font-whimsy">
                    Tell Us Your Story 💬
                  </label>
                  <textarea
                    {...register('message', { required: 'We want to hear all about it!' })}
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-warm-300 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-300 font-whimsy"
                    placeholder="Share your HR challenges, dreams, or anything you'd like us to know! The more details, the better we can help sprinkle some magic on your situation ✨"
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1 font-whimsy">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-whimsy flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed py-4 text-lg group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Casting magic spell...</span>
                      <div className="text-xl">🪄</div>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:animate-wiggle" />
                      <span>Send My Magic Message</span>
                      <Sparkles className="w-5 h-5 group-hover:animate-wiggle animation-delay-200" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="card-whimsy p-8 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 text-xl opacity-20 floating-element">💜</div>
                
                <h3 className="text-2xl font-bold text-secondary-900 mb-6 font-whimsy text-center">
                  Let's Connect! 
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-secondary-900 font-whimsy">Ring Ring! 📞</p>
                      <a 
                        href="tel:+1234567890" 
                        className="text-accent-600 hover:text-accent-700 font-whimsy hover:underline decoration-2 decoration-accent-400"
                      >
                        (123) 456-7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-warm-400 to-warm-600 rounded-2xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-secondary-900 font-whimsy">Email Magic ✨</p>
                      <a 
                        href="mailto:hello@hrmagic.com" 
                        className="text-accent-600 hover:text-accent-700 font-whimsy hover:underline decoration-2 decoration-accent-400"
                      >
                        hello@hrmagic.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-secondary-900 font-whimsy">Our Magic Zone 🏔️</p>
                      <p className="text-secondary-700 font-whimsy">West Michigan Region</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-secondary-900 font-whimsy">Magic Response Time ⚡</p>
                      <p className="text-secondary-700 font-whimsy">Within 24 hours (usually much faster!)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-whimsy p-8 bg-gradient-warm relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 text-xl opacity-30 floating-element">⭐</div>
                <div className="absolute bottom-6 right-6 text-2xl opacity-20 floating-element animation-delay-400">✨</div>
                
                <h3 className="text-xl font-bold text-secondary-900 mb-6 font-whimsy text-center">
                  What to Expect From Your Magic Session
                </h3>
                
                <ul className="space-y-4 text-secondary-700">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent-400 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                      1
                    </div>
                    <div className="font-whimsy">
                      <strong>Free consultation</strong> (30-60 minutes of pure magic - no cost, no pressure!)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-warm-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                      2
                    </div>
                    <div className="font-whimsy">
                      <strong>Deep dive</strong> into your current HR dreams and challenges
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                      3
                    </div>
                    <div className="font-whimsy">
                      <strong>Custom magic spells</strong> (aka practical solutions) just for you
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                      4
                    </div>
                    <div className="font-whimsy">
                      <strong>Clear next steps</strong> and a roadmap to your magical workplace
                    </div>
                  </li>
                </ul>
                
                <div className="text-center mt-6">
                  <div className="text-handwriting text-lg text-accent-600">
                    No boring consultants here - just real people who care! 💜
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}