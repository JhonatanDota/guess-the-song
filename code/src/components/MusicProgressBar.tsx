type MusicProgressBarProps = {
  progress: number;
};

export default function MusicProgressBar(props: MusicProgressBarProps) {
  return <progress value={props.progress} max="100"></progress>;
}
