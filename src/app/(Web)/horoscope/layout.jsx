import { HoroscopeContextProvider } from "@/lib/HoroscopeServicesContext";

export default function Horoscope({ children }) {
    return (
        <HoroscopeContextProvider>
            {children}
        </HoroscopeContextProvider>
    );
}
