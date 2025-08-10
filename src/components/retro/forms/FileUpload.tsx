import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface FileUploadProps {
  id?: string;
  label?: string;
  accept?: string;
  multiple?: boolean;
  onFilesChange?: (files: FileList) => void;
  className?: string;
}

export const FileUpload = ({
  id = "file-upload",
  label = "Upload files",
  accept,
  multiple,
  onFilesChange,
  className,
}: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [hasFiles, setHasFiles] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setHasFiles(Boolean(files && files.length));
    if (files && onFilesChange) onFilesChange(files);
  };

  return (
    <div className={cn("space-y-2", className)}>
      <label htmlFor={id} className="text-sm text-muted-foreground">
        {label}
      </label>
      <div
        className={cn(
          "rounded-md border bg-secondary text-foreground p-4 flex items-center justify-between gap-3",
          "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background",
        )}
      >
        <div className="truncate text-sm">
          {hasFiles ? "Files selected" : "No file chosen"}
        </div>
        <div className="flex gap-2">
          <Button type="button" variant="secondary" onClick={() => inputRef.current?.click()}>
            Choose file
          </Button>
        </div>
        <input
          ref={inputRef}
          id={id}
          type="file"
          className="sr-only"
          onChange={handleChange}
          accept={accept}
          multiple={multiple}
        />
      </div>
    </div>
  );
};

export default FileUpload;
