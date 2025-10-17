import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useState } from "react";
import { Spinner } from "./ui/spinner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: `New Contact from ${formData.firstName} ${formData.lastName}`,
          from_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          "First Name": formData.firstName,
          "Last Name": formData.lastName,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        console.error("Web3Forms error:", result);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:py-40">
      <div className="container mx-auto">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-20 text-center"
          data-aos="fade-up"
        >
          Let&apos;s Connect
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-8 lg:mt-12 mx-auto">
          {/* Contact form */}
          <Card
            className="p-6 sm:p-8 lg:-my-12 bg-card/60 border-border"
            data-aos="fade-right"
          >
            <h1 className="text-primary text-2xl sm:text-3xl font-semibold mb-4">
              Let&apos;s work together
            </h1>
            <p className="text-muted-foreground mb-4 text-sm sm:text-[15px]">
              Ready to collaborate or discuss opportunities? I'm just a message
              away. Drop your details below, and I'll get back to you promptly
              to explore how we can work together.
            </p>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 text-sm">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 text-sm">
                Failed to send message. Please try again or contact me directly
                via email.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm sm:text-base"
                  placeholder="First Name *"
                />
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm sm:text-base"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm sm:text-base"
                  placeholder="Email Address *"
                />
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm sm:text-base"
                  placeholder="Phone Number"
                />
              </div>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none text-sm sm:text-base"
                placeholder="Type your message here *"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-background hover:bg-primary/90 transition-colors text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <Spinner /> Sending
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact info */}
          <div className="space-y-4 sm:space-y-6 my-auto" data-aos="fade-left">
            <Card className="p-4 sm:p-6 hover:border-primary transition-all duration-300 group">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">
                    Email
                  </h3>
                  <a
                    href="mailto:dieudonneibikoraneza13@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                  >
                    dieudonneibikoraneza13@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 hover:border-primary transition-all duration-300 group">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">
                    Phone
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    +250-796-086-040
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 hover:border-primary transition-all duration-300 group">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">
                    Address
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Kigali, Rwanda
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
