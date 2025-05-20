
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeading from "@/components/SectionHeading";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { ChartPie, ChartBar, ChartLine } from "lucide-react";

export default function Projects() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gubernatorial-navy py-24 md:py-32 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects & Achievements</h1>
            <p className="text-xl text-white/80">
              Transforming Katsina State through strategic initiatives and impactful projects across all sectors.
            </p>
          </div>
        </div>
      </section>
      
      {/* Project Categories Section */}
      <section className="py-16 bg-white dark:bg-gubernatorial-charcoal">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Initiatives" 
            subtitle="Browse Projects by Category"
            centered
          />
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-2 bg-gubernatorial-light dark:bg-gubernatorial-navy/30 p-1">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
              <TabsTrigger value="agriculture">Agriculture</TabsTrigger>
              <TabsTrigger value="economy">Economy</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project Cards for All Categories */}
                <ProjectCard 
                  title="School Renovation Project"
                  category="Education"
                  image="https://images.unsplash.com/photo-1610834298107-8178cc731300"
                  description="Comprehensive renovation of 50 primary schools across the state to improve learning environments."
                  status="Completed"
                  progress={100}
                />
                
                <ProjectCard 
                  title="Rural Healthcare Centers"
                  category="Healthcare"
                  image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
                  description="Establishment of 20 new rural healthcare centers to bring medical services closer to communities."
                  status="In Progress"
                  progress={75}
                />
                
                <ProjectCard 
                  title="Road Network Expansion"
                  category="Infrastructure"
                  image="https://images.unsplash.com/photo-1545996124-0501ebae84d0"
                  description="Construction and rehabilitation of 200km of roads to improve connectivity across the state."
                  status="In Progress"
                  progress={65}
                />
                
                <ProjectCard 
                  title="Irrigation Scheme"
                  category="Agriculture"
                  image="https://images.unsplash.com/photo-1500076656116-558758c991c1"
                  description="Implementation of modern irrigation systems to support year-round farming in rural areas."
                  status="Completed"
                  progress={100}
                />
                
                <ProjectCard 
                  title="Tech Innovation Hub"
                  category="Economy"
                  image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                  description="Establishment of a tech hub to nurture local talent and attract technology investments."
                  status="Planning"
                  progress={25}
                />
                
                <ProjectCard 
                  title="Teacher Training Program"
                  category="Education"
                  image="https://images.unsplash.com/photo-1544717305-2782549b5136"
                  description="Professional development program for 2,000 teachers to enhance teaching quality."
                  status="In Progress"
                  progress={80}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="education" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Education Projects */}
                <ProjectCard 
                  title="School Renovation Project"
                  category="Education"
                  image="https://images.unsplash.com/photo-1610834298107-8178cc731300"
                  description="Comprehensive renovation of 50 primary schools across the state to improve learning environments."
                  status="Completed"
                  progress={100}
                />
                
                <ProjectCard 
                  title="Teacher Training Program"
                  category="Education"
                  image="https://images.unsplash.com/photo-1544717305-2782549b5136"
                  description="Professional development program for 2,000 teachers to enhance teaching quality."
                  status="In Progress"
                  progress={80}
                />
                
                <ProjectCard 
                  title="Educational Scholarship Scheme"
                  category="Education"
                  image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173"
                  description="Scholarships for 500 deserving students from underprivileged backgrounds to pursue higher education."
                  status="Ongoing"
                  progress={90}
                />
              </div>
            </TabsContent>
            
            {/* Placeholder TabsContent for other categories */}
            <TabsContent value="healthcare" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard 
                  title="Rural Healthcare Centers"
                  category="Healthcare"
                  image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
                  description="Establishment of 20 new rural healthcare centers to bring medical services closer to communities."
                  status="In Progress"
                  progress={75}
                />
                {/* Add more healthcare projects here */}
              </div>
            </TabsContent>
            
            <TabsContent value="infrastructure" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard 
                  title="Road Network Expansion"
                  category="Infrastructure"
                  image="https://images.unsplash.com/photo-1545996124-0501ebae84d0"
                  description="Construction and rehabilitation of 200km of roads to improve connectivity across the state."
                  status="In Progress"
                  progress={65}
                />
                {/* Add more infrastructure projects here */}
              </div>
            </TabsContent>
            
            <TabsContent value="agriculture" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard 
                  title="Irrigation Scheme"
                  category="Agriculture"
                  image="https://images.unsplash.com/photo-1500076656116-558758c991c1"
                  description="Implementation of modern irrigation systems to support year-round farming in rural areas."
                  status="Completed"
                  progress={100}
                />
                {/* Add more agriculture projects here */}
              </div>
            </TabsContent>
            
            <TabsContent value="economy" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard 
                  title="Tech Innovation Hub"
                  category="Economy"
                  image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                  description="Establishment of a tech hub to nurture local talent and attract technology investments."
                  status="Planning"
                  progress={25}
                />
                {/* Add more economy projects here */}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Project Analytics Section - NEW */}
      <section className="py-16 bg-white dark:bg-gubernatorial-navy/30">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Project Analytics" 
            subtitle="Visual data representation of our projects and initiatives"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            {/* Project Status Distribution */}
            <Card className="dark:bg-gubernatorial-navy/30">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <ChartPie className="h-5 w-5 text-nigeria-green" />
                  Project Status Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer 
                  className="aspect-square" 
                  config={{
                    completed: {
                      theme: { light: "#16a34a", dark: "#22c55e" },
                      label: "Completed",
                    },
                    inProgress: {
                      theme: { light: "#eab308", dark: "#facc15" },
                      label: "In Progress",
                    },
                    planning: {
                      theme: { light: "#2563eb", dark: "#3b82f6" },
                      label: "Planning",
                    },
                    ongoing: {
                      theme: { light: "#9333ea", dark: "#a855f7" },
                      label: "Ongoing",
                    },
                  }}
                >
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Completed", value: 25, fill: "var(--color-completed)" },
                        { name: "In Progress", value: 35, fill: "var(--color-inProgress)" },
                        { name: "Planning", value: 20, fill: "var(--color-planning)" },
                        { name: "Ongoing", value: 20, fill: "var(--color-ongoing)" },
                      ]}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      dataKey="value"
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Projects by Category */}
            <Card className="dark:bg-gubernatorial-navy/30">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <ChartBar className="h-5 w-5 text-nigeria-green" />
                  Projects by Category
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer 
                  className="aspect-square" 
                  config={{
                    projects: {
                      theme: { light: "#16a34a", dark: "#22c55e" },
                      label: "Number of Projects",
                    },
                  }}
                >
                  <BarChart
                    data={[
                      { name: "Education", projects: 42 },
                      { name: "Healthcare", projects: 38 },
                      { name: "Infrastructure", projects: 55 },
                      { name: "Agriculture", projects: 33 },
                      { name: "Economy", projects: 27 },
                    ]}
                    margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={50} />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="projects" name="Projects" fill="var(--color-projects)" />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Yearly Project Growth */}
            <Card className="dark:bg-gubernatorial-navy/30">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <ChartLine className="h-5 w-5 text-nigeria-green" />
                  Project Completion Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer 
                  className="aspect-square" 
                  config={{
                    completed: {
                      theme: { light: "#16a34a", dark: "#22c55e" },
                      label: "Completed Projects",
                    },
                  }}
                >
                  <LineChart
                    data={[
                      { month: "Jun 23", completed: 5 },
                      { month: "Sep 23", completed: 12 },
                      { month: "Dec 23", completed: 18 },
                      { month: "Mar 24", completed: 25 },
                      { month: "May 24", completed: 30 },
                    ]}
                    margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" angle={-45} textAnchor="end" height={50} />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line 
                      type="monotone" 
                      dataKey="completed" 
                      name="Completed" 
                      stroke="var(--color-completed)" 
                      strokeWidth={2} 
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
          
          {/* Budget Allocation & Progress Overview - Two wider cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Budget Allocation Card */}
            <Card className="dark:bg-gubernatorial-navy/30">
              <CardHeader>
                <CardTitle className="text-lg">Budget Allocation by Sector (Million ₦)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Education</span>
                    <span className="font-mono">₦2,500M</span>
                  </div>
                  <Progress value={75} className="h-2 bg-gubernatorial-light dark:bg-gubernatorial-navy/60" />
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Healthcare</span>
                    <span className="font-mono">₦2,100M</span>
                  </div>
                  <Progress value={63} className="h-2 bg-gubernatorial-light dark:bg-gubernatorial-navy/60" />
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Infrastructure</span>
                    <span className="font-mono">₦3,200M</span>
                  </div>
                  <Progress value={96} className="h-2 bg-gubernatorial-light dark:bg-gubernatorial-navy/60" />
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Agriculture</span>
                    <span className="font-mono">₦1,800M</span>
                  </div>
                  <Progress value={54} className="h-2 bg-gubernatorial-light dark:bg-gubernatorial-navy/60" />
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Economy</span>
                    <span className="font-mono">₦1,400M</span>
                  </div>
                  <Progress value={42} className="h-2 bg-gubernatorial-light dark:bg-gubernatorial-navy/60" />
                </div>
              </CardContent>
            </Card>
            
            {/* Project Impact Areas */}
            <Card className="dark:bg-gubernatorial-navy/30">
              <CardHeader>
                <CardTitle className="text-lg">Project Impact Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gubernatorial-light dark:bg-gubernatorial-navy/60 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-nigeria-green mb-1">23</div>
                    <div className="text-sm text-gubernatorial-charcoal/80 dark:text-white/80">Local Government Areas Covered</div>
                  </div>
                  
                  <div className="bg-gubernatorial-light dark:bg-gubernatorial-navy/60 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-nigeria-green mb-1">195+</div>
                    <div className="text-sm text-gubernatorial-charcoal/80 dark:text-white/80">Total Projects</div>
                  </div>
                  
                  <div className="bg-gubernatorial-light dark:bg-gubernatorial-navy/60 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-nigeria-green mb-1">750k+</div>
                    <div className="text-sm text-gubernatorial-charcoal/80 dark:text-white/80">Direct Beneficiaries</div>
                  </div>
                  
                  <div className="bg-gubernatorial-light dark:bg-gubernatorial-navy/60 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-nigeria-green mb-1">₦11B+</div>
                    <div className="text-sm text-gubernatorial-charcoal/80 dark:text-white/80">Total Budget Allocated</div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Button className="bg-nigeria-green hover:bg-nigeria-green/90">
                    View Detailed Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Achievement Statistics Section */}
      <section className="py-16 bg-gubernatorial-light dark:bg-gubernatorial-navy/30">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Achievements at a Glance" 
            subtitle="Key Performance Indicators Since May 2023"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="bg-white dark:bg-gubernatorial-navy/30 p-6 rounded-lg shadow-md">
                <div className="text-4xl md:text-5xl font-bold text-nigeria-green mb-2">50+</div>
                <p className="text-gubernatorial-charcoal/80 dark:text-white/80">Schools Renovated</p>
              </div>
            </div>
            
            {/* Stat 2 */}
            <div className="text-center">
              <div className="bg-white dark:bg-gubernatorial-navy/30 p-6 rounded-lg shadow-md">
                <div className="text-4xl md:text-5xl font-bold text-nigeria-green mb-2">200km</div>
                <p className="text-gubernatorial-charcoal/80 dark:text-white/80">Roads Constructed</p>
              </div>
            </div>
            
            {/* Stat 3 */}
            <div className="text-center">
              <div className="bg-white dark:bg-gubernatorial-navy/30 p-6 rounded-lg shadow-md">
                <div className="text-4xl md:text-5xl font-bold text-nigeria-green mb-2">20</div>
                <p className="text-gubernatorial-charcoal/80 dark:text-white/80">New Healthcare Centers</p>
              </div>
            </div>
            
            {/* Stat 4 */}
            <div className="text-center">
              <div className="bg-white dark:bg-gubernatorial-navy/30 p-6 rounded-lg shadow-md">
                <div className="text-4xl md:text-5xl font-bold text-nigeria-green mb-2">5,000+</div>
                <p className="text-gubernatorial-charcoal/80 dark:text-white/80">Jobs Created</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
  status: "Planning" | "In Progress" | "Completed" | "Ongoing";
  progress: number;
}

function ProjectCard({ title, category, image, description, status, progress }: ProjectCardProps) {
  // Map status to colors
  const statusColors = {
    "Planning": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    "In Progress": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    "Completed": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    "Ongoing": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
  };

  return (
    <div className="bg-white dark:bg-gubernatorial-navy/30 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-110"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <div className="text-xs font-semibold text-nigeria-green">{category}</div>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColors[status]}`}>
            {status}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="mb-4 text-gubernatorial-charcoal/80 dark:text-white/80">
          {description}
        </p>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
          <div className="bg-nigeria-green h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="text-right text-xs text-gubernatorial-charcoal/70 dark:text-white/70">
          {progress}% Complete
        </div>
      </div>
    </div>
  );
}
