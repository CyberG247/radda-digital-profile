
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Vision() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gubernatorial-navy py-24 md:py-32 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Vision & Policy Agenda</h1>
            <p className="text-xl text-white/80">
              Governor Radda's strategic vision and policy framework for the transformation of Katsina State.
            </p>
            <Button 
              variant="outline" 
              className="mt-6 text-white border-white hover:bg-white hover:text-gubernatorial-navy flex items-center gap-2"
            >
              <Download size={16} /> Download Vision Document
            </Button>
          </div>
        </div>
      </section>

      {/* Vision Overview Section */}
      <section className="py-16 bg-white dark:bg-gubernatorial-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Our Vision for Katsina State" 
                subtitle="A Strategic Framework for Development"
              />
              <div className="prose max-w-none dark:prose-invert">
                <p>
                  Under the leadership of His Excellency, Dr. Umaru Dikko Radda, Katsina State is embarking on a transformative 
                  journey guided by a comprehensive vision that aims to harness the state's potential for the benefit of all citizens.
                </p>
                <p>
                  The vision is anchored on the principles of inclusive governance, sustainable development, economic diversification, 
                  and social equity. It represents a blueprint for addressing the state's challenges while capitalizing on its 
                  unique strengths and opportunities.
                </p>
                <blockquote>
                  "Our vision is to transform Katsina into a model state where every citizen has the opportunity to thrive, where 
                  our communities are safe and prosperous, where our economy is diversified and resilient, and where our future 
                  generations can inherit a sustainable environment."
                  <footer>— H.E. Dr. Umaru Dikko Radda</footer>
                </blockquote>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6" 
                  alt="Governor's Vision" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-nigeria-green text-white p-6 rounded-lg shadow-lg w-64">
                  <h3 className="text-xl font-bold mb-2">Katsina 2030</h3>
                  <p className="text-sm">
                    A long-term development plan aimed at transforming Katsina into one of Nigeria's most developed states by 2030.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars Section */}
      <section className="py-16 bg-gubernatorial-light dark:bg-gubernatorial-navy/30">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Strategic Development Pillars" 
            subtitle="Key Focus Areas of Our Vision"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Pillar 1 */}
            <div className="bg-white dark:bg-gubernatorial-navy/30 p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-nigeria-green text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Economic Diversification</h3>
              <p className="text-gubernatorial-charcoal/80 dark:text-white/80 mb-4">
                Transforming the state's economy by reducing dependence on federal allocations and developing key sectors like agriculture, 
                mining, and manufacturing to create sustainable wealth and employment opportunities.
              </p>
              <ul className="list-disc pl-5 text-gubernatorial-charcoal/80 dark:text-white/80 space-y-2">
                <li>Modern agricultural practices and value chains</li>
                <li>Small and medium enterprise development</li>
                <li>Investment promotion and ease of doing business</li>
                <li>Skills development and entrepreneurship</li>
              </ul>
            </div>
            
            {/* Pillar 2 */}
            <div className="bg-white dark:bg-gubernatorial-navy/30 p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-nigeria-green text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Human Capital Development</h3>
              <p className="text-gubernatorial-charcoal/80 dark:text-white/80 mb-4">
                Building a knowledgeable, skilled, and healthy population through comprehensive reforms and investments in education, 
                healthcare, and social welfare systems.
              </p>
              <ul className="list-disc pl-5 text-gubernatorial-charcoal/80 dark:text-white/80 space-y-2">
                <li>Quality education at all levels</li>
                <li>Universal healthcare coverage</li>
                <li>Youth and women empowerment</li>
                <li>Social protection for vulnerable groups</li>
              </ul>
            </div>
            
            {/* Pillar 3 */}
            <div className="bg-white dark:bg-gubernatorial-navy/30 p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-nigeria-green text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Infrastructure Development</h3>
              <p className="text-gubernatorial-charcoal/80 dark:text-white/80 mb-4">
                Building and maintaining critical infrastructure to support economic growth, improve quality of life, and enhance connectivity 
                within the state and with neighboring regions.
              </p>
              <ul className="list-disc pl-5 text-gubernatorial-charcoal/80 dark:text-white/80 space-y-2">
                <li>Road networks and transportation systems</li>
                <li>Water supply and sanitation</li>
                <li>Energy and power infrastructure</li>
                <li>Digital connectivity and ICT development</li>
              </ul>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Pillar 4 */}
            <div className="bg-white dark:bg-gubernatorial-navy/30 p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-nigeria-green text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                4
              </div>
              <h3 className="text-xl font-bold mb-4">Security & Governance</h3>
              <p className="text-gubernatorial-charcoal/80 dark:text-white/80 mb-4">
                Ensuring peace, security, and effective governance through innovative security strategies, strengthened institutions, 
                and transparent, accountable, and participatory governance.
              </p>
              <ul className="list-disc pl-5 text-gubernatorial-charcoal/80 dark:text-white/80 space-y-2">
                <li>Community-based security initiatives</li>
                <li>Intelligence-led policing and surveillance</li>
                <li>Public service reforms and digitalization</li>
                <li>Transparency and anti-corruption measures</li>
              </ul>
            </div>
            
            {/* Pillar 5 */}
            <div className="bg-white dark:bg-gubernatorial-navy/30 p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-nigeria-green text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                5
              </div>
              <h3 className="text-xl font-bold mb-4">Environmental Sustainability</h3>
              <p className="text-gubernatorial-charcoal/80 dark:text-white/80 mb-4">
                Protecting the environment and promoting sustainable practices to mitigate the impacts of climate change, desertification, 
                and other environmental challenges facing the state.
              </p>
              <ul className="list-disc pl-5 text-gubernatorial-charcoal/80 dark:text-white/80 space-y-2">
                <li>Climate change adaptation and mitigation</li>
                <li>Afforestation and land reclamation</li>
                <li>Sustainable agricultural practices</li>
                <li>Renewable energy development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Framework Section */}
      <section className="py-16 bg-white dark:bg-gubernatorial-charcoal">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Implementation Framework" 
            subtitle="Turning Vision into Reality"
            centered
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gubernatorial-light dark:bg-gubernatorial-navy/30 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Our Approach to Implementation</h3>
              <p className="text-gubernatorial-charcoal/80 dark:text-white/80 mb-6">
                The success of any vision lies in effective implementation. Governor Radda's administration has developed a robust 
                framework for translating the vision into concrete actions and measurable results.
              </p>
              
              <div className="space-y-6">
                {/* Implementation Component 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-nigeria-green text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Strategic Planning & Coordination</h4>
                    <p className="text-gubernatorial-charcoal/80 dark:text-white/80">
                      A centralized coordination unit in the Governor's office oversees implementation across all sectors, ensuring 
                      alignment with the overall vision and efficient resource allocation.
                    </p>
                  </div>
                </div>
                
                {/* Implementation Component 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-nigeria-green text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Performance Management System</h4>
                    <p className="text-gubernatorial-charcoal/80 dark:text-white/80">
                      A robust monitoring and evaluation framework tracks progress, measures outcomes, and ensures accountability 
                      through regular performance reviews and public reporting.
                    </p>
                  </div>
                </div>
                
                {/* Implementation Component 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-nigeria-green text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Partnerships & Collaboration</h4>
                    <p className="text-gubernatorial-charcoal/80 dark:text-white/80">
                      Strategic partnerships with federal agencies, development partners, private sector, civil society, and communities 
                      to leverage resources and expertise for effective implementation.
                    </p>
                  </div>
                </div>
                
                {/* Implementation Component 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-nigeria-green text-white flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Citizen Engagement & Feedback</h4>
                    <p className="text-gubernatorial-charcoal/80 dark:text-white/80">
                      Regular town halls, community forums, and digital platforms enable citizens to participate in the implementation process 
                      and provide feedback on government programs and services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-gubernatorial-navy text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Download the Complete Vision Document</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Access the detailed vision document outlining Governor Radda's comprehensive plan for the development and transformation of Katsina State.
          </p>
          <Button size="lg" className="bg-white text-gubernatorial-navy hover:bg-white/90 flex items-center gap-2 mx-auto">
            <Download size={18} /> Download Full Document
          </Button>
        </div>
      </section>
    </>
  );
}
