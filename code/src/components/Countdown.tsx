import { useEffect, useState } from "react";
import { CountdownCircleTimer, TimeProps } from "react-countdown-circle-timer";

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

    if (count === 0) onCountdownDone();

    return () => {
      clearInterval(countdownInterval);
    };
  }, [count]);

  function renderTime(countdownProps: TimeProps) {
    const remainingTime = countdownProps.remainingTime;

    return (
      <div className="flex justify-center text-white">
        <p className="text-4xl md:text-5xl font-bold">
          {remainingTime > 0 && remainingTime}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-100">
        <CountdownCircleTimer
          isPlaying
          duration={seconds}
          colors="#38b000"
          strokeWidth={20}
          trailColor={"#00"}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </>
  );
}
