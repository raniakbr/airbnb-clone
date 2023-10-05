import React, { FC } from "react";
import { SafeListing, SafeUser } from "@/app/types";

import { Reservation } from "@prisma/client";

interface ListingClientProps {
  reservation?: Reservation[];
  listing: SafeListing & { user: SafeUser };
  currentUser?: SafeUser | null | undefined;
}

const ListingClient: FC<ListingClientProps> = ({
  reservation,
  listing,
  currentUser,
}) => {
  return <div>ListingClient</div>;
};

export default ListingClient;
