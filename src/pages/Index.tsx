
import React from 'react';
import { 
  Home, 
  Settings, 
  GraduationCap, 
  Shield, 
  TrendingUp, 
  BarChart3,
  BookOpen,
  BookMarked,
  ClipboardList,
  FileText,
  CreditCard,
  Users,
  Mail,
  Globe,
  Monitor,
  Gamepad2,
  Video,
  Award,
  FileImage,
  Activity,
  BarChart,
  Building,
  UserCheck
} from 'lucide-react';
import Header from '../components/Header';
import AppCard from '../components/AppCard';
import Footer from '../components/Footer';

const Index = () => {
  const applications = [
    // Row 1
    { title: 'Web', subtitle: 'Home Page', icon: Home, bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
    { title: 'Sistem', subtitle: 'Informasi Management', icon: Settings, bgColor: 'bg-green-100', iconColor: 'text-green-600' },
    { title: 'ASA', subtitle: 'Supervisi Akademik', icon: GraduationCap, bgColor: 'bg-orange-100', iconColor: 'text-orange-600' },
    { title: 'SIKAP', subtitle: 'Keteriban & Prestasi', icon: Shield, bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
    { title: 'GOBIT', subtitle: 'Golden Habits', icon: TrendingUp, bgColor: 'bg-gray-100', iconColor: 'text-gray-600' },
    { title: 'SIKU', subtitle: 'Informasi Keuangan', icon: BarChart3, bgColor: 'bg-yellow-100', iconColor: 'text-yellow-600' },
    { title: 'Library', subtitle: 'Mujahidin Library', icon: BookOpen, bgColor: 'bg-teal-100', iconColor: 'text-teal-600' },
    { title: 'Magz', subtitle: 'Mujahidin Magz', icon: BookMarked, bgColor: 'bg-green-100', iconColor: 'text-green-600' },
    
    // Row 2
    { title: 'Penilaian', subtitle: 'Mujahidin Smart', icon: ClipboardList, bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
    { title: 'DOC', subtitle: 'Dokumen Akademik', icon: FileText, bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
    { title: 'PPDB', subtitle: 'Pendaftaran Siswa Baru', icon: UserCheck, bgColor: 'bg-orange-100', iconColor: 'text-orange-600' },
    { title: 'Card', subtitle: 'Kartu Pelajar', icon: CreditCard, bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
    { title: 'Notulen', subtitle: 'Notulen Digital', icon: Users, bgColor: 'bg-red-100', iconColor: 'text-red-600' },
    { title: 'Guest Book', subtitle: 'Buku Tamu Digital', icon: Mail, bgColor: 'bg-orange-100', iconColor: 'text-orange-600' },
    { title: 'Surat', subtitle: 'Persuratan Digital', icon: Mail, bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
    { title: 'ELMU', subtitle: 'Elearning Mujahidin', icon: Globe, bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
    
    // Row 3
    { title: 'SPMI', subtitle: 'Penjaminan Mutu Internal', icon: Activity, bgColor: 'bg-teal-100', iconColor: 'text-teal-600' },
    { title: 'SUPERTIM', subtitle: 'Supervisi Manajerial', icon: BarChart, bgColor: 'bg-orange-100', iconColor: 'text-orange-600' },
    { title: 'WEB Siswa', subtitle: 'Karya Kelas IT', icon: Monitor, bgColor: 'bg-gray-100', iconColor: 'text-gray-600' },
    { title: 'Game', subtitle: 'Game Karya Siswa', icon: Gamepad2, bgColor: 'bg-purple-100', iconColor: 'text-purple-600' },
    { title: 'Web', subtitle: 'Outing Class', icon: Globe, bgColor: 'bg-green-100', iconColor: 'text-green-600' },
    { title: 'Media', subtitle: 'Pembelajaran Siswa', icon: Video, bgColor: 'bg-orange-100', iconColor: 'text-orange-600' },
    { title: 'Prestasi', subtitle: 'SEWINDU SMPAM', icon: Award, bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
    { title: 'Brosur', subtitle: 'PPDB SMPAM', icon: FileImage, bgColor: 'bg-green-100', iconColor: 'text-green-600' }
  ];

  const handleCardClick = (title: string) => {
    console.log(`Clicked on ${title}`);
    // Add navigation logic here
  };

  return (
    <div className="min-h-screen school-background">
      {/* Settings Icon */}
      <div className="absolute top-4 left-4 z-10">
        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
          <Settings className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Settings Icon (bottom right) */}
      <div className="absolute bottom-4 right-4 z-10">
        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
          <Settings className="w-4 h-4 text-white" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <Header />
        
        {/* Applications Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mb-8">
          {applications.map((app, index) => (
            <AppCard
              key={index}
              title={app.title}
              subtitle={app.subtitle}
              icon={app.icon}
              bgColor={app.bgColor}
              iconColor={app.iconColor}
              onClick={() => handleCardClick(app.title)}
            />
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
