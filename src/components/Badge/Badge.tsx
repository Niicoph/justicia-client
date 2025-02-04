import { Button } from '@/components/ui/button';

type BadgeProps = {
  description: string;
};

export default function Badge({ description }: BadgeProps) {
  return (
    <Button variant="outline" className="sm:text-[17px]">
      <img
        width="25"
        height="25"
        src="https://img.icons8.com/ios/50/FFFFFF/checked-checkbox--v1.png"
        alt="checked-checkbox--v1"
      />
      {description}
    </Button>
  );
}
