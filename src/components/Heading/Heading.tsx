interface HeadingProps {
  message: string;
}

export default function Heading({ message }: HeadingProps) {
  return <h1 className="text-3xl text-Jtitle nunito-bold ">{message}</h1>;
}
