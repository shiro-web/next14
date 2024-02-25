import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "lucide-react";
import Image from "next/image";
import { Input } from "postcss";
import BBSCardList from "./components/BBSCardList";

export default function Home() {
  return (
    <main>
      <BBSCardList/>
    </main>
  );
}
