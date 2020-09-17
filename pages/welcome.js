import React, { Component } from 'react'
import { Button, Icon, Grid, Header, Card } from 'semantic-ui-react'
import Link from 'next/link'
import Layout from '../components/Layout'

class Welcome extends Component {
  render() {
    return (
      <Layout hideHeader={true}>
        <Grid
          textAlign="center"
          style={{ height: '100vh' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 500 }}>
            <Header as="h2" icon>
              <Icon name="settings" />
              Welcome To The AAVE Liquidator!
              <Header.Subheader>
                In order to start liquidating you need to set up a few things
              </Header.Subheader>
            </Header>
            <Link href="/settings">
              <Button
                size="huge"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #2EBAC6 0%, #B6509E 51%, #2EBAC6 100%)',
                  backgroundSize: '200% auto',
                  color: 'white',
                }}
              >
                Get Started!
              </Button>
            </Link>
          </Grid.Column>
        </Grid>
      </Layout>
    )
  }
}

export default Welcome
