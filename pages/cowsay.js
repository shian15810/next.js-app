import cowsay from 'cowsay-browser';
import Link from 'next/link';

export default () => (
  <div>
    <pre>{ cowsay.say({text: 'hi there!'}) }</pre>
    <div>Click <Link href='/' prefetch><a>home</a></Link> to go back</div>
  </div>
);
