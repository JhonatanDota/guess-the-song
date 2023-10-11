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

    if(count == 0) onCountdownDone();

    return () => {
      clearInterval(countdownInterval);
    };
  }, [count]);

  return (
    <>
      {count > 0 && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black z-50">
          <div className="bg-white p-6 rounded-full">
            <h1 className="text-2xl text-black">{count}</h1>
          </div>
        </div>
      )}
    </>
  );
}
