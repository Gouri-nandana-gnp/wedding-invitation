"use client";

import { InviteSection } from "./InviteSection";
import { GroomBrideSection } from "./GroomBrideSection";
import { WeddingEventsSection } from "./WeddingEventsSection";
import { GallerySection } from "./GallerySection";
import { ThankYouSection } from "./ThankYouSection";

export function InvitationPage() {
  return (
    <div className="invite-shell bg-cream">
      <InviteSection />
      <GroomBrideSection />
      <WeddingEventsSection />
      <GallerySection />
      <ThankYouSection />
    </div>
  );
}
