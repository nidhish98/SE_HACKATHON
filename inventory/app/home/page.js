// /app/home/page.js
import Header from "@/components/Header";

export default function HomeAfterLogin() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-semibold">Welcome back!</h1>
      </div>
    </div>
  );
}
