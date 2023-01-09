import React from 'react';
import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#BB2649] flex items-center">
          <ArrowUturnLeftIcon className="h-5 w-5 mr-2" />
          Go to website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
