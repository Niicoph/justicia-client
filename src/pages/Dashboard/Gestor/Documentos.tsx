import Heading from '../../../components/Heading/Heading';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Document from '../../../components/Document/Document';
import { Input } from '@/components/ui/input';

export default function Documentos() {
  return (
    <div className="flex flex-col items-center h-3/4 p-4 gap-4 border border-Jborder rounded-md lgCustom:h-full lgCustom:bg-white lgCustom:rounded-md">
      {/* Título y botón de agregar */}
      <div className="w-full flex justify-between h-6">
        <Heading message="Documentos" />
        <img
          src="https://img.icons8.com/material-rounded/96/plus-math--v1.png"
          alt="add"
          className="w-6 h-6"
        />
      </div>

      {/* Contenedor principal con altura limitada */}
      <div className="rounded-md w-full h-80 flex flex-col gap-2">
        {/* Barra de búsqueda */}
        <form action="get" className="h-10 w-full">
          <Input
            type="text"
            placeholder="Buscar documento..."
            className="h-full w-full text-sm bg-transparent border border-Jborder rounded-md px-2"
          />
        </form>

        {/* Contenedor de la tabla con scroll interno */}
        <div className="flex flex-col h-64">
          {/* Header fijo con efecto sticky */}
          <div className="sticky top-0 z-10">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-3/6 p-0 ">Nombre</TableHead>
                  <TableHead className="w-2/6  p-0  ">Estado</TableHead>
                  <TableHead className="w-1/6  p-0">Acción</TableHead>
                </TableRow>
              </TableHeader>
            </Table>
          </div>
          {/* Contenedor scrollable */}
          <div className="flex-1 overflow-y-auto">
            <Table className="w-full">
              <TableBody>
                {[...Array(10)].map((_, index) => (
                  <TableRow key={index}>
                    <Document name="Código Penal " status="Aprendido" />
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
