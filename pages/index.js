import Corporate from "../components/Home/Corporate";
import OurWorks from "../components/Home/ourworks";
import Platforms from "../components/Home/platforms";
import Services from "../components/Home/services";
import Statistics from "../components/Home/statistics";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Corporate />
      <Services />
      <Platforms />
      <OurWorks />
      <Statistics />
    </div>
  );
}
