import { Button } from '@/components/ui/button';

type AddButtonProps = {
  action: string;
  onCLick?: () => void;
  newNoteLoading?: boolean;
};

export default function AddButton({ action, newNoteLoading }: AddButtonProps) {
  return (
    <Button
      type="submit"
      disabled={newNoteLoading}
      id="calendar-input"
      className="flex justify-center items-center rounded-md border border-Jborder w-full h-10 shadow-none text-gray-500 hover:bg-slate-100"
      name="calendar-button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={20}
        height={20}
        color={'#9ca3af'}
        fill={'none'}
      >
        <path
          d="M12 4V20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 12H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {action}
    </Button>
  );
}
