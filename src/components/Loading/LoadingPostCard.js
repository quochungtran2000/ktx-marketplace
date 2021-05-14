import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

export default function LoadingPostCard() {
  return (
    <div className="grid-layout">
      <Skeleton width={"100%"} height={200}></Skeleton>
      <Skeleton width={"100%"} height={200}></Skeleton>
      <Skeleton width={"100%"} height={200}></Skeleton>
      <Skeleton width={"100%"} height={200}></Skeleton>
      <Skeleton width={"100%"} height={200}></Skeleton>
      <Skeleton width={"100%"} height={200}></Skeleton>
      <Skeleton width={"100%"} height={200}></Skeleton>
      <Skeleton width={"100%"} height={200}></Skeleton>
      <Skeleton width={"100%"} height={200}></Skeleton>
    </div>
  );
}
