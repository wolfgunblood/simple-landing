"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useRef, useState } from "react";

type FeaturesProps = {
  name: string;
  description: string;
  logo: React.ReactNode;
};

const CardGrid = (props: FeaturesProps) => {


  return (
    <Card>
      <div className="pl-6 pt-6">{props.logo}</div>
      <CardHeader className="pb-6">
        <CardTitle className="text-xl">{props.name}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default CardGrid;
