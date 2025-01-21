import ChooseTimePeriod from "@/components/ChooseTimePeriod";
import ChooseZodiacSign from "@/components/ChooseZodiacSign";
import HoroscopeDetailsShow from "@/components/HoroscopeDetailsShow";

export default function ZodiacSignPage() {
  return (
    <div className="flex flex-col lg:flex-row px-6 lg:px-12 py-6 gap-8">
      <HoroscopeDetailsShow />
      <div className="flex flex-col">
        <ChooseTimePeriod />
        <ChooseZodiacSign />
      </div>
    </div>
  );
}
