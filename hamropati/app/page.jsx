import Navbar from "@/components/Navbar";
import Bignews from "@/components/Bignews";
import Smallnews from "@/components/Smallnews";
import Longad from "@/components/Longad";

export default function Home() {
  return (
    <>
      <Navbar />
      <Bignews />
      <div className="flex flex-col mt-4 gap-3">
        <Longad />
        <div className="flex gap-4 w-full">
          <Smallnews />
          <Smallnews />
          <Smallnews />
        </div>
      </div>
    </>
  );
}
