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
import AddButton from '../../../components/AddButton/AddButton';

export default function Documentos() {
  return (
    <div className="flex flex-col  h-full p-4 gap-4  lgCustom:bg-white border-b border-Jborder overflow-y-scroll">
      <AddButton action="Agregar Documento" />
      {/* Contenedor principal con altura limitada */}
      <div className="rounded-md w-full flex-grow h-10 flex flex-col gap-2 overflow-y-scroll">
        {/* Barra de búsqueda */}
        <form action="get" className="h-10 w-full">
          <Input
            type="text"
            placeholder="Buscar documento..."
            className="h-full w-full text-sm bg-transparent border border-Jborder rounded-md px-2"
          />
        </form>
        <div className="flex flex-grow flex-col  overflow-y-scroll">
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

          <div className="flex h-fit overflow-y-auto">
            <Table>
              <TableBody>
                {[...Array(100)].map((_, index) => (
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
