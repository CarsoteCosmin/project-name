import Link from 'next/link';

import Page1 from '../pages/page1';
import Page2 from '../pages/page2';

function index() {
  return (
    <ul>
      <li>
        <Link href="/page1">
          <Page1 />
        </Link>
      </li>
      <li>
        <Link href="/page2">
          <Page2 />
        </Link>
      </li>
    </ul>
  );
}

export default index;
