import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

type FaqProps = {
  question: string;
  answer: string;
};

export default function Faq({ question, answer }: FaqProps) {
  return (
    <Collapsible className="bg-grayDark border border-Bgray border-opacity-10 rounded-xl text-white inter-semibold p-4  text-md lg:w-3/4">
      <CollapsibleTrigger className="flex justify-between items-center w-full text-left">
        {question}
        <span className="text-Bgray text-opacity-30 text-lg ml-4">+</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="inter-regular text-sm text-Bgray text-opacity-60 mt-3 mb-3">
        {answer}
      </CollapsibleContent>
    </Collapsible>
  );
}
