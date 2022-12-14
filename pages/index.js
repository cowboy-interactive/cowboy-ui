import { useState } from "react";
import { Button } from "components/Button/Button";
import { Card } from "components/Card/Card";
import { Container } from "components/Container/Container";
import { Column } from "components/Container/Column";
import { Section } from "components/Container/Section";
import { Grid } from "components/Grid/Grid";
import { Img } from "components/Img/Img";
import { H1 } from "components/Text/H1";
import { H2 } from "components/Text/H2";
import { H3 } from "components/Text/H3";
import { Text } from "components/Text/Text";
import useScrollTop from "hooks/useScrollTop";
import useWindowSize from "hooks/useWindowSize";

import dynamic from "next/dynamic";
const Scene = dynamic(() => import("components/Scene"), { ssr: true });

export default function Home() {
  const scrollTop = useScrollTop();
  const windowSize = useWindowSize();
  const [position] = useState({ x: 0, y: 0 });

  return (
    <Column xl="padding-top: 100px;">
      <Scene
        windowSize={windowSize}
        scrollTop={scrollTop}
        position={position}
      />
      <Section>
        <Column>
          <H1
            xl="max-width: 600px;"
            lg="max-width: 450px;"
            sm="max-width: 350px;"
          >
            Quickly Develop Your Next Project
          </H1>
          <Text xl="max-width: 400px;">
            Easy to use, beautifully designed components and templates to
            jumpstart your next project
          </Text>
          <Container sm="flex-direction: column;">
            <Button
              href="https://github.com/cowboy-interactive/cowboy-template/blob/main/README.md"
              target="_blank"
            >
              Browse Components
            </Button>
            <Button
              href="https://github.com/cowboy-interactive/cowboy-template/blob/main/README.md"
              target="_blank"
              xl="margin: 0 0 0 20px; background: white;"
              sm="margin: 20px 0 0 0;"
            >
              Get the Template
            </Button>
          </Container>
        </Column>
      </Section>

      <Section xl="justify-content: center;" sm="align-items: center;">
        <Column
          xl="align-items: center; text-align: center; width: 400px;"
          xs="align-items: flex-start; text-align: left; width: 100%; "
        >
          <H2>A fully customizable Next JS template</H2>
          <Text>
            The only template you need. Featuring Next{"\u00A0"}JS, Styled
            {"\u00A0"}Components and Framer{"\u00A0"}Motion.
          </Text>
        </Column>
      </Section>

      <Section xl="align-items: center;" xs="align-items: flex-start;">
        <Column
          xl="max-width: 400px;"
          sm="align-items: center; text-align: center;"
          xs="align-items: flex-start; text-align: left;"
        >
          <H2>Write responsive CSS from the top level</H2>
          <Text>
            Set your breakpoints and use media queries to write vanilla CSS on
            any component.
          </Text>
        </Column>
        <Img src="/images/screen-1.png" xl="max-width: 500px;" />
      </Section>

      <Section
        xl="align-items: center;"
        sm="flex-direction: column-reverse;"
        xs="align-items: flex-start;"
      >
        <Img src="/images/screen-2.png" xl="max-width: 500px;" />
        <Column
          xl="max-width: 400px;"
          md="width: 100%; align-items: center; text-align: center;"
          xs="align-items: flex-start; text-align: left;"
        >
          <H2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            A simple, easy to use animation library
          </H2>
          <Text
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            Create elegant on-scroll animations, on any component, using Framer
            Motion.
          </Text>
        </Column>
      </Section>

      <Section xl="align-items: center;" xs="align-items: flex-start;">
        <Column
          xl="max-width: 350px;"
          sm="align-items: center; text-align: center;"
          xs="align-items: flex-start; text-align: left;"
        >
          <H2>High performance out of the box</H2>
          <Text>
            Set your breakpoints and use media queries to write vanilla CSS on
            any component.
          </Text>
        </Column>
        <Img src="/images/lighthouse-1.png" xl="max-width: 500px;" />
      </Section>

      <Section>
        <Column
          xl="width: 100%; align-items: center; text-align: center;"
          sm="align-items: flex-start; text-align: left;"
        >
          <H2 xl="max-width: 300px;">Familiar and easy to learn</H2>
          <Text xl="max-width: 300px;">
            No need to learn complicated class names. Just plain CSS.
          </Text>
          <Grid
            sm="grid-template-columns: 2fr 2fr;"
            xs="grid-template-columns: 2fr;"
          >
            <Card>
              <H3>Documentation</H3>
              <Text>See what you can do with our template here.</Text>
            </Card>
            <Card>
              <H3>Image Optimization</H3>
              <Text>Automatic Image Optimization with instant builds.</Text>
            </Card>
            <Card>
              <H3>Theme Provider</H3>
              <Text>
                Easily implement dark mode and different themes for your site.
              </Text>
            </Card>
            <Card>
              <H3>Tutorials</H3>
              <Text>Automatic Image Optimization with instant builds.</Text>
            </Card>
            <Card>
              <H3>Components</H3>
              <Text>Automatic Image Optimization with instant builds.</Text>
            </Card>
            <Card>
              <H3>Templates</H3>
              <Text>Automatic Image Optimization with instant builds.</Text>
            </Card>
          </Grid>
        </Column>
      </Section>
    </Column>
  );
}
