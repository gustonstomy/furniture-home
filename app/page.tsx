import Footer from "@/components/footer";
import Bedroom from "@/components/Home/b-rooms";
import BrowseSection from "@/components/Home/browse";
import CoverImage from "@/components/Home/cover";
import OutProducts from "@/components/Home/out-product";
import GridImages from "@/components/Home/your-setup";

export default function Home() {
  return (
    <section className="bg-[#FFFFFF]">
      <CoverImage />
      <BrowseSection />
      <OutProducts />
      <Bedroom />
      <GridImages />
      <Footer />
    </section>
  );
}
