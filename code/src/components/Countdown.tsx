import { useEffect, useState } from "react";

type CountdownProps = {
  seconds: number;
  onCountdownDone: () => void;
};

export default function Countdown(props: CountdownProps) {
  const { seconds, onCountdownDone } = props;
  const [count, setCount] = useState<number>(seconds);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (count > 0) setCount(count - 1);
    }, 1000);

    if (count == 0) onCountdownDone();

    return () => {
      clearInterval(countdownInterval);
    };
  }, [count]);

  return (
    <>
      {count > 0 && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-100">
          <div className="relative bg-white/80 p-12 md:p-16 lg:p-24 rounded-full">
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl lg:text-6xl text-black font-bold">
              {count}
            </h1>
          </div>
        </div>
      )}
    </>
  );
}
