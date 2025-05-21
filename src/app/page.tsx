import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import {
  Shield,
  Zap,
  Users,
  School,
  Server,
  CheckCircle,
  Star,
  StarHalf,
  Clock,
  Lock,
  Cpu,
  FileText,
  HomeIcon,
  Layers,
  Settings,
} from "lucide-react"
import { ReactNode } from "react"

interface TargetCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

function TargetCard({ icon, title, description, features }: TargetCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="text-center">
        <div className="mx-auto p-2 rounded-full bg-blue-50 dark:bg-gray-800 mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-blue-600 hover:bg-blue-700">Learn More</Button>
      </CardFooter>
    </Card>
  )
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features?: string[];
}

function FeatureCard({ icon, title, description, features }: FeatureCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="p-2 rounded-full bg-blue-50 dark:bg-gray-800">{icon}</div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{description}</p>
        {features && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

function PricingCard({ title, price, period, description, features, buttonText, popular = false }: PricingCardProps) {
  return (
    <Card className={`h-full flex flex-col relative ${popular ? "border-blue-600 shadow-lg" : ""}`}>
      {popular && (
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
          <Badge className="bg-blue-600">Most Popular</Badge>
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          <span className="ml-1 text-muted-foreground">{period}</span>
        </div>
        <CardDescription className="mt-4">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className={`w-full ${popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}>{buttonText}</Button>
      </CardFooter>
    </Card>
  )
}

interface FeatureListItemProps {
  children: ReactNode;
}

function FeatureListItem({ children }: FeatureListItemProps) {
  return (
    <li className="flex items-start space-x-3">
      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span>{children}</span>
    </li>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">Nexus Smart DNS</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Testimonials
            </a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              FAQ
            </a>
            <a href="#partners" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Partners
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline">Log In</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <Badge className="w-fit bg-blue-100 text-blue-800 hover:bg-blue-100 border-none">Trusted by 10,000+ Organizations</Badge>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Nexus Smart DNS
                </h1>
                <p className="text-xl text-muted-foreground">
                  Safe. Controlled. Blazing Fast DNS for Families & Educational Institutions.
                </p>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Protect your network. Empower learning. Block distractions. Join 50,000+ users worldwide.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="mr-1 h-4 w-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-1 h-4 w-4 text-green-500" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg"
                  alt="Nexus Smart DNS Dashboard"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-3xl font-bold text-blue-600">50,000+</p>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-3xl font-bold text-blue-600">99.9%</p>
              <p className="text-sm text-muted-foreground">Uptime</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-3xl font-bold text-blue-600">5,000+</p>
              <p className="text-sm text-muted-foreground">Schools Protected</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-3xl font-bold text-blue-600">10M+</p>
              <p className="text-sm text-muted-foreground">Threats Blocked Daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section id="partners" className="w-full py-8 md:py-12 bg-white border-y">
        <div className="container px-4 md:px-6">
          <h2 className="text-center text-lg font-medium text-muted-foreground mb-8">Trusted by leading organizations worldwide</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {['Harvard University', 'Stanford Schools', 'NYC Public Library', 'Boston Children\'s Hospital', 'Microsoft Education', 'Google for Education'].map((partner, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 h-8 mr-2 bg-gray-200 rounded-full"></div>
                <span className="font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="audience" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-none">For Everyone</Badge>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Built for Families, Schools & Classrooms
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Create safe internet environments for everyone who matters.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <TargetCard
              icon={<HomeIcon className="w-10 h-10 text-blue-500" />}
              title="Families"
              description="Restrict harmful content and ads across all home devices. Keep your children safe online."
              features={[
                "Parental controls for all devices",
                "Age-appropriate filtering",
                "Screen time management",
                "Real-time activity monitoring",
                "Custom block/allow lists"
              ]}
            />
            <TargetCard
              icon={<School className="w-10 h-10 text-green-500" />}
              title="Schools & Colleges"
              description="Enforce access policies and reduce distractions. Create focused learning environments."
              features={[
                "CIPA compliance filtering",
                "Classroom management tools",
                "Bandwidth optimization",
                "Multi-campus support",
                "Integration with school systems"
              ]}
            />
            <TargetCard
              icon={<Server className="w-10 h-10 text-purple-500" />}
              title="Libraries & Labs"
              description="Ensure internet is used for learning only. Manage public access responsibly."
              features={[
                "Public access management",
                "Session-based filtering",
                "Resource prioritization",
                "Usage statistics and reporting",
                "Multi-branch deployment"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-none">Powerful Features</Badge>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Smart Blocking & Filtering
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Powerful tools to create a safer, distraction-free digital environment.
              </p>
            </div>
          </div>
          
          <Tabs defaultValue="blocking" className="mt-12">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="blocking">Content Blocking</TabsTrigger>
              <TabsTrigger value="groups">User Groups</TabsTrigger>
              <TabsTrigger value="dns">DNS Features</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
            </TabsList>
            <TabsContent value="blocking" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FeatureCard
                  icon={<Shield className="w-6 h-6 text-blue-500" />}
                  title="Advanced Content Filtering"
                  description="Block ads, malware, and adult content using trusted external deny lists. Keep unwanted content away."
                  features={[
                    "50+ content categories",
                    "Regular expression filtering",
                    "CNAME cloaking detection",
                    "IP-based blocking",
                    "Automatic list updates"
                  ]}
                />
                <FeatureCard
                  icon={<Layers className="w-6 h-6 text-blue-500" />}
                  title="Multi-Layer Protection"
                  description="Comprehensive protection at DNS, IP, and content levels for maximum security."
                  features={[
                    "DNS-level filtering",
                    "HTTPS inspection",
                    "Safe search enforcement",
                    "YouTube restricted mode",
                    "Social media controls"
                  ]}
                />
                <FeatureCard
                  icon={<Clock className="w-6 h-6 text-blue-500" />}
                  title="Time-Based Rules"
                  description="Set different filtering rules based on time of day, day of week, or custom schedules."
                  features={[
                    "School hours restrictions",
                    "Bedtime internet rules",
                    "Weekend allowances",
                    "Holiday schedules",
                    "Custom time windows"
                  ]}
                />
                <FeatureCard
                  icon={<FileText className="w-6 h-6 text-blue-500" />}
                  title="Detailed Reporting"
                  description="Comprehensive logs and reports of all network activity and blocked content."
                  features={[
                    "Real-time activity dashboard",
                    "Exportable reports",
                    "Historical data analysis",
                    "Top blocked domains",
                    "User activity breakdown"
                  ]}
                />
              </div>
            </TabsContent>
            <TabsContent value="groups" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FeatureCard
                  icon={<Users className="w-6 h-6 text-green-500" />}
                  title="Group-Based Rules"
                  description="Assign per-client group filtering rules for customized control. Different rules for different users."
                  features={[
                    "Unlimited user groups",
                    "Device-based assignments",
                    "IP range grouping",
                    "MAC address identification",
                    "Active Directory integration"
                  ]}
                />
                <FeatureCard
                  icon={<Settings className="w-6 h-6 text-green-500" />}
                  title="Granular Permissions"
                  description="Set different access levels for administrators, teachers, parents and more."
                  features={[
                    "Role-based access control",
                    "Delegated administration",
                    "Teacher override capabilities",
                    "Temporary access grants",
                    "Emergency access protocols"
                  ]}
                />
              </div>
            </TabsContent>
            <TabsContent value="dns" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FeatureCard
                  icon={<Server className="w-6 h-6 text-purple-500" />}
                  title="Custom DNS Resolution"
                  description="Override domain names to block or redirect services (e.g., redirect Google to SafeSearch)."
                  features={[
                    "Domain overrides",
                    "Conditional forwarding",
                    "Split-horizon DNS",
                    "Local DNS zones",
                    "Custom DNS records"
                  ]}
                />
                <FeatureCard
                  icon={<Lock className="w-6 h-6 text-purple-500" />}
                  title="Encrypted DNS"
                  description="Support for modern encrypted DNS protocols for enhanced privacy and security."
                  features={[
                    "DNS over HTTPS (DoH)",
                    "DNS over TLS (DoT)",
                    "DNSCrypt support",
                    "DNSSEC validation",
                    "eDNS client subnet"
                  ]}
                />
              </div>
            </TabsContent>
            <TabsContent value="performance" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FeatureCard
                  icon={<Zap className="w-6 h-6 text-amber-500" />}
                  title="Optimized Performance"
                  description="Smart DNS answer caching reduces lag and speeds up browsing. Prefetching for instant responses."
                  features={[
                    "Intelligent caching",
                    "DNS prefetching",
                    "Parallel query resolution",
                    "Negative caching optimization",
                    "Minimal latency design"
                  ]}
                />
                <FeatureCard
                  icon={<Cpu className="w-6 h-6 text-amber-500" />}
                  title="Resource Efficiency"
                  description="Designed to run efficiently on minimal hardware while handling thousands of requests."
                  features={[
                    "Low CPU utilization",
                    "Minimal memory footprint",
                    "Optimized for Raspberry Pi",
                    "Docker container support",
                    "Kubernetes compatibility"
                  ]}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-none">Simple Pricing</Badge>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Choose Your Plan
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Flexible options for homes, schools, and enterprises of all sizes.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <PricingCard
              title="Family"
              price="$4.99"
              period="per month"
              description="Perfect for home use to protect all your family devices."
              features={[
                "Up to 50 devices",
                "5 user groups",
                "Basic content filtering",
                "Parental controls",
                "Email support",
                "Standard updates"
              ]}
              buttonText="Start Free Trial"
              popular={false}
            />
            <PricingCard
              title="Education"
              price="$99"
              period="per month"
              description="Ideal for schools, libraries and educational institutions."
              features={[
                "Up to 500 devices",
                "Unlimited user groups",
                "Advanced content filtering",
                "CIPA compliance tools",
                "Priority email support",
                "Admin dashboard",
                "API access",
                "Custom block/allow lists"
              ]}
              buttonText="Contact Sales"
              popular={true}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              period="pricing"
              description="For large organizations with advanced requirements."
              features={[
                "Unlimited devices",
                "Unlimited user groups",
                "Enterprise-grade filtering",
                "Custom integration",
                "24/7 phone support",
                "Dedicated account manager",
                "SLA guarantees",
                "On-premise option",
                "Custom development"
              ]}
              buttonText="Get Quote"
              popular={false}
            />
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">All plans include a 14-day free trial. No credit card required.</p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Feature Comparison
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how our plans stack up against each other
              </p>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="p-4 text-left font-medium">Feature</th>
                  <th className="p-4 text-center font-medium">Family</th>
                  <th className="p-4 text-center font-medium bg-blue-50">Education</th>
                  <th className="p-4 text-center font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Number of Devices", family: "50", education: "500", enterprise: "Unlimited" },
                  { feature: "User Groups", family: "5", education: "Unlimited", enterprise: "Unlimited" },
                  { feature: "Content Categories", family: "20+", education: "50+", enterprise: "100+" },
                  { feature: "Custom Block/Allow Lists", family: "Basic", education: "Advanced", enterprise: "Enterprise" },
                  { feature: "Time-Based Rules", family: "✓", education: "✓", enterprise: "✓" },
                  { feature: "DNS Encryption (DoH/DoT)", family: "✓", education: "✓", enterprise: "✓" },
                  { feature: "CIPA Compliance", family: "—", education: "✓", enterprise: "✓" },
                  { feature: "API Access", family: "—", education: "✓", enterprise: "✓" },
                  { feature: "Active Directory Integration", family: "—", education: "✓", enterprise: "✓" },
                  { feature: "Custom DNS Resolution", family: "Basic", education: "Advanced", enterprise: "Enterprise" },
                  { feature: "Reporting & Analytics", family: "Basic", education: "Advanced", enterprise: "Enterprise" },
                  { feature: "Support", family: "Email", education: "Priority Email", enterprise: "24/7 Phone" },
                  { feature: "SLA Guarantee", family: "—", education: "—", enterprise: "✓" },
                  { feature: "On-Premise Deployment", family: "—", education: "—", enterprise: "✓" },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-muted/50"}>
                    <td className="p-4 border-t">{row.feature}</td>
                    <td className="p-4 border-t text-center">{row.family}</td>
                    <td className="p-4 border-t text-center bg-blue-50">{row.education}</td>
                    <td className="p-4 border-t text-center">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section id="advanced" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Advanced DNS Configuration"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <Badge className="w-fit bg-blue-100 text-blue-800 hover:bg-blue-100 border-none">Technical Excellence</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Advanced DNS Configuration</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Powerful tools for complete network control
                </p>
              </div>
              <ul className="space-y-4">
                <FeatureListItem>
                  <span className="font-medium">Custom DNS resolution</span> - Override domain names for granular control over network traffic
                </FeatureListItem>
                <FeatureListItem>
                  <span className="font-medium">Conditional forwarding</span> - Route specific domains to different upstream DNS servers
                </FeatureListItem>
                <FeatureListItem>
                  <span className="font-medium">Different upstream resolvers per group</span> - Assign specific DNS servers to different user groups
                </FeatureListItem>
                <FeatureListItem>
                  <span className="font-medium">Full protocol support</span> - DNS over UDP, TCP, HTTPS (DoH), and TLS (DoT)
                </FeatureListItem>
                <FeatureListItem>
                  <span className="font-medium">Split-horizon DNS</span> - Serve different answers to internal vs. external clients
                </FeatureListItem>
                <FeatureListItem>
                  <span className="font-medium">Local DNS zones</span> - Create custom internal DNS zones for your network
                </FeatureListItem>
              </ul>
              <div className="pt-4">
                <Button className="bg-blue-600 hover:bg-blue-700">View Technical Docs</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <Badge className="w-fit bg-blue-100 text-blue-800 hover:bg-blue-100 border-none">Privacy First</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Security & Privacy First</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your data stays private, always
                </p>
              </div>
              <ul className="space-y-4">
                <FeatureListItem>
                  <span className="font-medium">Zero telemetry</span> - 100% no tracking, data collection, or analytics sent back to us
                </FeatureListItem>
                <FeatureListItem>
                  <span className="font-medium">Encrypted DNS</span> - Built-in support for DNSSEC, eDNS, DoH, and DoT protocols
                </FeatureListItem>
                <FeatureListItem>
                  <span className="font-medium">Randomized resolvers</span> - Randomizes upstream DNS resolvers to avoid centralizing DNS traffic
                </FeatureListItem>
                <FeatureListItem>
                  <span className="font-medium">Transparent filtering</span> - You control what&apos;s blocked, not us - all rules are visible and editable
                </FeatureListItem>
                <FeatureListItem>
                  <span className="font-medium">Local processing</span> - All filtering happens on your network, not in our cloud
                </FeatureListItem>
                <FeatureListItem>
                  <span className="font-medium">Open source core</span> - Core filtering engine is open source and auditable
                </FeatureListItem>
              </ul>
              <div className="pt-4">
                <Button className="bg-blue-600 hover:bg-blue-700">Security Whitepaper</Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Security and Privacy"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-none">Customer Stories</Badge>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Customers Say
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of satisfied users worldwide
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                          {[
                {
                  name: "Sarah Johnson",
                  role: "IT Director, Lincoln High School",
                  image: "/placeholder.svg?height=100&width=100",
                  content: "Nexus Smart DNS has completely transformed how we manage internet access across our campus. With over 2,000 students, we needed a solution that was both powerful and easy to manage. The group-based filtering allows us to set different policies for staff, students, and guests. We&apos;ve seen a 40% reduction in IT tickets related to inappropriate content since implementation.",
                  rating: 5
                },
              {
                name: "Michael Chen",
                role: "Parent of three",
                image: "/placeholder.svg?height=100&width=100",
                content: "As a parent, I was constantly worried about what my kids were accessing online. Nexus Smart DNS gives me peace of mind with its comprehensive filtering and time-based controls. I can set different rules for homework time versus free time, and the reporting lets me know if there are any concerns. Setup was surprisingly simple - even for someone who isn&apos;t particularly tech-savvy.",
                rating: 5
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Director, City Public Library",
                image: "/placeholder.svg?height=100&width=100",
                content: "Our library needed a solution that balanced open access to information with appropriate protections. Nexus Smart DNS has been the perfect fit. We can customize filtering based on our public computers&apos; locations - children&apos;s area versus research section. The detailed reporting helps us demonstrate CIPA compliance for our federal funding requirements.",
                rating: 4.5
              },
              {
                name: "James Wilson",
                role: "Network Administrator, Westfield School District",
                image: "/placeholder.svg?height=100&width=100",
                content: "Managing 12 schools with different needs was a nightmare before Nexus. Now we have centralized control with delegated permissions for each school&apos;s IT staff. The performance is outstanding - we haven&apos;t seen any slowdowns even with 5,000+ devices connecting daily. Their technical support team is responsive and knowledgeable.",
                rating: 5
              },
              {
                name: "Lisa Thompson",
                role: "Small Business Owner",
                image: "/placeholder.svg?height=100&width=100",
                content: "We&apos;re not a school or a family, but we needed to ensure our employees weren&apos;t accessing inappropriate content on company devices. Nexus Smart DNS was easy to set up and gives us just the right level of filtering without being intrusive. The pricing is reasonable for a small business, and it&apos;s been 100% reliable.",
                rating: 4
              },
              {
                name: "Robert Patel",
                role: "Technology Coordinator, St. Mary&apos;s Academy",
                image: "/placeholder.svg?height=100&width=100",
                content: "After trying three different filtering solutions, we finally found Nexus Smart DNS. The difference is night and day. Their CIPA compliance features are comprehensive, the false positive rate is minimal, and students can&apos;t bypass it like they could with our previous solution. Worth every penny for the peace of mind alone.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full overflow-hidden w-12 h-12 bg-gray-100 relative">
                      <Image 
                        src={testimonial.image || "/placeholder.svg"} 
                        alt={testimonial.name} 
                        className="object-cover"
                        fill
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center">
                    {Array(Math.floor(testimonial.rating)).fill(0).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                    ))}
                    {testimonial.rating % 1 !== 0 && (
                      <StarHalf className="w-4 h-4 fill-current text-yellow-400" />
                    )}
                    <span className="ml-2 text-sm text-muted-foreground">{testimonial.rating.toFixed(1)}/5</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline">View All 200+ Reviews</Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-none">FAQ</Badge>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to know about Nexus Smart DNS
              </p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How does Nexus Smart DNS work?",
                  answer: "Nexus Smart DNS works by intercepting DNS queries from devices on your network. When a device tries to access a website, it first needs to resolve the domain name to an IP address using DNS. Nexus Smart DNS checks each request against your configured filtering rules and block lists. If the domain is allowed, the request proceeds normally. If it&apos;s blocked, Nexus returns an alternative response that prevents the connection. This happens in milliseconds and affects all devices on your network without requiring software installation on each device."
                },
                {
                  question: "Do I need to install software on every device?",
                  answer: "No, that&apos;s one of the biggest advantages of Nexus Smart DNS! It works at the network level, so once it&apos;s installed on your router or server, it automatically protects all connected devices - computers, tablets, smartphones, smart TVs, gaming consoles, and IoT devices. There&apos;s no need to install, configure, or maintain software on individual devices."
                },
                {
                  question: "Can Nexus Smart DNS be bypassed?",
                  answer: "Nexus Smart DNS is designed to be highly resistant to bypass attempts. It works at the network level and includes protection against common evasion techniques like using alternative DNS servers, VPNs, proxies, and encrypted DNS. The system includes CNAME cloaking detection, IP-based blocking, and can enforce secure DNS protocols. While no solution is 100% foolproof, Nexus provides multiple layers of protection that make bypassing extremely difficult, especially for students and children."
                },
                {
                  question: "Is Nexus Smart DNS compatible with my existing network?",
                  answer: "Yes, Nexus Smart DNS is designed to integrate seamlessly with virtually any network configuration. It can be deployed as a Docker container, virtual machine, or directly on Linux/Windows/macOS. It works with all major router brands, firewalls, and network equipment. Nexus supports integration with Active Directory, LDAP, and RADIUS for authentication. Our setup wizard helps you configure it correctly for your specific network topology."
                },
                {
                  question: "How does Nexus Smart DNS handle encrypted DNS (DoH/DoT)?",
                  answer: "Nexus Smart DNS includes comprehensive support for encrypted DNS protocols. It can act as a DoH and DoT server, allowing devices to use encrypted DNS while still benefiting from filtering. Additionally, it can detect and manage attempts to use external encrypted DNS services, ensuring that filtering policies cannot be bypassed. For networks that require it, Nexus can also block external encrypted DNS entirely."
                },
                {
                  question: "What content categories can be filtered?",
                  answer: "Nexus Smart DNS offers over 50 content categories in our standard plans, including adult content, gambling, social media, games, streaming services, malware, phishing, ads, and many more. Our Education and Enterprise plans include additional specialized categories. You can enable or disable categories per user group, and you can also create custom categories using your own block/allow lists and regular expressions."
                },
                {
                  question: "Does Nexus Smart DNS slow down my internet?",
                  answer: "No, Nexus Smart DNS is designed for high performance with minimal impact on browsing speed. It uses intelligent caching, parallel query resolution, and optimized code to process DNS queries in milliseconds. In many cases, users actually experience faster browsing because of our advanced caching and prefetching technologies, which can predict and pre-resolve DNS queries before they&apos;re needed."
                },
                {
                  question: "How is Nexus Smart DNS different from free DNS filters?",
                  answer: "While free DNS filters provide basic functionality, Nexus Smart DNS offers enterprise-grade features: group-based filtering with different rules for different users, time-based rules, detailed reporting, CIPA compliance tools, custom DNS resolution, multiple upstream resolvers, encrypted DNS support, and much more. We also provide professional support, regular updates to our block lists, and a 99.9% uptime guarantee. Our solution is designed for reliability, performance, and comprehensive protection that free alternatives simply can&apos;t match."
                },
                {
                  question: "Can I try Nexus Smart DNS before purchasing?",
                  answer: "We offer a 14-day free trial with full functionality for all our plans. No credit card is required to start your trial. You&apos;ll have access to all features of your selected plan during the trial period, allowing you to thoroughly test Nexus Smart DNS in your environment. Our support team is available to help you get the most out of your trial."
                },
                {
                  question: "What support options are available?",
                  answer: "Support options vary by plan. Family plans include email support with 24-hour response time. Education plans include priority email support with 8-hour response time and access to our knowledge base and community forums. Enterprise plans include 24/7 phone support, a dedicated account manager, and SLA guarantees. All customers receive regular software updates and access to our comprehensive documentation."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button className="bg-blue-600 hover:bg-blue-700">Contact Support</Button>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-none">Technical Details</Badge>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Technical Specifications
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Built for performance, reliability, and security
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">System Requirements</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-foreground">CPU:</span> 1+ GHz processor (2+ GHz recommended for 1000+ devices)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-foreground">RAM:</span> 512MB minimum (2GB+ recommended for 1000+ devices)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-foreground">Storage:</span> 1GB available space (5GB+ recommended for extended logging)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-foreground">Network:</span> Static IP address recommended</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-foreground">Operating System:</span> Windows 10/11, macOS 10.15+, Linux (Ubuntu 20.04+, Debian 10+, RHEL/CentOS 8+)</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-bold mt-8 mb-4">Deployment Options</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-foreground">Docker:</span> Official container images for easy deployment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-foreground">Virtual Appliance:</span> Pre-configured OVA/VMDK for VMware/Hyper-V</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-foreground">Cloud:</span> AWS, Azure, Google Cloud Platform</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-foreground">Raspberry Pi:</span> Optimized image for Raspberry Pi 4+</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-foreground">Native:</span> Direct installation on supported operating systems</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Performance Metrics</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-foreground">Query Processing:</span> 10,000+ queries per second on recommended hardware</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-foreground">Response Time:</span> Average &lt;2ms for cached responses, &lt;20ms for uncached</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-foreground">Concurrent Devices:</span> Tested with 10,000+ simultaneous devices</span>
                </li>
               
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-foreground">Uptime:</span> 99.9% guaranteed (Enterprise plan)</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-bold mt-8 mb-4">Integration & APIs</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-foreground">Authentication:</span> Active Directory, LDAP, RADIUS, OAuth2</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-foreground">API:</span> RESTful API for configuration and monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-foreground">Reporting:</span> Syslog, Elasticsearch, Splunk, CSV export</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-foreground">Monitoring:</span> SNMP, Prometheus, Grafana dashboards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-foreground">Automation:</span> Ansible playbooks, Terraform modules</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-white/20 text-white hover:bg-white/20 border-none">Get Started Today</Badge>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Create a Safer Internet?
              </h2>
              <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of families and institutions already using Nexus Smart DNS.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-blue-100">No credit card required. 14-day free trial.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-background">
        <div className="container px-4 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold">Nexus Smart DNS</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Safe. Controlled. Blazing Fast DNS for Families & Educational Institutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="text-muted-foreground hover:text-foreground">Features</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Changelog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Roadmap</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Beta Program</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Guides</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Support</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">API</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Press</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Cookies</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Licenses</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Settings</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © 2025 Nexus Smart DNS. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-muted-foreground">
                Made with ❤️ for safer internet
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
