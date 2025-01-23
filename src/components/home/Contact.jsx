// src/components/home/Contact.jsx
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import DynamicBackground from './DynamicBackground';
import { Github, Linkedin, Facebook, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        }
      );
      
      if (result.status === 200) {
        toast.success('Message sent successfully!', {
          duration: 4000,
          style: {
            background: '#0a192f',
            color: '#fff',
            border: '1px solid #22d3ee',
          },
          iconTheme: {
            primary: '#22d3ee',
            secondary: '#0a192f',
          },
        });
        form.current.reset();
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again.', {
        duration: 4000,
        style: {
          background: '#0a192f',
          color: '#fff',
          border: '1px solid #ef4444',
        },
        iconTheme: {
          primary: '#ef4444',
          secondary: '#0a192f',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/Indra-photon'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/indranil-maiti-7542941b7/'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6" />,
      url: 'https://x.com/Nil_phy_dreamer'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-6 h-6" />,
      url: 'https://www.facebook.com/indranil.maiti.564/'
    }
  ];

  return (
    <section className="relative min-h-screen bg-[#0a192f] py-20">
      <DynamicBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">Get In Touch</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form 
              ref={form} 
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <div>
                <label htmlFor="user_name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 bg-dark-secondary/30 border border-cyan-400/20 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 text-white backdrop-blur-sm"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 bg-dark-secondary/30 border border-cyan-400/20 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 text-white backdrop-blur-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-dark-secondary/30 border border-cyan-400/20 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 text-white backdrop-blur-sm"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg 
                          hover:bg-cyan-400/10 transition-all duration-300 
                          ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Social Links & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8 sm:mt-24"
          >
            <div className="bg-dark-secondary/30 backdrop-blur-sm p-6 rounded-lg border border-cyan-400/20">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-dark-secondary/30 backdrop-blur-sm p-6 rounded-lg border border-cyan-400/20">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">Location</h3>
              <p className="text-gray-300">
                Torun, Poland<br />
                Open to Remote Opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;