import Document, { DocumentProps, Html, Head, NextScript, Main, DocumentContext } from 'next/document'

class MyDocument extends Document<DocumentProps> {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Shadows+Into+Light&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
