import { Frame, FrameProps } from "@mf/flamingo";

interface Props extends FrameProps {
  project: string;
}

export default function WelcomeWidget({ project, ...props }: Props) {
  return (
    <Frame {...props}>
      <p>Welcome at {project}</p>
    </Frame>
  );
}
