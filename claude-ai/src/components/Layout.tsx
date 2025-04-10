"use client";
import * as React from "react";
import { Authenticator, Flex, ColorMode } from "@aws-amplify/ui-react";
import { ConversationsProvider } from "@/providers/ConversationsProvider";
import { SidebarProvider } from "@/providers/SidebarProvider";
import { Header } from "./Header";

interface LayoutProps extends React.PropsWithChildren {
  colorMode: ColorMode;
}

export const Layout = ({ children, colorMode }: LayoutProps) => {
  return (
    <Authenticator>
      <ConversationsProvider>
        <SidebarProvider>
          <Flex direction="column" width="100vw" height="100vh" overflow="hidden">
            <Header colorMode={colorMode} />
            <Flex direction="row" flex="1" overflow="hidden">
              {children}
            </Flex>
          </Flex>
        </SidebarProvider>
      </ConversationsProvider>
    </Authenticator>
  );
};
