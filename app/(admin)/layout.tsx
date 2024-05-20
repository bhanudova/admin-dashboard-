import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import AdminHeader from "../components/AdminHeader";
import AdminSideBar from "../components/AdminSideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Admin",
    description: "Admin Page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AdminHeader />
                <div className="flex flex-col md:flex-row h-screen pt-14">
                    <div className="w-[15rem]">
                        <AdminSideBar />
                    </div>
                    <div className="flex-1  border-l-[0.4px]">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
