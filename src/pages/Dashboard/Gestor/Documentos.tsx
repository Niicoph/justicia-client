import Heading from '../../../components/Heading/Heading';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Document from '../../../components/Document/Document';

import { Input } from '@/components/ui/input';
export default function Documentos() {
  return (
    <div className="flex flex-col items-center h-3/4  py-6 px-4 gap-4 border-b border-Jborder border">
      <div className="w-full flex justify-between h-6">
        <Heading message="Documentos"></Heading>
        <img
          src="https://img.icons8.com/material-rounded/96/plus-math--v1.png"
          alt="add"
          className="w-6 h-6"
        />
      </div>
      <div className=" rounded-md w-full h-80 flex flex-col gap-2">
        <form action="get" className="h-10 w-full">
          <Input
            type="text"
            placeholder="Buscar documento..."
            className="h-full w-full text-sm bg-transparent border border-Jborder rounded-md px-2"
          />
        </form>
        {/* Make it fixed when scrolling */}
        <Table>
          <TableHeader className="w-full">
            <TableRow className="">
              <TableHead className="w-2/4">Nombre</TableHead>
              <TableHead className="text-left">Estado</TableHead>
              <TableHead className="w-12 text-left">Accion</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="overflow-y-scroll">
            <TableRow>
              <Document name="Codigo_penal_de_la_nacion" status="Aprendido" />
            </TableRow>
            <TableRow>
              <Document name="Codigo_penal_de_la_nacion" status="Aprendido" />
            </TableRow>
            <TableRow>
              <Document name="Codigo_penal_de_la_nacion" status="Aprendido" />
            </TableRow>
            <TableRow>
              <Document name="Codigo_penal_de_la_nacion" status="Aprendido" />
            </TableRow>
            <TableRow>
              <Document name="Codigo_penal_de_la_nacion" status="Aprendido" />
            </TableRow>
            <TableRow>
              <Document name="Codigo_penal_de_la_nacion" status="Aprendido" />
            </TableRow>
            <TableRow>
              <Document name="Codigo_penal_de_la_nacion" status="Aprendido" />
            </TableRow>
            <TableRow>
              <Document name="Codigo_penal_de_la_nacion" status="Aprendido" />
            </TableRow>
            <TableRow>
              <Document name="Codigo_penal_de_la_nacion" status="Aprendido" />
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
