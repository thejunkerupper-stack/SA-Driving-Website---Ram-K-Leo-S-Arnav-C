import * as React from "react"
import { Input } from "./input"
import { Search as SearchIcon } from "lucide-react"

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void
}

export function Search({ className, onSearch, ...props }: SearchProps) {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        {...props}
        className="pl-8"
        placeholder="Search..."
        onChange={(e) => onSearch?.(e.target.value)}
      />
    </div>
  )
}