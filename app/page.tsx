import Bedroom from "@/components/Home/b-rooms";
import BrowseSection from "@/components/Home/browse";
import CoverImage from "@/components/Home/cover";
import OutProducts from "@/components/Home/out-product";

export default function Home() {
  return (
    <section className="bg-[#FFFFFF] h-screen overflow-y-auto">
      <CoverImage />
      <BrowseSection />
      <OutProducts />
      <Bedroom />
    </section>
  );
}
