import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-1">
      <h1 className="text-4xl font-bold text-blue-600">Homepage</h1>
      <p className="font-sans">font sans</p>
      <p className="font-serif">font serif</p>
      <p className="font-mono">test</p>
      <Button>Test button</Button>
    </div>
  );
}
