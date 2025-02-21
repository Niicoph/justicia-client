import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import AddButton from '../../AddButton/AddButton';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

{
  /* Titulo, descripcion , fecha (posterior a la actual) ,
        {hora_inicio, hora_fin}, notificar , minutos_previos_notificacion */
}

const formSchema = z.object({
  titulo: z.string().min(2).max(50),
  descripcion: z.string().max(255),
  fecha: z.string(),
  hora_inicio: z.string(),
  hora_fin: z.string(),
  notificar: z.boolean(),
  minutos_previos_notificacion: z.number().min(0).max(60),
});

export default function EventDialog() {
  // implementar Form para agregar eventos
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      titulo: '',
      descripcion: '',
      fecha: '',
      hora_inicio: '',
      hora_fin: '',
      notificar: true,
      minutos_previos_notificacion: 15,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger>
        <AddButton action="Agregar evento" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:min-w-[800px] lg:min-h-fit flex flex-col">
        <DialogHeader>
          <DialogTitle>Agregar Evento</DialogTitle>
          <DialogDescription>
            Llena los campos para agregar un nuevo evento. Recorda que podes
            activar las notificaciones.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-grow"
          >
            <div className="flex flex-col w-full border border-red-500">
              <FormField
                control={form.control}
                name="titulo"
                render={({
                  field,
                }: {
                  field: ReturnType<(typeof form)['register']>;
                }) => (
                  <FormItem>
                    <FormLabel>Titulo</FormLabel>
                    <FormControl>
                      <Input
                        className="w-full h-10 p-2"
                        placeholder="Entregar documentos escribania..."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="descripcion"
                render={({
                  field,
                }: {
                  field: ReturnType<(typeof form)['register']>;
                }) => (
                  <FormItem>
                    <FormLabel>Descripcion</FormLabel>
                    <FormControl>
                      <Input
                        className="w-full h-10 p-2"
                        placeholder="Opcional..."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Fecha</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-full pl-3 text-left font-normal flex justify-start',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Selecciona una fecha</span>
                            )}
                            {/* <CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> */}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value} // pasar valores a es
                          onSelect={field.onChange} // pasar valores a es
                          disabled={(date) =>
                            date < new Date() || date < new Date('1900-01-01')
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex w-full">
                <FormField
                  control={form.control}
                  name="Hora Inicio"
                  render={({
                    field,
                  }: {
                    field: ReturnType<(typeof form)['register']>;
                  }) => (
                    <FormItem className="w-full">
                      <FormLabel>Hora Inicio</FormLabel>
                      <FormControl>
                        <Input
                          type="time"
                          className="w-full h-10 p-2"
                          placeholder="Opcional..."
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Hora Fin"
                  render={({
                    field,
                  }: {
                    field: ReturnType<(typeof form)['register']>;
                  }) => (
                    <FormItem className="w-full">
                      <FormLabel>Hora Fin</FormLabel>
                      <FormControl>
                        <Input
                          type="time"
                          className="w-full h-10 p-2"
                          placeholder="Opcional..."
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="Noficar"
                render={({
                  field,
                }: {
                  field: ReturnType<(typeof form)['register']>;
                }) => (
                  <FormItem>
                    <FormLabel>Notificar</FormLabel>
                    <FormControl>
                      <Input
                        type="checkbox"
                        className="w-full h-10 p-2"
                        placeholder="Opcional..."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
