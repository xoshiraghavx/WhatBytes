import Header from "@/components/elements/header";
import Sidebar from "@/components/elements/sidebar";
import SkillTest from "@/components/elements/SkillTest";

export default function Home() {
  
  return (
    <main>
      <Header />
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <SkillTest />
      </div>
    </main>
  );
}
