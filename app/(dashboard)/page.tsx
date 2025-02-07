import {UserButton} from "@clerk/nextjs"
import React from "react";
import { User } from "lucide-react";
export default function Home() {
  return (
    <UserButton afterSignOutUrl="/" />
    
  );
}
