
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Settings } from "lucide-react";
import { ExpertiseItem } from "@/data/expertise";

interface ExpertiseTableProps {
  expertiseData: ExpertiseItem[];
}

export function ExpertiseTable({ expertiseData }: ExpertiseTableProps) {
  return (
    <Accordion type="single" collapsible defaultValue="expertise-table" className="bg-card shadow-sm rounded-lg overflow-hidden animate-scale-in">
      <AccordionItem value="expertise-table">
        <AccordionTrigger className="p-4 border-b font-semibold">
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-tech-500" />
            <span>Technical Expertise Detail</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="overflow-x-auto p-2">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted">
                  <TableHead className="w-[50px]"></TableHead>
                  <TableHead className="w-[150px]">AREA</TableHead>
                  <TableHead>EXPERIENCE</TableHead>
                  <TableHead>ADDITIONAL KNOWLEDGE</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {expertiseData.map((item, index) => (
                  <TableRow key={index} className="transition-all duration-300 hover:bg-muted/80">
                    <TableCell className="p-2">{item.icon}</TableCell>
                    <TableCell className="p-2 font-medium text-tech-600 dark:text-tech-400">{item.area}</TableCell>
                    <TableCell className="p-2">{item.experience}</TableCell>
                    <TableCell className="p-2">{item.additionalKnowledge}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
