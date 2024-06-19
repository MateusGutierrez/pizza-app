import { Dashboard } from "./ui/dashboard";
import { Footer } from "./utils/footer";
import { Header } from "./utils/header";


export default function Home() {
  return (
    <main className="bg-color1 relative">
        <Header/>
        <Dashboard/>
        <Footer/>
    </main>
  );
}
