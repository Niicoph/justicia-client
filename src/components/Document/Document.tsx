import { TableCell } from '@/components/ui/table';

interface DocumentProps {
  name: string;
  status: string;
}

export default function Document({ name, status }: DocumentProps) {
  return (
    <>
      {/* for each document, we add a new table cell */}
      <TableCell className="font-medium w-3/6 py-2 px-0">{name}</TableCell>
      <TableCell className="w-2/6 py-2 px-0">
        <p className="w-28 border-2 border-[#65AE80] bg-[#F0FDF4] text-[#65AE80] rounded-md px-2 py-1 text-xs inter-semibold">
          {status}
        </p>
        {/* <p className="border-2 border-[#CF1D1D] bg-[#8E0000] text-[#CF1D1D] rounded-md px-2 py-1 text-xs inter-semibold">
          {status}
        </p> */}
      </TableCell>
      <TableCell className="py-2 px-0 w-1/6">
        <img
          src="https://img.icons8.com/material-rounded/96/menu-2.png"
          alt="action"
          className="w-6 h-6"
        />
      </TableCell>
    </>
  );
}
