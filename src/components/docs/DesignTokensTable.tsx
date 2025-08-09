import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export type TokenRow = {
  name: string;
  value: string;
};

interface DesignTokensTableProps {
  title?: string;
  tokens: TokenRow[];
}

export const DesignTokensTable = ({ title = "Design Tokens", tokens }: DesignTokensTableProps) => {
  return (
    <section aria-labelledby="design-tokens">
      <Card>
        <CardHeader>
          <CardTitle id="design-tokens">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              {tokens.map((t, idx) => (
                <TableRow key={idx} className="border-b last:border-b-0">
                  <TableCell className="w-1/2 font-medium">{t.name}</TableCell>
                  <TableCell className="w-1/2 text-muted-foreground">{t.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
};

export default DesignTokensTable;
