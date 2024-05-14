import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Checkbox } from './ui/checkbox'

export function TodoListTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="min-w-12" />
          <TableHead className="w-full text-left">Description</TableHead>
          <TableHead className="text-center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <Checkbox checked />
          </TableCell>
          <TableCell className="text-left line-through text-muted-foreground">
            Todo description test
          </TableCell>
          <TableCell className="text-center text-emerald-600">
            Completed
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell className="text-left">Todo description test</TableCell>
          <TableCell className="text-center text-amber-600">Pending</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
