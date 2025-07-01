
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone } from "lucide-react";

interface SocialSecurityCardProps {
  type: 'gold' | 'social';
  title: string;
  subtitle: string;
  services: string[];
  priceText: string;
  priceSubtext: string;
  benefits: string[];
  buttonText: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  iconBg: string;
  iconHover: string;
  checkColor: string;
}

export const SocialSecurityCard = ({
  title,
  subtitle,
  services,
  priceText,
  priceSubtext,
  benefits,
  buttonText,
  icon,
  gradientFrom,
  gradientTo,
  iconBg,
  iconHover,
  checkColor
}: SocialSecurityCardProps) => {
  return (
    <Card className={`card-elevated hover:-translate-y-3 transition-all duration-500 overflow-hidden bg-gradient-to-br ${gradientFrom} ${gradientTo} border-0`}>
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center mb-6">
          <div className={`bg-gradient-to-r ${iconBg} p-3 rounded-2xl mr-4 shadow-lg`}>
            <div className="w-6 h-6 text-white flex items-center justify-center">
              {icon}
            </div>
          </div>
          <div>
            <h3 className={`heading-card ${title.includes('บัตรทอง') ? 'text-amber-600' : 'text-green-600'}`}>
              {title}
            </h3>
            <p className={`text-body ${title.includes('บัตรทอง') ? 'text-amber-600/70' : 'text-green-600/70'}`}>
              {subtitle}
            </p>
          </div>
        </div>
        
        <div className="space-y-3 mb-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-center p-3 bg-white/80 rounded-xl hover:bg-white transition-all duration-300 shadow-soft">
              <CheckCircle className={`w-5 h-5 ${checkColor} mr-3 flex-shrink-0`} />
              <span className="text-base font-medium text-dental">{service}</span>
            </div>
          ))}
        </div>
        
        <div className={`bg-gradient-to-r ${gradientFrom.replace('from-', 'from-').replace('50', '100')} ${gradientTo.replace('to-', 'to-').replace('50', '100')} p-4 rounded-2xl border-2 ${title.includes('บัตรทอง') ? 'border-amber-200' : 'border-green-200'} mb-4`}>
          <div className="text-center">
            <div className={`text-3xl font-light ${title.includes('บัตรทอง') ? 'text-amber-600' : 'text-green-600'} mb-2`}>
              {priceText}
            </div>
            <div className={`text-lg ${title.includes('บัตรทอง') ? 'text-amber-600' : 'text-green-600'} font-medium`}>
              {priceSubtext}
            </div>
            <div className={`text-caption ${title.includes('บัตรทอง') ? 'text-amber-600/70' : 'text-green-600/70'} mt-2`}>
              {title.includes('บัตรทอง') ? 'สิทธิบัตรทอง' : 'ไม่ต้องสำรองจ่าย'}
            </div>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className={`w-5 h-5 ${checkColor} mr-3`} />
              <span className="text-body font-medium text-dental">{benefit}</span>
            </div>
          ))}
        </div>
        
        <Button 
          className={`btn-primary w-full bg-gradient-to-r ${iconBg} ${iconHover}`}
          onClick={() => window.open('tel:062-649-9979', '_self')}
        >
          <Phone className="w-5 h-5 mr-2" />
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};
