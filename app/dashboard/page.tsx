import React from 'react';
import { ChallengeCard } from '@/components/challenge-card';
import Link from 'next/link';

function Page() {
  return (
    <Link href={'/editor'}>
      <ChallengeCard />
    </Link>
  );
}

export default Page;
