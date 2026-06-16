import { Button } from '../components/ui/button';
import { CheckCircle2, Download, Home } from 'lucide-react';

interface SuccessProps {
  email: string;
  onGoHome: () => void;
}

export function Success({ email, onGoHome }: SuccessProps) {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-8 py-12 animate-in zoom-in duration-500">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
        <CheckCircle2 className="h-16 w-16" />
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-black">شكراً لك! تم طلبك بنجاح</h1>
        <p className="text-lg text-muted-foreground">
          تم إرسال تفاصيل الطلب وروابط التحميل إلى: <br />
          <span className="font-bold text-foreground">{email}</span>
        </p>
      </div>

      <div className="p-8 border-2 border-dashed rounded-3xl space-y-6">
        <h3 className="text-xl font-bold">روابط التحميل المباشرة</h3>
        <div className="space-y-3">
          <Button className="w-full h-14 gap-3 text-lg font-bold" variant="secondary">
            <Download className="h-5 w-5" />
            تحميل الملفات (ZIP)
          </Button>
          <Button className="w-full h-14 gap-3 text-lg font-bold" variant="outline">
            <Download className="h-5 w-5" />
            دليل البدء السريع (PDF)
          </Button>
        </div>
      </div>

      <div className="pt-8">
        <Button variant="ghost" className="gap-2" onClick={onGoHome}>
          <Home className="h-4 w-4" />
          العودة للرئيسية
        </Button>
      </div>
    </div>
  );
}
