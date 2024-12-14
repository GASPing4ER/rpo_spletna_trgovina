import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/utils";
import { TOrder } from "@/types";

type OrdersTableProps = {
  orders: TOrder[] | null;
};

const OrdersTable = ({ orders }: OrdersTableProps) => {
  console.log(orders);
  return (
    <Table className="border w-[500px]">
      <TableCaption>A list of your recent orders.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Order</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders &&
          orders.map((order, index) => (
            <TableRow key={order.id}>
              <TableCell>#{index + 1}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.total_price} €</TableCell>
              <TableCell>{formatDate(order.created_at)}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default OrdersTable;
