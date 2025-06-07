import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Play,
  GraduationCap,
  Users,
  MapPin,
  HeadphonesIcon,
  MessageCircle,
  Download,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-400 to-orange-500 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 text-white">
            <GraduationCap className="h-8 w-8" />
            <span className="text-xl font-bold">misafirinvar</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-white">
            <a href="#" className="hover:text-orange-100 transition-colors">
              Temsilcilik Sistemi
            </a>
            <a href="#" className="hover:text-orange-100 transition-colors">
              SSS
            </a>
            <a href="#" className="hover:text-orange-100 transition-colors">
              Destek
            </a>
          </nav>

          <Button
            variant="secondary"
            className="bg-white text-orange-500 hover:bg-orange-50 font-semibold px-6"
          >
            Hemen
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 to-orange-500 px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Üniversiteliler
              <br />
              tek çatı altında!
            </h1>
            <Button
              size="lg"
              className="bg-white text-orange-500 hover:bg-orange-50 font-semibold px-8 py-4 text-lg rounded-full"
            >
              Hemen Katıl
            </Button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-orange-300 to-orange-600 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 lg:w-88 lg:h-88 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center text-orange-500">
                    <div className="w-32 h-32 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <GraduationCap className="h-16 w-16 text-orange-500" />
                    </div>
                    <p className="text-lg font-semibold">Mutlu Öğrenci</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-16">
            Öne Çıkanlar
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Misafirlik App */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Users className="h-12 w-12 text-orange-500 mx-auto mb-2" />
                      <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Misafirlik App
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Misafirlik
                </h3>
                <p className="text-gray-600 text-sm">
                  Üniversite öğrencileri için misafirlik platformu
                </p>
              </CardContent>
            </Card>

            {/* Etkinlikler App */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Users className="h-12 w-12 text-orange-500 mx-auto mb-2" />
                      <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Etkinlikler
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Etkinlikler
                </h3>
                <p className="text-gray-600 text-sm">
                  Kampüs etkinlikleri ve sosyal aktiviteler
                </p>
              </CardContent>
            </Card>

            {/* UniSpot App */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-2" />
                      <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        UniSpot
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  UniSpot
                </h3>
                <p className="text-gray-600 text-sm">
                  Kampüs haritası ve konum paylaşımı
                </p>
              </CardContent>
            </Card>

            {/* Video Section */}
            <Card className="bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 h-full flex flex-col justify-center items-center text-white text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Play className="h-10 w-10 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Tanıtım Videosu</h3>
                  <p className="text-orange-100 text-sm">
                    Platformumuzu keşfedin
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 px-6 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-4">
                Hakkımızda
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Lorem ipsum dolor
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Lorem ipsum dolor
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Lorem ipsum dolor
                  </a>
                </li>
              </ul>
            </div>

            {/* Representative System */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-4">
                Temsilcilik Sistemi
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Lorem ipsum dolor
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Lorem ipsum dolor
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Lorem ipsum dolor
                  </a>
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-4">SSS</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Lorem ipsum dolor
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Lorem ipsum dolor
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Lorem ipsum dolor
                  </a>
                </li>
              </ul>
            </div>

            {/* QR Code and App Download */}
            <div className="text-center">
              <div className="inline-block p-4 bg-gray-100 rounded-lg mb-4">
                <div className="w-24 h-24 bg-white border-2 border-gray-300 rounded flex items-center justify-center">
                  <div className="grid grid-cols-8 gap-px">
                    {Array.from({ length: 64 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-1 h-1 ${
                          Math.random() > 0.5 ? "bg-black" : "bg-white"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Mobil uygulamayı İndir
              </h4>
              <p className="text-sm text-gray-600">QR kodu telefonunuz terat</p>
              <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white">
                <Download className="h-4 w-4 mr-2" />
                İndir
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-500 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-white text-sm">
            <div className="flex items-center space-x-2 mb-2 md:mb-0">
              <GraduationCap className="h-5 w-5" />
              <span>© 2024 misafirinvar. Tüm hakları saklıdır.</span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="hover:text-orange-100 transition-colors flex items-center"
              >
                <HeadphonesIcon className="h-4 w-4 mr-1" />
                Destek
              </a>
              <a
                href="#"
                className="hover:text-orange-100 transition-colors flex items-center"
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                İletişim
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
