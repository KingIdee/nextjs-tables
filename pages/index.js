import Head from 'next/head'


const Index = () => (
  <div>

  <Head>
    <title>My page title</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <script src="https://js.pusher.com/4.1/pusher.min.js"></script>
    <script>

      // Enable pusher logging - don't include this in production
      Pusher.logToConsole = true;

      var pusher = new Pusher('0692d45b06e1a8914181', {
        cluster: 'eu',
        encrypted =  true
      });

      var channel = pusher.subscribe('my-channel');
      channel.bind('my-event', function(data) {
        alert(data.message)
      });
    </script>
  </Head>


    <p>Hello Next.js</p>
    <table>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
        </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
    </table>

  </div>


)

export default Index
