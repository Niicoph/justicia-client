import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';

interface BoxContainerProps {
  content: string;
  description: string;
  time: string;
  color: string;
}

export default function BoxContainer({
  content,
  description,
  time,
  color,
}: BoxContainerProps) {
  return (
    <Drawer>
      <DrawerTrigger className="w-full h-16 border border-Jborder flex items-center shadow-sm rounded-lg bg-[#F7F8FD] p-4">
        <div className={`w-1 h-1 rounded-full ${color}`}></div>
        <div className="w-full flex justify-between items-center p-2">
          <p className="text-md inter-regular text-gray-600">{content}</p>
          <p className="text-sm text-Jprimary">{time}</p>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex flex-col gap-4">
          <DrawerTitle className="flex items-center justify-center gap-2 ">
            <div className={`w-1 h-1 rounded-full ${color}`}></div>
            {content}
          </DrawerTitle>
          <DrawerDescription className="text-balance">
            {' '}
            {description}{' '}
          </DrawerDescription>
          <DrawerTitle> {time} </DrawerTitle>
        </DrawerHeader>
        {/* <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Cerrar</Button>
          </DrawerClose>
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
}
