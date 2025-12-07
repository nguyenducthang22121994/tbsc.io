import DashboardLayout from '@/components/DashboardLayout';
import LeftPanel from '@/components/LeftPanel';
import RightPanel from '@/components/RightPanel';

export default function Home() {
  return (
    <DashboardLayout>
      <div className="flex flex-col lg:flex-row h-[calc(100vh-100px)]">
        <LeftPanel />
        <RightPanel />
      </div>
    </DashboardLayout>
  );
}
