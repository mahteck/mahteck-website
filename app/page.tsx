import Banner from "@/components/Banner";
import Clients from "@/components/Clients";
import ProjectsSection from "@/components/ProjectsSection";
import Services from "@/components/Services";

// app/page.tsx
export default function Home() {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold mb-4">Welcome to Mahteck</h1>
      <p className="mb-6">Your trusted partner in software and business solutions.</p>

      <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Custom Software Development</li>
        <li>Website Design & Development</li>
        <li>Application Support & Consultancy</li>
        <li>Financial & Business Consultancy</li>
        <li>Cloud Hosting & Integration</li>
      </ul> */}

      <Banner />
      <Services />
      <ProjectsSection />
      <Clients />
    </div>
  )
}
