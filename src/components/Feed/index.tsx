import { Box } from "@chakra-ui/react";
import React from "react";
import { rawCat } from "../../app/features/cats/catSlice";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import Card from "../Card";
import Spinner from "../Spinner";

export default function Feed() {
  const status = useAppSelector((state: RootState) => state.cats.status);
  if (status == "fulfilled") {
    return <Card />;
  } else {
    return (
      <Box
        h={{base: '40%', lg: '50%'}}
        marginTop={{base: '65%', lg: '15%'}}
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Spinner />
      </Box>
    );
  }
}
