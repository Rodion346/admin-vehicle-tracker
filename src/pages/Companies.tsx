
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
import { api } from "@/services/api";

const Companies = () => {
  const { data: companies, isLoading } = useQuery({
    queryKey: ['companies'],
    queryFn: api.getCompanies
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Компании</h1>
          <p className="text-gray-500">Управление компаниями и их транспортными средствами</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Добавить компанию
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Все компании</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Название компании</TableHead>
                <TableHead>Количество ТС</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {companies?.map((company) => (
                <TableRow key={company.id}>
                  <TableCell className="font-medium">
                    {company.name}
                  </TableCell>
                  <TableCell>{company.vehicles.length} ТС</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Просмотр
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

export default Companies;
