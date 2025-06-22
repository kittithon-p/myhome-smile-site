
import { CreditCard, Shield, Heart, Star } from "lucide-react";
import { SocialSecurityCard } from "./social-security/SocialSecurityCard";
import { SocialSecurityCTA } from "./social-security/SocialSecurityCTA";
import { goldCardServices, socialSecurityServices } from "./social-security/SocialSecurityData";

export const SocialSecuritySection = () => {
  return (
    <section className="section-spacing bg-gradient-to-br from-amber-50/30 via-green-50/20 to-blue-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E8F4F8' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto container-spacing relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft mb-6">
            <Heart className="w-5 h-5 text-dental-primary mr-2" />
            <span className="text-caption font-medium text-dental-primary uppercase tracking-wider">
              สิทธิการรักษา
            </span>
          </div>
          
          <h2 className="heading-section mb-6">
            รับทั้งบัตรทองและประกันสังคม
            <br />
            <span className="text-dental-primary">รักษาฟันครบทุกรายการ</span>
          </h2>
          
          <p className="text-body-large text-dental-light max-w-2xl mx-auto">
            MY HOME Dental Clinic รับทั้งบัตรทองและประกันสังคม 
            <span className="text-dental-secondary font-semibold"> แค่นำบัตรประชาชนมา!</span>
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center text-caption text-dental-light">
              <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
              <span>รับสิทธิครบทุกประเภท</span>
            </div>
            <div className="w-1 h-1 bg-dental-light rounded-full"></div>
            <div className="text-caption text-dental-light">
              ไม่ต้องสำรองจ่าย
            </div>
          </div>
        </div>

        {/* Combined Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Gold Card */}
          <SocialSecurityCard
            type="gold"
            title="บัตรทอง"
            subtitle="บัตรประกันสุขภาพถ้วนหน้า"
            services={goldCardServices}
            priceText="ฟรี"
            priceSubtext="ไม่มีค่าใช้จ่าย"
            benefits={[
              "แค่บัตรประชาชน + บัตรทอง",
              "ไม่ต้องจ่ายเงินเพิ่ม",
              "รักษาได้ทันที"
            ]}
            buttonText="โทรจองคิวบัตรทอง"
            icon={<CreditCard className="w-8 h-8 text-white" />}
            gradientFrom="from-amber-50"
            gradientTo="to-yellow-50"
            iconBg="from-amber-500 to-yellow-500"
            iconHover="hover:from-amber-600 hover:to-yellow-600"
            checkColor="text-amber-500"
          />

          {/* Social Security */}
          <SocialSecurityCard
            type="social"
            title="ประกันสังคม"
            subtitle="สิทธิประกันสังคม"
            services={socialSecurityServices}
            priceText="900 บาท/ปี"
            priceSubtext="สิทธิประกันสังคม"
            benefits={[
              "แค่บัตรประชาชนเท่านั้น",
              "ได้ทั้ง ถอน อุด ขูด ผ่า",
              "รักษาก่อน สบายกว่า"
            ]}
            buttonText="โทรจองคิวประกันสังคม"
            icon={<Shield className="w-8 h-8 text-white" />}
            gradientFrom="from-green-50"
            gradientTo="to-emerald-50"
            iconBg="from-green-500 to-emerald-500"
            iconHover="hover:from-green-600 hover:to-emerald-600"
            checkColor="text-green-500"
          />
        </div>
        
        {/* Bottom highlight */}
        <SocialSecurityCTA />
      </div>
    </section>
  );
};
