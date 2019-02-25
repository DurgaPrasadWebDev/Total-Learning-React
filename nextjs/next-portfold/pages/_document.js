import Document, {Head,Main,NextScript} from 'next/document';


export default class MyDocument extends Document {
  render() {
    return (
        <html lang="eng">
            <Head>
                <meta charSet="utf-8"/>
                <meta name="description"  content="A page tell about the next js"/>
                <meta name="keyword" content="noinde, nosearch" />
                <meta name="viewport" content="width=device-width" />
                <link 
                    rel="stylesheet" 
                    type="text/css" 
                    href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                />
                <link 
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            <style global jsx>{`
                body
                {
                    font-family: 'Roboto', sans-serif;
                    margin: 0;
                    padding: 0;
                    background: lightgrey;
                }
            `}</style>
        </html>
        
    )
  }
}
