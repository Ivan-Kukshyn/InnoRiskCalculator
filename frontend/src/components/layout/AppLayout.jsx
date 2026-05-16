import AppHeader from "./AppHeader";

const AppLayout = ({ children }) => (
  <div className="flex min-h-screen flex-col bg-slate-50 text-slate-950">
    <AppHeader />
    <main className="flex-1 py-5 sm:py-8">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  </div>
);

export default AppLayout;
