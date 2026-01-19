import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Ruler } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function SizeGuide() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-muted-foreground hover:text-primary p-0 h-auto font-body text-sm underline decoration-dotted underline-offset-4">
          <Ruler className="w-4 h-4 mr-1" /> Size Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold uppercase">Glove Size Guide</DialogTitle>
          <DialogDescription className="font-body">
            Measure the circumference of your palm just below the knuckles, excluding the thumb.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-border">
                <TableHead className="text-primary font-bold uppercase">Size</TableHead>
                <TableHead className="text-right text-primary font-bold uppercase">Palm Circumference</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-accent/5 border-border">
                <TableCell className="font-bold">Small (S)</TableCell>
                <TableCell className="text-right">6.5" - 7.0"</TableCell>
              </TableRow>
              <TableRow className="hover:bg-accent/5 border-border">
                <TableCell className="font-bold">Medium (M)</TableCell>
                <TableCell className="text-right">7.0" - 7.5"</TableCell>
              </TableRow>
              <TableRow className="hover:bg-accent/5 border-border">
                <TableCell className="font-bold">Large (L)</TableCell>
                <TableCell className="text-right">7.5" - 8.5"</TableCell>
              </TableRow>
              <TableRow className="hover:bg-accent/5 border-border">
                <TableCell className="font-bold">X-Large (XL)</TableCell>
                <TableCell className="text-right">8.5" - 9.5"</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="bg-accent/10 p-4 border border-border rounded-sm">
          <p className="text-sm text-muted-foreground font-body">
            <strong className="text-white uppercase text-xs tracking-widest block mb-1">Pro Tip:</strong>
            If you are between sizes, we recommend sizing up for a more comfortable fit, or sizing down for a tighter, compression-style fit.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
