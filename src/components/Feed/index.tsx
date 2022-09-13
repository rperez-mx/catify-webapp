import { Box, Skeleton } from "@chakra-ui/react";
import React from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import Card from "../Card";
import CardSkeleton from "../Card/skeleton";
import Spinner from "../Spinner";

export default function Feed() {
  const status = useAppSelector((state: RootState) => state.cats.status);
  if (status == "fulfilled") {
    return <Card />;
  } else {
    return <CardSkeleton />;
  }
}
