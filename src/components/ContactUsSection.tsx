import { useState } from "react";
import { Mail, Phone, Send, Loader } from "lucide-react";
import emailjs from "@emailjs/browser";

// EmailJS configuration - move these to environment variables

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

const ContactUsSection = () => {
  console.log(EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    const { fullName, email, message } = formData;
    return !!(fullName.trim() && email.trim() && message.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fill in all required fields (Name, Email, Message)");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        message: formData.message,
        to_email: "kayode@intzom.co.uk", // Primary recipient
        // to_email: "kayodeoshodi400@gmail.com", // Primary recipient
        cc_email: "info@intzom.co.uk", // CC recipient
        reply_to: formData.email,
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#1B263B] via-transparent to-[#0D1B2A] py-16 lg:py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 xl:gap-16 items-center">
          {/* Left Side - Contact Information */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-[#1B263B] mb-8">
                Let's get in touch
              </h3>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">
                    ✅ Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">
                    ❌ Failed to send message. Please try again or contact us
                    directly.
                  </p>
                </div>
              )}

              <div className="space-y-6">
                {/* Full Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="kayode@intzom.co.uk"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message here"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="bg-[#1B263B] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#415A77] focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-4">
                      <Loader className="h-4 w-4 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-4">
                      <Send className="h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* Right Side - Contact Form */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Contact Us
              </h2>
              <p className="text-lg text-purple-100 leading-relaxed">
                Not sure what you need? The team at Square Events will be happy
                to listen to you and suggest event ideas you hadn't considered
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:info@intzom.co.uk?subject=IT Services Inquiry&body=Hello IntZom Team,%0A%0AI'm interested in learning more about your IT services.%0A%0ABest regards"
                className="flex items-center space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-purple-100 text-sm">Email</p>
                    <p className="text-white font-medium">info@intzom.co.uk</p>
                  </div>
                </div>
              </a>
              <a
                href="tel:+447526097052"
                className="flex items-center space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-purple-100 text-sm">Support</p>
                    <p className="text-white font-medium">(+44) 752 6097 052</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
