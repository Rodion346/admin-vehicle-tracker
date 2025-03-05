
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { api } from "@/services/api";

const getStatusColor = (endDate: string) => {
  const daysUntilExpiry = Math.floor((new Date(endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  
  if (daysUntilExpiry < 0) return "destructive";
  if (daysUntilExpiry < 7) return "destructive";
  if (daysUntilExpiry < 30) return "orange";
  if (daysUntilExpiry < 90) return "yellow";
  return "success";
};

const Vehicles = () => {
  const { data: vehicles } = useQuery({
    queryKey: ['vehicles'],
    queryFn: api.getVehicles
  });

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Транспортные средства</h1>
          <p className="text-gray-500">Управление транспортными средствами</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Добавить ТС
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Все транспортные средства</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Гос. номер</TableHead>
                <TableHead>Серия пропуска</TableHead>
                <TableHead>Номер пропуска</TableHead>
                <TableHead>Начало действия</TableHead>
                <TableHead>Окончание действия</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vehicles?.map((vehicle) => (
                <TableRow key={vehicle.id}>
                  <TableCell>{vehicle.licensePlate}</TableCell>
                  <TableCell>{vehicle.passSerialNumber}</TableCell>
                  <TableCell>{vehicle.passNumber}</TableCell>
                  <TableCell>
                    {new Date(vehicle.passStartDate).toLocaleDateString('ru-RU')}
                  </TableCell>
                  <TableCell>
                    {new Date(vehicle.passEndDate).toLocaleDateString('ru-RU')}
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(vehicle.passEndDate)}>
                      {vehicle.isActive ? 'Действует' : 'Аннулирован'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Изменить
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Vehicles;

