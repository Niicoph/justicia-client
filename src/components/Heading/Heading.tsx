interface HeadingProps {
  message: string;
}

export default function Heading({ message }: HeadingProps) {
  return <h1 className="text-md inter-regular text-black ">{message}</h1>;
}
