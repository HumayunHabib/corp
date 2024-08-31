import Hero from "@/components/hero";
import homeImage from "/public/home.jpg";

export default function Home() {
  return (
    <div>
      <Hero
        imgData={homeImage}
        imgAlt="car factory"
        title="Professional Cloud Hosting"
      />
    </div>
  );
}
