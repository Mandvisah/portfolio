import React, { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';


const Contact = () => {
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: ""
  })

  const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
          // Use relative path - handled by Vite Proxy (Dev) and Netlify Redirects (Prod)
          const apiUrl = "/api/contact";
          
          const response = await fetch(apiUrl, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
          });

          const contentType = response.headers.get("content-type");
          if (response.ok) {
              alert("Message Sent!");
              setFormData({ name: "", email: "", message: "" });
          } else {
              // Handle cases where the server returns HTML (like 404 or 500 pages) instead of JSON
              if (contentType && contentType.indexOf("application/json") !== -1) {
                  const result = await response.json();
                  alert(`Failed to send message: ${result.error || "Unknown Error"}`);
              } else {
                  const text = await response.text();
                  console.error("Server Response:", text);
                  alert(`Server error (${response.status}): The backend is likely not reachable.`);
              }
          }
      } catch (error) {
          console.error(error);
          alert(`An error occurred: ${error.message}. Please check if the server is running.`);
      }
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4">
      <RevealOnScroll>
        <div className="px-4 w-full md:w-[500px]">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Get In <span className="text-blue-500">Touch</span></h2>
          <p className="text-center text-gray-400 mb-6 font-medium">
            I'm currently looking for new opportunities, my inbox is always open. <br/>
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-gray-800/50 p-8 rounded-xl border border-white/10 shadow-2xl space-y-6">
             <div>
                 <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                 <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="Your Name..." 
                    className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                 />
             </div>
             <div>
                 <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                 <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="Your.email@example.com..." 
                    className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                 />
             </div>
             <div>
                 <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                 <textarea 
                    id="message"
                    name="message"
                    placeholder="Your Message..." 
                    className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 h-32 resize-none"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                 ></textarea>
             </div>
             
             <button type="submit" className="w-full bg-blue-600 text-white font-medium py-3 rounded hover:bg-blue-700 transition hover:-translate-y-0.5 shadow-lg shadow-blue-500/20">
                 Send Message
             </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
