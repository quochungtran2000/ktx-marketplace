import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

export default function LoadingLocation() {
  return (
    <div>
      <Skeleton width={100} height={30}></Skeleton>
      <Skeleton width={100} height={30}></Skeleton>
      <Skeleton width={100} height={30}></Skeleton>
      <Skeleton width={100} height={30}></Skeleton>
    </div>
  );
}
