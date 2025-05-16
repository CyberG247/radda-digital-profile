
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-gradient-to-r from-gubernatorial-light to-white dark:from-gubernatorial-charcoal dark:to-gubernatorial-navy">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/efa0c82d-58d0-4fe2-be0f-d384040d6371.png')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gubernatorial-charcoal dark:text-white">
              His Excellency,<br />
              <span className="text-nigeria-green">Dr. Umaru Dikko Radda</span>
            </h1>
            <p className="text-xl mb-8 text-gubernatorial-charcoal/80 dark:text-white/80 max-w-xl">
              Executive Governor of Katsina State, committed to transparency, progress, and improving the lives of all citizens.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-nigeria-green hover:bg-nigeria-green/90">
                <Link to="/about">Meet the Governor</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/vision">Explore Vision</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-nigeria-green shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Governor Umaru Dikko Radda" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gubernatorial-navy text-white py-2 px-4 rounded-full text-sm font-medium shadow-md">
                2023 - Present
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white dark:bg-gubernatorial-charcoal/50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="About The Governor" 
            subtitle="Leadership with Vision and Integrity"
            centered
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-4">Dr. Umaru Dikko Radda</h3>
              <p className="mb-4 text-gubernatorial-charcoal/80 dark:text-white/80">
                His Excellency, Dr. Umaru Dikko Radda, is the Executive Governor of Katsina State, Nigeria. With a distinguished career 
                in public service and a strong educational background, Governor Radda brings wealth of experience to his role.
              </p>
              <p className="mb-6 text-gubernatorial-charcoal/80 dark:text-white/80">
                Before assuming office, he served in various capacities that prepared him for the challenges of governance. His leadership 
                philosophy centers on inclusive growth, sustainable development, and citizen engagement.
              </p>
              <Button asChild className="bg-nigeria-green hover:bg-nigeria-green/90">
                <Link to="/about" className="flex items-center gap-2">
                  Full Biography <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gubernatorial-light dark:bg-gubernatorial-navy/30 p-6 rounded-lg shadow-lg">
                <h4 className="font-bold mb-4 text-nigeria-green">Key Milestones</h4>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nigeria-green flex items-center justify-center text-white text-sm">
                      1
                    </div>
                    <div>
                      <h5 className="font-semibold">Ph.D in Agricultural Extension and Rural Development</h5>
                      <p className="text-gubernatorial-charcoal/70 dark:text-white/70 text-sm">Ahmadu Bello University, Zaria</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nigeria-green flex items-center justify-center text-white text-sm">
                      2
                    </div>
                    <div>
                      <h5 className="font-semibold">Former Director-General of SMEDAN</h5>
                      <p className="text-gubernatorial-charcoal/70 dark:text-white/70 text-sm">Small and Medium Enterprise Development Agency of Nigeria</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nigeria-green flex items-center justify-center text-white text-sm">
                      3
                    </div>
                    <div>
                      <h5 className="font-semibold">Elected as Executive Governor</h5>
                      <p className="text-gubernatorial-charcoal/70 dark:text-white/70 text-sm">Katsina State, May 2023</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Preview Section */}
      <section className="py-20 bg-gubernatorial-light dark:bg-gubernatorial-charcoal">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Key Projects & Initiatives" 
            subtitle="Building a Better Katsina State"
            centered
          />

          <div className="grid md:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white dark:bg-gubernatorial-navy/30 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1494059980473-813e73ee784b" 
                  alt="Education Reform" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="text-xs font-semibold text-nigeria-green mb-2">Education</div>
                <h3 className="text-xl font-bold mb-3">Education Reform Initiative</h3>
                <p className="mb-4 text-gubernatorial-charcoal/80 dark:text-white/80">
                  Comprehensive overhaul of the education sector with focus on infrastructure, teacher training, and curriculum development.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/projects">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white dark:bg-gubernatorial-navy/30 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d" 
                  alt="Healthcare System" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="text-xs font-semibold text-nigeria-green mb-2">Healthcare</div>
                <h3 className="text-xl font-bold mb-3">Modern Healthcare System</h3>
                <p className="mb-4 text-gubernatorial-charcoal/80 dark:text-white/80">
                  Upgrading healthcare facilities across the state and implementing new health insurance schemes for residents.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/projects">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white dark:bg-gubernatorial-navy/30 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998" 
                  alt="Agricultural Development" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="text-xs font-semibold text-nigeria-green mb-2">Agriculture</div>
                <h3 className="text-xl font-bold mb-3">Agricultural Development</h3>
                <p className="mb-4 text-gubernatorial-charcoal/80 dark:text-white/80">
                  Supporting farmers with modern tools, seeds, and techniques to boost agricultural productivity and food security.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/projects">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-nigeria-green hover:bg-nigeria-green/90">
              <Link to="/projects" className="flex items-center gap-2">
                View All Projects <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vision Preview Section */}
      <section className="py-20 bg-gubernatorial-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <SectionHeading 
                title="Vision for Katsina State" 
                subtitle="A Strategic Roadmap for Prosperity"
                className="text-white"
              />
              <p className="mb-6">
                Governor Radda's administration is guided by a comprehensive vision for transforming Katsina State into a model of sustainable 
                development, economic prosperity, and social well-being. His strategic priorities include:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nigeria-green flex items-center justify-center text-white text-sm mt-1">
                    ✓
                  </div>
                  <div>
                    <h5 className="font-semibold">Economic Diversification</h5>
                    <p className="text-white/70">Reducing dependence on federal allocations through agricultural modernization and industrial growth.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nigeria-green flex items-center justify-center text-white text-sm mt-1">
                    ✓
                  </div>
                  <div>
                    <h5 className="font-semibold">Human Capital Development</h5>
                    <p className="text-white/70">Investing in education, healthcare, and skills acquisition to build a productive workforce.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nigeria-green flex items-center justify-center text-white text-sm mt-1">
                    ✓
                  </div>
                  <div>
                    <h5 className="font-semibold">Security Enhancement</h5>
                    <p className="text-white/70">Implementing innovative strategies to ensure peace and stability across the state.</p>
                  </div>
                </li>
              </ul>
              <Button asChild variant="outline" className="text-white border-white hover:bg-white hover:text-gubernatorial-navy">
                <Link to="/vision" className="flex items-center gap-2">
                  Explore Complete Vision <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6" 
                alt="Governor's Vision for Katsina" 
                className="rounded-lg shadow-2xl"
              />
              <div className="bg-gubernatorial-gold/90 text-gubernatorial-navy p-6 rounded-lg shadow-lg -mt-20 ml-10 mr-10 relative z-10">
                <h4 className="text-xl font-bold mb-2">"Our goal is to leave no one behind."</h4>
                <p className="italic">— His Excellency, Dr. Umaru Dikko Radda</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-white dark:bg-gubernatorial-charcoal/50 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading 
            title="Get in Touch" 
            subtitle="Connect with the Office of the Governor"
            centered
          />
          <p className="mb-8">
            Have questions, suggestions, or feedback? Reach out to the Office of the Governor. Your voice matters in building a better Katsina State.
          </p>
          <Button asChild size="lg" className="bg-nigeria-green hover:bg-nigeria-green/90">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
