
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SectionHeading from "@/components/SectionHeading";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Pin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", data);
      setIsSubmitting(false);
      
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out. We will get back to you shortly.",
      });
      
      form.reset();
    }, 1500);
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gubernatorial-navy py-24 md:py-32 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/80">
              Get in touch with the Office of the Governor. We value your feedback, questions, and suggestions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information Section */}
      <section className="py-16 bg-white dark:bg-gubernatorial-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionHeading 
                title="Get in Touch" 
                subtitle="We're Here to Listen and Respond"
              />
              
              <div className="space-y-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-nigeria-green text-white flex items-center justify-center">
                    <Pin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                    <p className="text-gubernatorial-charcoal/80 dark:text-white/80">
                      Office of the Executive Governor<br />
                      Government House, Katsina<br />
                      Katsina State, Nigeria
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-nigeria-green text-white flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Call Us</h3>
                    <p className="text-gubernatorial-charcoal/80 dark:text-white/80">
                      Office Phone: +234 000 0000 000<br />
                      Public Relations: +234 000 0000 000<br />
                      Media Office: +234 000 0000 000
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-nigeria-green text-white flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email Us</h3>
                    <p className="text-gubernatorial-charcoal/80 dark:text-white/80">
                      General Inquiries: info@umarudikkoradda.com<br />
                      Press & Media: media@umarudikkoradda.com<br />
                      Support: support@umarudikkoradda.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gubernatorial-light dark:bg-gubernatorial-navy/30 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Office Hours</h3>
                <p className="text-gubernatorial-charcoal/80 dark:text-white/80 mb-4">
                  Our office is open from Monday to Friday, 8:00 AM to 4:00 PM (West African Time).
                </p>
                <p className="text-gubernatorial-charcoal/80 dark:text-white/80">
                  For urgent matters outside office hours, please contact the emergency line: +234 000 0000 000
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-white dark:bg-gubernatorial-navy/30 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="johndoe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+234 000 0000 000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="How can we help you?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please provide details about your inquiry..." 
                              className="min-h-32"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full bg-nigeria-green hover:bg-nigeria-green/90" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Submit Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-gubernatorial-light dark:bg-gubernatorial-navy/30 py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Find Us" 
            subtitle="Location of the Governor's Office"
            centered
          />
          
          <div className="bg-white dark:bg-gubernatorial-navy/30 rounded-lg shadow-lg overflow-hidden h-96">
            {/* In a real implementation, this would be a Google Maps iframe */}
            <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
              <p className="text-gubernatorial-charcoal/70 dark:text-white/70">
                Map Placeholder - In a real implementation, this would be an interactive map
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
