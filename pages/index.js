import 'isomorphic-fetch';
import Head from 'next/head'
import Link from 'next/link';

const Index = ({
  query: {
    results: {
      channel: {
        item: {
          condition: {
            date,
            temp,
            text
          }
        }
      }
    }
  }
}) => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
    </Head>
    <div>Welcome to next.js!</div>
    <img src='/static/cola.jpg' style={{width: '200px'}}/>
    <div>Weather in Taipei is {text} ({temp}°C) on {date}</div>
    <div>Click <Link href='/cowsay' prefetch><a>cowsay</a></Link> to read more</div>
  </div>
);

Index.getInitialProps = async ({req}) => {
  const res = await fetch('https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202306179%20and%20u%3D%22c%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys');
  const json = await res.json();
  return json;
}

export default Index;
