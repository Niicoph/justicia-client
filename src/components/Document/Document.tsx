import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface DocumentProps {
  name: string;
  status: string;
}

export default function Document({ name, status }: DocumentProps) {
  return (
    <>
      {/* for each document, we add a new table cell */}
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell className="text-left">
        <p className="border-2 border-[#59AA41] bg-[#094F2B] text-[#59AA41] rounded-md px-2 py-1 text-xs inter-semibold">
          {status}
        </p>
        {/* <p className="border-2 border-[#CF1D1D] bg-[#8E0000] text-[#CF1D1D] rounded-md px-2 py-1 text-xs inter-semibold">
          {status}
        </p> */}
      </TableCell>
      <TableCell className="flex justify-center items-center">
        <img
          src="https://img.icons8.com/material-rounded/96/menu-2.png"
          alt="action"
          className="w-6 h-6"
        />
      </TableCell>
    </>
  );
}
