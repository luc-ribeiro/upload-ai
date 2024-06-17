import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export function ModelSelect() {
  return (
    <>
      <Label>Model</Label>
      <Select disabled defaultValue="gpt3.5">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
        </SelectContent>
      </Select>

      <span className="block text-xs text-muted-foreground italic">You will be able to customize this option soon</span>
    </>
  )
}