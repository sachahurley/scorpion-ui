import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useAppTheme } from "@/theme/ThemeProvider";
import { ClipboardCopy, Check } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export type TokenRow = {
  name: string;
  value: string; // CSS var or value to copy
  description?: string; // human-friendly description
  copy?: string; // override value to copy
};

interface DesignTokensTableProps {
  title?: string;
  tokens: TokenRow[];
}

export const DesignTokensTable = ({ title = "Design Tokens", tokens }: DesignTokensTableProps) => {
  const { theme } = useAppTheme();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Resolve CSS custom properties to actual values (for display only)
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

  const rows = useMemo(
    () => tokens.map((t) => ({ ...t, resolved: resolveCssVars(t.value) })),
    [tokens, theme]
  );

  const handleCopy = async (text: string, index: number) => {
    const toCopy = text;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(toCopy);
      } else {
        const ta = document.createElement("textarea");
        ta.value = toCopy;
        ta.setAttribute("readonly", "");
        ta.style.position = "absolute";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopiedIndex(index);
    } catch {
      // no-op
    }
  };

  useEffect(() => {
    if (copiedIndex === null) return;
    const id = setTimeout(() => setCopiedIndex(null), 2000);
    return () => clearTimeout(id);
  }, [copiedIndex]);

  // Retro theme: name + description with copy button
  if (theme === "retro") {
    return (
      <section aria-labelledby="design-tokens">
        <Card>
          <CardHeader>
            <CardTitle id="design-tokens">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <TooltipProvider>
              <Table>
                <TableBody>
                  {rows.map((t, idx) => {
                    const copyVal = t.copy ?? t.value;
                    const isCopied = copiedIndex === idx;
                    return (
                      <TableRow key={idx} className="border-b last:border-b-0">
                        <TableCell className="w-5/12 font-medium">{t.name}</TableCell>
                        <TableCell className="w-6/12 text-muted-foreground">
                          <p className="text-sm">
                            {t.description || `Token mapped to ${t.value}`}
                          </p>
                        </TableCell>
                        <TableCell className="w-1/12 text-right">
                          <div className="flex justify-end">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button
                                  type="button"
                                  onClick={() => handleCopy(copyVal, idx)}
                                  aria-label={isCopied ? `Copied ${t.name}` : `Copy ${t.name} token`}
                                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border bg-card text-card-foreground shadow-sm transition-smooth hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                                >
                                  {isCopied ? (
                                    <Check className="h-4 w-4" aria-hidden />
                                  ) : (
                                    <ClipboardCopy className="h-4 w-4" aria-hidden />
                                  )}
                                </button>
                              </TooltipTrigger>
                              <TooltipContent side="top">{isCopied ? "Copied" : "Copy"}</TooltipContent>
                            </Tooltip>
                            <span className="sr-only" aria-live="polite">
                              {isCopied ? `${t.name} copied to clipboard` : ""}
                            </span>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TooltipProvider>
          </CardContent>
        </Card>
      </section>
    );
  }

  // Default theme (unchanged): name + resolved value
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
