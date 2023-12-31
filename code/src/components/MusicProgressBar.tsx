type MusicProgressBarProps = {
  progress: number;
};

export default function MusicProgressBar(props: MusicProgressBarProps) {
  const { progress } = props;
  return (
    <div
      className={`bg-gray-100/40 rounded-full ${
        progress === 0 && "animate-pulse"
      }`}
    >
      <div
        className="bg-red-400 h-2.5 md:h-3.5 lg:h-5 rounded-full transition-width duration-100 max-w-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
