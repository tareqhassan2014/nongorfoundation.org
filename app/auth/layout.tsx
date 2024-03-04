

interface AuthLayoutProps{
    children: React.ReactNode
}

const AuthLayout = ({children}:AuthLayoutProps) => {
    return (
        <div className="flex py-20 flex-col justify-center items-center bg-gradient-to-r from-[#59BFDF] to-[#E739F5]">
            {children}
        </div>
    );
};

export default AuthLayout;