
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Search, Download, ArrowRight } from "lucide-react";

export default function Media() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gubernatorial-navy py-24 md:py-32 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Newsroom & Media</h1>
            <p className="text-xl text-white/80">
              Stay updated with the latest news, speeches, and media releases from the Office of the Governor.
            </p>
          </div>
        </div>
      </section>

      {/* Media Content Section */}
      <section className="py-16 bg-white dark:bg-gubernatorial-charcoal">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="news" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-gubernatorial-light dark:bg-gubernatorial-navy/30 p-1 w-full md:w-auto">
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="speeches">Speeches</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="press-kits">Press Kits</TabsTrigger>
            </TabsList>
            
            {/* News Tab */}
            <TabsContent value="news" className="mt-8">
              <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <SectionHeading 
                  title="Latest News" 
                  subtitle="Updates from the Governor's Office"
                  className="mb-0"
                />
                
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search news..." 
                    className="pl-10 pr-4 py-2 border rounded-lg w-full md:w-64 bg-white dark:bg-gubernatorial-navy/30 dark:border-gubernatorial-navy/50"
                  />
                </div>
              </div>
              
              <div className="space-y-8">
                {/* News Item 1 */}
                <NewsItem 
                  title="Governor Radda Inaugurates New Educational Initiatives"
                  date="May 15, 2025"
                  category="Education"
                  excerpt="His Excellency, Dr. Umaru Dikko Radda, today launched a series of educational initiatives aimed at transforming the learning experience in Katsina State."
                  image="https://images.unsplash.com/photo-1610834298107-8178cc731300"
                />
                
                {/* News Item 2 */}
                <NewsItem 
                  title="Katsina State Signs MoU with International Development Partners"
                  date="May 10, 2025"
                  category="Development"
                  excerpt="The Katsina State Government, under the leadership of Governor Radda, has signed a Memorandum of Understanding with key international development partners to boost agricultural productivity."
                  image="https://images.unsplash.com/photo-1521791136064-7986c2920216"
                />
                
                {/* News Item 3 */}
                <NewsItem 
                  title="Governor Addresses Security Concerns in Northern Katsina"
                  date="May 5, 2025"
                  category="Security"
                  excerpt="In response to recent security challenges, Governor Umaru Dikko Radda convened an emergency security meeting with stakeholders to strengthen safety measures."
                  image="https://images.unsplash.com/photo-1531482615713-2afd69097998"
                />
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="outline">
                  Load More News
                </Button>
              </div>
            </TabsContent>
            
            {/* Speeches Tab */}
            <TabsContent value="speeches" className="mt-8">
              <SectionHeading 
                title="Speeches & Addresses" 
                subtitle="Official Speeches and Public Addresses"
              />
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Speech Item 1 */}
                <div className="bg-white dark:bg-gubernatorial-navy/30 rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="text-xs text-gubernatorial-navy dark:text-gubernatorial-light font-medium mb-2">
                      Inaugural Address | May 29, 2023
                    </div>
                    <h3 className="text-xl font-bold mb-3">Inaugural Speech as Executive Governor of Katsina State</h3>
                    <p className="text-gubernatorial-charcoal/80 dark:text-white/80 mb-4">
                      The official address delivered by His Excellency, Dr. Umaru Dikko Radda, during his inauguration ceremony as the Executive Governor of Katsina State.
                    </p>
                    <div className="flex justify-between items-center">
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Download size={16} /> Download PDF
                      </Button>
                      <Button variant="link" size="sm" className="text-nigeria-green">
                        Read Full Speech
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Speech Item 2 */}
                <div className="bg-white dark:bg-gubernatorial-navy/30 rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="text-xs text-gubernatorial-navy dark:text-gubernatorial-light font-medium mb-2">
                      Budget Presentation | December 15, 2023
                    </div>
                    <h3 className="text-xl font-bold mb-3">2024 Budget Presentation to the State Assembly</h3>
                    <p className="text-gubernatorial-charcoal/80 dark:text-white/80 mb-4">
                      The Governor's address to the Katsina State House of Assembly during the presentation of the 2024 fiscal year budget.
                    </p>
                    <div className="flex justify-between items-center">
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Download size={16} /> Download PDF
                      </Button>
                      <Button variant="link" size="sm" className="text-nigeria-green">
                        Read Full Speech
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Speech Item 3 */}
                <div className="bg-white dark:bg-gubernatorial-navy/30 rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="text-xs text-gubernatorial-navy dark:text-gubernatorial-light font-medium mb-2">
                      State Broadcast | January 1, 2024
                    </div>
                    <h3 className="text-xl font-bold mb-3">New Year Address to Katsina Citizens</h3>
                    <p className="text-gubernatorial-charcoal/80 dark:text-white/80 mb-4">
                      The Governor's New Year message to the people of Katsina State, reflecting on achievements and outlining plans for the coming year.
                    </p>
                    <div className="flex justify-between items-center">
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Download size={16} /> Download PDF
                      </Button>
                      <Button variant="link" size="sm" className="text-nigeria-green">
                        Read Full Speech
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Speech Item 4 */}
                <div className="bg-white dark:bg-gubernatorial-navy/30 rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="text-xs text-gubernatorial-navy dark:text-gubernatorial-light font-medium mb-2">
                      Policy Address | March 22, 2024
                    </div>
                    <h3 className="text-xl font-bold mb-3">Agricultural Transformation Agenda Launch</h3>
                    <p className="text-gubernatorial-charcoal/80 dark:text-white/80 mb-4">
                      Speech delivered during the launch of the comprehensive Agricultural Transformation Agenda aimed at revolutionizing farming in Katsina State.
                    </p>
                    <div className="flex justify-between items-center">
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Download size={16} /> Download PDF
                      </Button>
                      <Button variant="link" size="sm" className="text-nigeria-green">
                        Read Full Speech
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Gallery Tab */}
            <TabsContent value="gallery" className="mt-8">
              <SectionHeading 
                title="Photo & Video Gallery" 
                subtitle="Visual Highlights of the Governor's Activities"
              />
              
              <PhotoGallery />
            </TabsContent>
            
            {/* Press Kits Tab */}
            <TabsContent value="press-kits" className="mt-8">
              <SectionHeading 
                title="Press Kits & Resources" 
                subtitle="Official Materials for Media and Press"
              />
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Press Kit Item 1 */}
                <div className="bg-white dark:bg-gubernatorial-navy/30 rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">Official Logos & Branding</h3>
                    <p className="text-gubernatorial-charcoal/80 dark:text-white/80 mb-4">
                      Download the official logos, emblems, and branding materials of the Office of the Governor.
                    </p>
                    <Button className="w-full bg-nigeria-green hover:bg-nigeria-green/90">
                      Download Package
                    </Button>
                  </div>
                </div>
                
                {/* Press Kit Item 2 */}
                <div className="bg-white dark:bg-gubernatorial-navy/30 rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">Official Biography & Photos</h3>
                    <p className="text-gubernatorial-charcoal/80 dark:text-white/80 mb-4">
                      Access the Governor's official biography and high-resolution photographs for media use.
                    </p>
                    <Button className="w-full bg-nigeria-green hover:bg-nigeria-green/90">
                      Download Package
                    </Button>
                  </div>
                </div>
                
                {/* Press Kit Item 3 */}
                <div className="bg-white dark:bg-gubernatorial-navy/30 rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">Fact Sheets & Achievements</h3>
                    <p className="text-gubernatorial-charcoal/80 dark:text-white/80 mb-4">
                      Comprehensive fact sheets detailing the administration's key achievements and ongoing projects.
                    </p>
                    <Button className="w-full bg-nigeria-green hover:bg-nigeria-green/90">
                      Download Package
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}

