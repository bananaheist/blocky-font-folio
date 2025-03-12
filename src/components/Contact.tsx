
import React, { useState } from "react";
import PixelCard from "./PixelCard";
import PixelButton from "./PixelButton";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    // Here you would normally send the data to your server or a form service
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-pixel-black px-4 py-2 mb-2">
            <span className="text-pixel-white font-pixel text-xs">GET IN TOUCH</span>
          </div>
          <h2 className="font-pixel text-2xl">CONTACT ME</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <PixelCard>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block font-pixel text-sm mb-2"
                >
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="pixel-input w-full"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block font-pixel text-sm mb-2"
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pixel-input w-full"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block font-pixel text-sm mb-2"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="pixel-input w-full resize-none"
                ></textarea>
              </div>

              <div className="text-center">
                <PixelButton type="submit" variant="success" size="md">
                  SEND MESSAGE
                </PixelButton>
              </div>
            </form>
          </PixelCard>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <PixelCard className="text-center p-4">
              <div className="w-8 h-8 bg-pixel-blue mx-auto mb-2"></div>
              <h3 className="font-pixel text-xs mb-1">EMAIL</h3>
              <p className="font-pixel-mono text-sm">hello@pixelfolio.com</p>
            </PixelCard>

            <PixelCard className="text-center p-4">
              <div className="w-8 h-8 bg-pixel-red mx-auto mb-2"></div>
              <h3 className="font-pixel text-xs mb-1">PHONE</h3>
              <p className="font-pixel-mono text-sm">+1 234 567 890</p>
            </PixelCard>

            <PixelCard className="text-center p-4">
              <div className="w-8 h-8 bg-pixel-green mx-auto mb-2"></div>
              <h3 className="font-pixel text-xs mb-1">LOCATION</h3>
              <p className="font-pixel-mono text-sm">PIXEL CITY, PC</p>
            </PixelCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
