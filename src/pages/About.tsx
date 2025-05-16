
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gubernatorial-navy py-24 md:py-32 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About The Governor</h1>
            <p className="text-xl text-white/80">
              His Excellency, Dr. Umaru Dikko Radda - A dedicated leader committed to transforming Katsina State.
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 bg-white dark:bg-gubernatorial-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gubernatorial-light dark:bg-gubernatorial-navy/30 p-6 rounded-lg shadow-md">
                  <div className="mb-6">
                    <img 
                      src="/lovable-uploads/b8a9c018-13d1-4187-b93d-6c750142339d.png" 
                      alt="Governor Umaru Dikko Radda" 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">At a Glance</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="font-medium">Full Name:</span>
                      <span>Dr. Umaru Dikko Radda</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Position:</span>
                      <span>Executive Governor</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">State:</span>
                      <span>Katsina</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Assumed Office:</span>
                      <span>May 29, 2023</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Political Party:</span>
                      <span>[Party Name]</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <SectionHeading 
                title="Biography" 
                subtitle="The Journey of Leadership"
              />

              <div className="prose max-w-none dark:prose-invert">
                <p className="mb-4">
                  His Excellency, Dr. Umaru Dikko Radda, is the Executive Governor of Katsina State, Nigeria. Born and raised in Katsina, 
                  he has deep roots in the community and a profound understanding of the challenges and aspirations of its people.
                </p>

                <h3>Early Life and Education</h3>
                <p className="mb-4">
                  Dr. Radda began his educational journey in Katsina before pursuing higher education. He holds a Doctorate degree in Agricultural 
                  Extension and Rural Development from Ahmadu Bello University, Zaria, along with several other academic qualifications and 
                  professional certifications.
                </p>

                <h3>Professional Career</h3>
                <p className="mb-4">
                  Prior to becoming Governor, Dr. Radda served as the Director-General of the Small and Medium Enterprises Development Agency 
                  of Nigeria (SMEDAN), where he implemented numerous initiatives that boosted entrepreneurship and created employment opportunities 
                  across the nation.
                </p>

                <p className="mb-4">
                  His extensive experience in public service also includes roles in [additional roles and positions], where he consistently 
                  demonstrated exceptional leadership abilities and a commitment to effective governance.
                </p>

                <h3>Political Journey</h3>
                <p className="mb-4">
                  Dr. Radda's entry into politics was driven by a sincere desire to bring positive change to his community and state. 
                  His political journey has been marked by a consistent commitment to the principles of transparency, accountability, 
                  and people-centered leadership.
                </p>

                <p className="mb-4">
                  In the [year] elections, he emerged as the candidate of [Party Name] and went on to win the gubernatorial election, 
                  taking office on May 29, 2023, as the Executive Governor of Katsina State.
                </p>

                <h3>Leadership Philosophy</h3>
                <p className="mb-4">
                  Governor Radda's approach to leadership is guided by the principles of inclusivity, transparency, and sustainable development. 
                  He believes in harnessing the collective wisdom and energies of all citizens to build a prosperous Katsina State.
                </p>

                <p className="mb-4">
                  His governance framework emphasizes strategic planning, evidence-based decision making, and regular engagement with citizens 
                  to ensure that government policies and programs address the real needs of the people.
                </p>

                <h3>Personal Life</h3>
                <p className="mb-4">
                  Beyond his public life, Dr. Radda is [family details, personal interests]. He remains deeply connected to his cultural heritage 
                  and community, often participating in local traditions and celebrations.
                </p>

                <h3>Vision for Katsina State</h3>
                <p className="mb-4">
                  As the Executive Governor, Dr. Radda is committed to transforming Katsina State into a model of sustainable development, 
                  with robust infrastructure, quality education and healthcare systems, thriving agriculture and industries, and improved 
                  security for all residents.
                </p>

                <p className="mb-4">
                  His administration's strategic priorities include [key priorities], all aimed at improving the quality of life for the 
                  people of Katsina State and positioning the state for future growth and prosperity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gubernatorial-light dark:bg-gubernatorial-charcoal/70">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Leadership Timeline" 
            subtitle="Key Milestones in Governor Radda's Career"
            centered
          />

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-nigeria-green"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16 relative">
              {/* Timeline Item 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <div className="bg-white dark:bg-gubernatorial-navy/30 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-nigeria-green mb-2">Early Career</h3>
                    <p className="text-gubernatorial-charcoal/80 dark:text-white/80">
                      Dr. Radda began his professional journey as [early career details], where he demonstrated exceptional leadership and innovation.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 flex justify-start md:justify-start">
                  <div className="bg-gubernatorial-navy text-white px-4 py-2 rounded-full shadow-md">
                    [Year Range]
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <div className="bg-white dark:bg-gubernatorial-navy/30 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-nigeria-green mb-2">Director-General of SMEDAN</h3>
                    <p className="text-gubernatorial-charcoal/80 dark:text-white/80">
                      Appointed as the Director-General of the Small and Medium Enterprises Development Agency of Nigeria, where he implemented 
                      transformative policies that boosted the SME sector.
                    </p>
                  </div>
                </div>
                <div className="md:hidden flex justify-start">
                  <div className="bg-gubernatorial-navy text-white px-4 py-2 rounded-full shadow-md">
                    [Year Range]
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <div className="bg-white dark:bg-gubernatorial-navy/30 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-nigeria-green mb-2">Political Leadership</h3>
                    <p className="text-gubernatorial-charcoal/80 dark:text-white/80">
                      Emerged as a prominent political figure in Katsina State, serving in various capacities within the party structure and government.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 flex justify-start md:justify-start">
                  <div className="bg-gubernatorial-navy text-white px-4 py-2 rounded-full shadow-md">
                    [Year Range]
                  </div>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <div className="bg-white dark:bg-gubernatorial-navy/30 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-nigeria-green mb-2">Election as Governor</h3>
                    <p className="text-gubernatorial-charcoal/80 dark:text-white/80">
                      Won the gubernatorial election and was sworn in as the Executive Governor of Katsina State, beginning a new chapter of leadership and development.
                    </p>
                  </div>
                </div>
                <div className="md:hidden flex justify-start">
                  <div className="bg-gubernatorial-navy text-white px-4 py-2 rounded-full shadow-md">
                    May 2023
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
