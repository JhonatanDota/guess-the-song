type MusicProgressBarProps = {
  progress: number;
};

export default function MusicProgressBar(props: MusicProgressBarProps) {
  return (
    <div className="p-2 bg-gray-200 rounded-full">
      <div
        className="bg-blue-500 h-2.5 rounded-full transition-width duration-200 max-w-full"
        style={{ width: `${props.progress}%` }}
      ></div>
    </div>
  );
}
