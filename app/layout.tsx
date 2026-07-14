import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"शिव स्वरोदय ज्ञानकोष",description:"श्वास, स्वर, नाड़ी, प्राण और पंचतत्त्व का पारंपरिक एवं शैक्षिक अध्ययन"};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="hi"><body>{children}</body></html>}
