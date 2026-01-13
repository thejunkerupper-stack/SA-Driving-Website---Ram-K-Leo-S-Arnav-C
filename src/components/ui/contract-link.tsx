import { FileText } from "lucide-react";

export const ContractLink = () => {
  return (
    <div className="text-center py-9 border-t mt-12">
      <a
        href={`${import.meta.env.BASE_URL}SADriving2026Contract.pdf`}
        className="inline-flex items-center gap-2 text-primary hover:underline"
        download="SADriving2026Contract.pdf"
      >
        <FileText className="w-4 h-4" />
        <span>Download Program Contract</span>
      </a>
    </div>
  );
};