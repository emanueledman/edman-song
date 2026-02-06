"use client"

import { ArtistPage } from "@/pages/ArtistPage"

export default function Artist({ params }: { params: { slug: string } }) {
  return <ArtistPage />
}
