import React from "react"

class Layout extends React.Component {
  render(){
    return (
      <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body>
      	<main dangerouslySetInnerHTML={{__html: main}} />
        <script src="/bundle.js" async></script>
      </body>
      </html>
    )
  }
};

export default Layout;