interface NewsItemProps {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

function NewsItem({ title, date, category, excerpt, image }: NewsItemProps) {
  return (
    <div className="bg-white dark:bg-gubernatorial-navy/30 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/4">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 md:w-3/4">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-sm text-gubernatorial-charcoal/70 dark:text-white/70">{date}</span>
          <span className="bg-gubernatorial-light dark:bg-gubernatorial-navy/50 text-gubernatorial-navy dark:text-white px-2 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gubernatorial-charcoal/80 dark:text-white/80 mb-4">
          {excerpt}
        </p>
        <Button variant="link" className="text-nigeria-green p-0 flex items-center gap-1">
          Read Full Story <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
}

function PhotoGallery() {
  // Dummy gallery items for the demo
  const galleryItems = [
    {
      id: 1,
      type: "image",
      url: "https://images.unsplash.com/photo-1610834298107-8178cc731300",
      caption: "Governor Radda at the inauguration of a new school building"
    },
    {
      id: 2,
      type: "image",
      url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      caption: "Visit to the newly constructed healthcare center"
    },
    {
      id: 3,
      type: "image",
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
      caption: "Meeting with community leaders to discuss security measures"
    },
    {
      id: 4,
      type: "image",
      url: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
      caption: "Signing of MoU with international development partners"
    },
    {
      id: 5,
      type: "image",
      url: "https://images.unsplash.com/photo-1500076656116-558758c991c1",
      caption: "Inspection of the irrigation project site"
    },
    {
      id: 6,
      type: "image",
      url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      caption: "Launch of the Tech Innovation Hub"
    },
  ];
  
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryItems.map((item) => (
          <div 
            key={item.id} 
            className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => setSelectedImage(item.id)}
          >
            <div className="relative group h-64">
              <img 
                src={item.url} 
                alt={item.caption} 
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <p className="text-white p-4 text-sm">{item.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Lightbox would be implemented here in a full application */}
    </div>
  );
}
