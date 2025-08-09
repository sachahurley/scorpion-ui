import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useAppTheme } from "@/theme/ThemeProvider";

export type TokenRow = {
  name: string;
  value: string;
};

interface DesignTokensTableProps {
  title?: string;
  tokens: TokenRow[];
}

export const DesignTokensTable = ({ title = "Design Tokens", tokens }: DesignTokensTableProps) => {
  const { theme } = useAppTheme();

  const resolveCssVars = (val: string) => {
    if (typeof window === "undefined") return val;
    const root = document.documentElement;
    try {
      return val.replace(/var\(--([^)]+)\)/g, (_, name) => {
        const computed = getComputedStyle(root).getPropertyValue(`--${name}`).trim();
        return computed || val;
      });
    } catch {
      return val;
    }
  };

  const rows = useMemo(() => tokens.map((t) => ({ ...t, resolved: resolveCssVars(t.value) })), [tokens, theme]);

  return (
    <section aria-labelledby="design-tokens">
      <Card>
        <CardHeader>
          <CardTitle id="design-tokens">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              {rows.map((t, idx) => (
                <TableRow key={idx} className="border-b last:border-b-0">
                  <TableCell className="w-1/2 font-medium">{t.name}</TableCell>
                  <TableCell className="w-1/2 text-muted-foreground">
                    <code>{t.resolved}</code>
                  </TableCell>
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
