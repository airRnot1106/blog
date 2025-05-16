import { permanentRedirect } from 'next/navigation';

export default async function Articles() {
  permanentRedirect('/articles/page/1');
}
