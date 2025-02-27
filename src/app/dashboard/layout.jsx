import Sidebar from "@/components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="w-[100vw] h-[100vh] grid grid-cols-[20vw,80vw] ">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
