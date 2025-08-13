import { counterData } from "@/assets/assets";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {counterData.map((counter) => {
          return (
            <div className="text-center" key={counter.id}>
              <CountUp
                start={0}
                end={counter.counterNumber}
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                suffix="+"
                className="text-4xl text-blue-500 font-bold mb-2"
              />
              <h1 className="text-base md:text-lg text-gray-700 dark:text-gray-100">
                {counter.title}
              </h1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Counter;
