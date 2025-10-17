"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Animation variants for consistent motion design
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-red-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fed7aa' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Main Headline */}
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Master Mandarin with{" "}
            <span className="text-orange-500">Confidence</span>
            <br />
            <span className="text-lg md:text-xl lg:text-2xl font-normal text-gray-600 mt-4 block">
              From Classroom Struggles to Top Grades
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Renn Tuition Centre helps students gain fluency, confidence, and top grades through engaging Mandarin lessons designed for real improvement.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeInUp}>
            <button 
              onClick={() => {
                const formSection = document.getElementById('contact-form');
                formSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-xl px-12 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out"
            >
              Book a Call
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Benefits Section Component
function BenefitsSection() {
  const benefits = [
    {
      icon: "👨‍🏫",
      title: "Personalized Guidance from Experienced Tutors",
      description: "One-on-one attention tailored to your child&apos;s learning style and pace."
    },
    {
      icon: "💬",
      title: "Interactive Learning That Builds Real Confidence",
      description: "Engaging activities and real-world applications that make Mandarin stick."
    },
    {
      icon: "⭐",
      title: "Proven Track Record of A+ Mandarin Results",
      description: "Our students consistently achieve top grades and improved fluency."
    },
    {
      icon: "🤝",
      title: "Supportive Environment for Every Student",
      description: "A nurturing space where every student feels valued and encouraged to succeed."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-16"
          >
            Why Choose Renn Tuition Centre?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// About Section Component
function AboutSection() {
  return (
    <section id="about-section" className="py-16 md:py-24 bg-gradient-to-r from-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
              About Renn Tuition Centre
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At Renn Tuition Centre, we believe every student has the potential to excel in Mandarin. 
              Our experienced tutors use proven teaching methods combined with personalized attention to help students 
              overcome challenges and achieve their academic goals.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We create a supportive learning environment where students feel confident to practice, 
              make mistakes, and grow. Our track record speaks for itself – students consistently improve 
              their grades and develop genuine fluency in Mandarin.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Image placeholder with Mandarin characters */}
            <div className="bg-gradient-to-br from-orange-200 to-red-200 rounded-2xl p-12 text-center shadow-lg">
              <div className="text-6xl mb-4">📚</div>
              <div className="text-4xl mb-4 text-gray-800">中文</div>
              <div className="text-lg text-gray-600">Learning Together</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section Component
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What age group do you teach?",
      answer: "We teach students from primary school through secondary school, typically ages 7 to 18. Our programs are tailored to different age groups and learning levels."
    },
    {
      question: "Do you offer trial classes?",
      answer: "Yes! We offer a complimentary trial class so you can experience our teaching methods and see if we&apos;re the right fit for your child&apos;s learning needs."
    },
    {
      question: "Are lessons conducted online or in-person?",
      answer: "We offer both online and in-person lessons to accommodate different preferences and schedules. All our lessons are interactive and engaging regardless of the format."
    },
    {
      question: "How long is each class?",
      answer: "Our standard classes are 60 minutes long, which provides the perfect balance of focused learning without overwhelming students. We also offer intensive sessions when needed."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-16"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-orange-100 hover:to-red-100 transition-all duration-300"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="text-xl font-bold text-gray-900">{faq.question}</h3>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl text-orange-500"
                  >
                    ▼
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// CTA Form Section Component
function CTAFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", whatsapp: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-form" className="py-16 md:py-24 bg-gradient-to-br from-orange-500 to-red-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Help Your Child Excel in Mandarin?
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-orange-100 mb-12"
          >
            Book a quick call and let&apos;s find the best learning plan for your child.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h3>
                  <p className="text-gray-700">We&apos;ll be in touch within 24 hours to schedule your call.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-left text-gray-700 font-bold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="whatsapp" className="block text-left text-gray-700 font-bold mb-2">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                      placeholder="+65 9123 4567"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-xl px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out"
                  >
                    Book a Call
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer Section Component
function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © {currentYear} Renn Tuition Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <FAQSection />
      <CTAFormSection />
      <FooterSection />
    </div>
  );
}