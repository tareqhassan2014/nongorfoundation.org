

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="dashboardLayout">
            <div className="dashboardHeader">
                dashboard header
            </div>
            {
                children
            }
            <div className="dashboardFooter">
                dashboardFooter
            </div>
        </div>
    );
}
